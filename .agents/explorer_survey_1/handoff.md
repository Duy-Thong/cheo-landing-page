# Handoff Report: Routing, Page Inventory & Architecture Audit

**Core Assessment**: The project is a client-side SPA built with Vite 8.3, React 19.2, and Tailwind CSS v4, utilizing a custom hash-based router (`matchRoute` in `sitemapRoutes.ts`) that cleanly handles 30 route definitions (29 unique paths). However, there are critical content and UI architectural deficits: the core Hub pages (`/kham-pha`, `/gioi-thieu`, `/tien-ich`) are flat generic card lists; `/kham-pha/cheo-hien-dai` is virtually an empty 1-paragraph stub while its rich component `ModernCheoShowcase.tsx` remains completely orphaned; `/kham-pha/san-khau/am-thanh` is a simplistic 4-tab player lacking the requested 4-stage theatrical journey timeline and instrument cards; and multiple sub-pages rely on outdated tabbed UI patterns.

---

## 1. Observation

### 1.1 Technical Stack & Build Setup
- **`package.json`** (Lines 1-28):
  - Framework: Vite SPA (`vite`: `^8.3.0`, `@vitejs/plugin-react`: `^6.1.1`). **Not Next.js** (no App Router or Pages Router).
  - React version: React 19 (`react`: `^19.2.8`, `react-dom`: `^19.2.8`, `@types/react`: `^19.2.18`).
  - Styling: Tailwind CSS v4 (`tailwindcss`: `^4.3.3`, `@tailwindcss/vite`: `^4.3.3`).
  - Icons: `lucide-react` (`^1.47.0`).
  - Linter: `oxlint` (`^1.81.0`).
  - Build script: `npm run build` runs `tsc -b && vite build`.
- **Build Status**:
  - Command: `npm run build` executed cleanly in ~260ms without TypeScript errors or warnings.
  - Output bundle: `dist/index.html` (0.98 kB), `dist/assets/index-*.css` (79.07 kB), `dist/assets/index-*.js` (400.07 kB).

### 1.2 Routing Mechanism & Core Components
- **`src/App.tsx`** (Lines 22-44, 55-66):
  - Listens to `window.location.hash`:
    ```ts
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '')
      const path = hash ? `/${hash}` : '/'
      setCurrentPath(path)
    }
    ```
  - State rendering:
    - If `currentPath === '/' || currentPath === '/sanh'` -> `<HomePage onNavigate={navigateTo} />`
    - Otherwise -> `<MuseumView route={activeRoute} onNavigate={navigateTo} />` where `activeRoute = matchRoute(currentPath)`
- **`src/data/sitemapRoutes.ts`** (Lines 501-518):
  - `matchRoute(hash: string)`:
    - Normalizes path with leading slash.
    - Direct key match in `SITEMAP_ROUTES[path]`.
    - Fallback matching by last path segment (`r.id === lastSegment || r.path.endsWith('/' + lastSegment)`).
    - Default fallback to `SITEMAP_ROUTES['/']` (`sanh`).
- **`src/components/MuseumView.tsx`** (Lines 38-40, 140-178, 180-188):
  - Central dynamic renderer for all non-home pages.
  - Reads data from `PAGE_DETAILS_MAP[route.id]` in `src/data/pageDetailsData.ts`.
  - Hub logic: if `route.isHub && route.childrenPaths`, maps over `childrenPaths` to render generic 2-column cards.
  - Interactive widget logic:
    ```tsx
    {route.widgetType === 'audio' && <AudioSamplePlayer />}
    {route.widgetType === 'characters' && <CharactersGallery />}
    {route.widgetType === 'costumes' && <CostumesShowcase />}
    {route.widgetType === 'ticket' && <TicketBookingWidget />}
    {route.widgetType === 'timeline' && <TimelineWidget />}
    {route.widgetType === 'feedback' && <FeedbackWidget />}
    {route.widgetType === 'plays' && <PlaysShowcase />}
    ```
  - **Notice**: There is NO handler for `ModernCheoShowcase`.
- **Orphaned / Unused Components in Codebase**:
  1. `src/components/interactive/ModernCheoShowcase.tsx` (367 lines): Fully created with 1951 milestones, NSND Tào Mạt, NSND Dịu Hương, Cả Tam, Bài Ca Giữ Nước, UNESCO, but **never imported or rendered** in `MuseumView.tsx` or `App.tsx`!
  2. `src/components/DetailPageRenderer.tsx` (260 lines): Legacy renderer superseded by `MuseumView.tsx`.
  3. `src/components/SitemapDirectory.tsx` (158 lines): Standalone directory component not mounted in current UI.
  4. `src/components/NodeDetailDrawer.tsx` (174 lines): Slide-out drawer component not mounted in current UI.

### 1.3 Complete Route Inventory Table

The codebase defines 30 route entries in `SITEMAP_ROUTES` (29 unique logical paths, since `/` and `/sanh` both map to ID `sanh`), all of which have corresponding content definitions in `PAGE_DETAILS_MAP`:

| # | Route Path | Route ID | Title | Page Type | Current Widget / UI Pattern | Content Status in `pageDetailsData.ts` | Gap Analysis & Requirements to fulfill `ORIGINAL_REQUEST.md` |
|---|------------|----------|-------|-----------|-----------------------------|---------------------------------------|---------------------------------------------------------------|
| 1 | `/` | `sanh` | Sảnh Đón Tiếp | Home | `HomePage.tsx` (Hero, sections, interactive embed) | Rich home layout | Good foundational entrance, but hero and stage tab switchers use tabs. |
| 2 | `/sanh` | `sanh` | Sảnh Đón Tiếp | Home (alias) | `HomePage.tsx` | Identical to `/` | Fully functioning alias. |
| 3 | `/gioi-thieu` | `gioi-thieu` | Không Gian Giới Thiệu | Hub (4 children) | Generic 2-col child cards + 1 text section | 1 short paragraph | **Deficient**: Needs thematic exhibition banner, milestone metrics, rich intro showcase. |
| 4 | `/gioi-thieu/bao-tang-so-cheo` | `bao-tang-so-cheo` | Bảo Tàng Số “Chèo” | Leaf | Text-only (1 section + 3 bullets) | 1 section | **Sparse**: Needs digital museum showcase, Web3D/interactive preview blocks, structured metadata. |
| 5 | `/gioi-thieu/cau-chuyen-hinh-thanh` | `cau-chuyen-hinh-thanh` | Câu Chuyện Hình Thành | Leaf | Text-only (1 section, 1 fun fact) | 1 section | **Sparse**: Field trip journey needs interactive map/timeline of ancient Chèo villages (Khuốc, Yên Khánh). |
| 6 | `/gioi-thieu/muc-tieu-va-y-nghia` | `muc-tieu-va-y-nghia` | Mục Tiêu Và Ý Nghĩa | Leaf | Text-only (1 section with 3 numbered bullets) | 1 section | **Sparse**: Needs 3 strategic pillars visualized into card blocks with feature pills. |
| 7 | `/gioi-thieu/doi-ngu-nhom-thuc-hien` | `doi-ngu-nhom-thuc-hien` | Đội Ngũ/ Nhóm Thực Hiện | Leaf | Text-only (2 sections) | 2 sections | **Sparse**: Needs visual team/advisor grid cards (Artistic Council, Folk Artisans, Engineers). |
| 8 | `/kham-pha` | `kham-pha` | Không Gian Khám Phá | **Main Hub (R1)** | Generic 2-col child cards (3 children) + 1 section | 1 section | **CRITICAL DEFICIT (R1)**: Currently bare cards. Must visualize 3 heritage pillars (History, Stage, Modern Chèo), key metrics (10+ centuries, 200+ melodies, 5 archetypes), and rich room previews. |
| 9 | `/kham-pha/tong-quan` | `tong-quan` | Tổng Quan Nghệ Thuật Chèo | Sub-hub (3 children) | 2-col child cards + `TimelineWidget` | 1 section | **Deficient**: Child cards are bare; timeline widget uses flat tabs. Needs thematic intro. |
| 10 | `/kham-pha/tong-quan/lich-su-phat-trien` | `lich-su-phat-trien` | Lịch Sử Phát Triển | Leaf | `TimelineWidget` (4 tabs) + 3 sections | 3 sections + quote | **Needs upgrade**: Timeline currently uses 4 tab buttons. Needs continuous vertical/horizontal journey timeline. |
| 11 | `/kham-pha/tong-quan/gia-tri-van-hoa` | `gia-tri-van-hoa` | Giá Trị Văn Hoá | Target Page | Text-only (2 sections) | 2 sections | **Sparse**: Needs structured cards for folk satire (Hề), filial piety, moral philosophy, quote callouts. (Shorthand `/gia-tri-van-hoa` works via fallback). |
| 12 | `/kham-pha/tong-quan/phia-sau-san-khau` | `phia-sau-san-khau` | Phía Sau Sân Khấu | Target Page | Text-only (2 sections) | 2 sections | **Sparse**: Needs visual breakdown of "Nhất thanh, nhị sắc, tam tinh, tứ nghệ", makeup art, multi-use props (quạt mo). |
| 13 | `/kham-pha/san-khau` | `san-khau` | Không Gian Sân Khấu | Sub-hub (4 children) | 2-col child cards + `PlaysShowcase` (tabs) | 1 section | **Deficient**: Main stage hub lacks theatrical atmosphere; embeds plays showcase with tabs. |
| 14 | `/kham-pha/san-khau/nhan-vat` | `nhan-vat` | Nhân Vật | Leaf | `CharactersGallery` (5 tabs) + 1 section | 1 section | **Needs upgrade**: Tab-based switcher across Đào, Kép, Hề, Lão, Mụ. Should be multi-tier card grid/gallery. |
| 15 | `/kham-pha/san-khau/trang-phuc` | `trang-phuc` | Trang Phục | Leaf | `CostumesShowcase` (5 tabs) + 1 section | 1 section + quote | **Needs upgrade**: Tab-based switcher across Áo tứ thân, Nón quai thao, Yếm đào, etc. Should be showcase grid. |
| 16 | `/kham-pha/san-khau/am-thanh` | `am-thanh` | Âm Thanh & Làn Điệu | **Target Page (R3)** | `AudioSamplePlayer` (4 tabs) + 1 section | 1 section + quote | **CRITICAL DEFICIT (R3)**: Missing 4-stage theatrical sound timeline (Hiệu lệnh mở màn, Xưng danh, Trữ tình, Hề trào lộng) & independent instrument cards grid (Trống đế, Trống cơm, Nguyệt, Nhị, Sáo, Thanh la/Mõ). |
| 17 | `/kham-pha/san-khau/tac-pham-tieu-bieu` | `tac-pham-tieu-bieu` | Tác Phẩm Tiêu Biểu | Leaf | `PlaysShowcase` (4 tabs) + 1 section | 1 section | **Needs upgrade**: Tab buttons for 4 masterpieces. Needs multi-column showcase cards. |
| 18 | `/kham-pha/cheo-hien-dai` | `cheo-hien-dai` | Chèo Hiện Đại | **Target Page (R2)** | Text-only (1 single 2-sentence section), NO widget | **1 short paragraph (stub)** | **CRITICAL DEFICIT (R2)**: Completely lacks 1951 founding milestone, artists (Tào Mạt, Cả Tam, Dịu Hương), and UNESCO dossier. `ModernCheoShowcase.tsx` has this data but is unlinked and uses tabs! |
| 19 | `/tien-ich` | `tien-ich` | Không Gian Tiện Ích | Hub (6 children) | Generic 2-col child cards + 1 section | 1 section | **Deficient**: Bare card list. Needs service overview banner and feature highlights. |
| 20 | `/tien-ich/tim-kiem` | `tim-kiem` | Tìm Kiếm | Leaf | Text-only (1 section) | 1 section | **Placeholder**: Functional search is in `SearchModal`. Page should offer structured directory/tag search. |
| 21 | `/tien-ich/danh-gia-cai-thien` | `danh-gia-cai-thien` | Đánh Giá/ Cải Thiện | Leaf | `FeedbackWidget` (star rating, form) | 1 section | Functional interactive form. |
| 22 | `/tien-ich/ban-do-bao-tang` | `ban-do-bao-tang` | Bản Đồ Bảo Tàng | Target Page | Text-only (1 section) | 1 section | **Placeholder**: Needs visual interactive 2D/3D floorplan representation of the museum spaces. |
| 23 | `/tien-ich/kho-tu-lieu` | `kho-tu-lieu` | Kho Tư Liệu | Target Page | Text-only (1 section) | 1 section | **Placeholder**: Needs curated archive cards: 78 RPM vinyl records, handwritten scripts, academic monographs. |
| 24 | `/tien-ich/tham-quan-va-su-kien` | `tham-quan-va-su-kien` | Tham Quan Và Sự Kiện | Sub-hub (5 children) | 2-col child cards + `TicketBookingWidget` | 1 section | Needs thematic event banner and clean presentation. |
| 25 | `/tien-ich/tham-quan-va-su-kien/thong-bao-su-kien` | `thong-bao-su-kien` | Thông Báo Sự Kiện | Leaf | Text-only (1 bullet list of 2 events) | 1 section | **Placeholder**: Needs event calendar/cards with dates, locations, registration status. |
| 26 | `/tien-ich/tham-quan-va-su-kien/lich-bieu-dien` | `lich-bieu-dien` | Lịch Biểu Điễn | Leaf | `TicketBookingWidget` + 1 section | 1 section | Functional booking, but needs clear weekly theater schedule grid. |
| 27 | `/tien-ich/tham-quan-va-su-kien/dat-mua-ve` | `dat-mua-ve` | Đặt Mua Vé | Leaf | `TicketBookingWidget` + 1 section | 1 section | Functional interactive ticket widget with seat selection and QR checkout. |
| 28 | `/tien-ich/tham-quan-va-su-kien/dia-diem-bieu-dien` | `dia-diem-bieu-dien` | Địa Điểm Biểu Diễn | Leaf | Text-only (1 section with 4 plain lines) | 1 section | **Placeholder**: Needs directory cards for theaters (Kim Mã, Đại Nam, Ninh Bình) with addresses, hotlines, maps. |
| 29 | `/tien-ich/tham-quan-va-su-kien/thong-tin-tham-quan` | `thong-tin-tham-quan` | Thông Tin Tham Quan | Leaf | Text-only (1 section) | 1 section | **Placeholder**: Needs visitor guide cards (opening hours, audio guide specs, pricing tiers, FAQs). |
| 30 | `/tien-ich/thong-tin-va-ho-tro` | `thong-tin-va-ho-tro` | Thông Tin Và Hỗ Trợ | Leaf | Text-only (1 section with hotline & email) | 1 section | **Placeholder**: Needs structured contact cards, interactive FAQ accordions, VR support channels. |

### 1.4 Navigation Link & Dead Link Audit
1. **Header Navigation (`src/components/Navbar.tsx`)**:
   - Desktop & Mobile Dropdowns:
     - 4 links under Giới Thiệu (`/gioi-thieu/bao-tang-so-cheo`, `/cau-chuyen-hinh-thanh`, `/muc-tieu-va-y-nghia`, `/doi-ngu-nhom-thuc-hien`) -> All 4 match valid routes.
     - 8 links under Khám Phá (`/kham-pha/san-khau`, `/nhan-vat`, `/trang-phuc`, `/am-thanh`, `/tac-pham-tieu-bieu`, `/tong-quan`, `/lich-su-phat-trien`, `/gia-tri-van-hoa`, `/phia-sau-san-khau`, `/cheo-hien-dai`) -> All match valid routes.
     - 10 links under Tiện Ích (Tham quan/sự kiện sub-routes + công cụ số) -> All match valid routes.
     - Tra cứu button -> opens `SearchModal` (functional).
     - Đặt Mua Vé button -> navigates to `/tien-ich/tham-quan-va-su-kien/dat-mua-ve` (functional).
   - **Result**: Zero dead links in `Navbar.tsx`.
2. **Footer Navigation (`src/App.tsx`, lines 148-204)**:
   - 4 Giới Thiệu links, 6 Khám Phá links, 5 Tiện Ích links -> All 15 match valid routes in `SITEMAP_ROUTES`.
   - "Sơ đồ không gian bảo tàng" button -> opens `SitemapTree` modal (functional).
   - **Result**: Zero dead links in Footer.
3. **Home Page CTAs (`src/components/HomePage.tsx`)**:
   - Primary Hero CTAs: `/kham-pha/san-khau`, `/kham-pha/san-khau/am-thanh`, `/tien-ich/tham-quan-va-su-kien/dat-mua-ve` -> All match valid routes.
   - Section explore buttons: `/gioi-thieu`, `/gioi-thieu/bao-tang-so-cheo`, `/kham-pha/tong-quan/lich-su-phat-trien`, `/tien-ich`, `/tien-ich/tham-quan-va-su-kien/lich-bieu-dien`, `/tien-ich/kho-tu-lieu` -> All match valid routes.
   - **Result**: Zero dead links in `HomePage.tsx`.
4. **Breadcrumbs & Child Cards (`src/components/MuseumView.tsx`)**:
   - Breadcrumbs construct links from `route.breadcrumbs`. In `sitemapRoutes.ts`, all breadcrumb path entries point to valid parents (`/`, `/gioi-thieu`, `/kham-pha`, `/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/tien-ich`, `/tien-ich/tham-quan-va-su-kien`).
   - Hub child cards construct links from `route.childrenPaths`. All children point to existing routes.
   - **Result**: Zero broken breadcrumb or child-card links.
5. **Shorthand URLs Resolution**:
   - URLs mentioned in user request: `/gia-tri-van-hoa`, `/phia-sau-san-khau`, `/kho-tu-lieu`, `/ban-do-bao-tang`.
   - In `sitemapRoutes.ts`: `matchRoute(hash)` splits by `/` and checks `r.id === lastSegment`.
   - All 4 shorthand paths match their corresponding full routes (`/kham-pha/tong-quan/gia-tri-van-hoa`, `/kham-pha/tong-quan/phia-sau-san-khau`, `/tien-ich/kho-tu-lieu`, `/tien-ich/ban-do-bao-tang`).
   - **Recommendation**: To ensure absolute resilience against direct URL entry without relying on fallback segment matching, explicit aliases should be added to `SITEMAP_ROUTES`.

---

## 2. Logic Chain

1. **Premise 1**: The user request and extended requirements (`ORIGINAL_REQUEST.md`) mandate:
   - R1: Redesign `/kham-pha` from a bare card list into an immersive heritage entrance visualizing 3 pillars and key metrics.
   - R2: Build comprehensive content and interface for Chèo Hiện Đại (`/kham-pha/cheo-hien-dai`) covering 1951 milestones, pioneer artists (NSND Tào Mạt, Cả Tam, NSND Dịu Hương), and UNESCO heritage efforts.
   - R3: Redesign Âm Thanh (`/kham-pha/san-khau/am-thanh`) into a 4-stage theatrical sound journey timeline and independent instrument card showcase.
   - R4 & Extended: Transform ALL hub pages into vibrant exhibitions with banners and metrics; expand all placeholder pages; abolish flat tab UI across all pages into cards, timelines, and grids; eliminate long subtitle text.
2. **Observation Step 1**: In `sitemapRoutes.ts` and `MuseumView.tsx`, `/kham-pha` renders a standard generic loop over `route.childrenPaths` (3 text cards) without any visual banners, metrics (10+ centuries, 200+ melodies, 5 archetypes), or pillar previews.
   - *Inference 1*: `/kham-pha` fails Acceptance Criteria 41 and R1.
3. **Observation Step 2**: In `pageDetailsData.ts`, `cheo-hien-dai` has only 1 generic heading and 1 paragraph (lines 413-429). In `sitemapRoutes.ts`, `cheo-hien-dai` has no `widgetType`. In `MuseumView.tsx`, there is no modern chèo widget. Meanwhile, `ModernCheoShowcase.tsx` exists in `src/components/interactive/` with 367 lines of curated data matching R2, but is completely orphaned and unused. Furthermore, `ModernCheoShowcase.tsx` uses internal tab switching (`activeTab: 'timeline' | 'masterpieces' | 'artists' | 'unesco'`).
   - *Inference 2*: `/kham-pha/cheo-hien-dai` fails Acceptance Criteria 42 and R2. To fulfill R2, `ModernCheoShowcase.tsx` must be converted from tabs into a multi-tiered showcase (Milestone Timeline + Artist Gallery + Masterpiece Grid + UNESCO Block) and linked into `MuseumView.tsx`.
4. **Observation Step 3**: In `AudioSamplePlayer.tsx` (lines 87-109), the player uses a 4-button tab selector (`SAMPLE_MELODIES`). It has NO theatrical performance timeline (Hiệu lệnh mở màn, Ra ngô ra khoai, Làn điệu trữ tình, Tiếng cười trào lộng) and NO individual instrument cards for the Chèo orchestra.
   - *Inference 3*: `/kham-pha/san-khau/am-thanh` fails Acceptance Criteria 43 and R3.
5. **Observation Step 4**: Inspection of `CharactersGallery.tsx`, `CostumesShowcase.tsx`, `PlaysShowcase.tsx`, `TimelineWidget.tsx`, and `HomePage.tsx` revealed that all of them rely on `useState` tab switches (`selectedChar`, `selectedCostume`, `selectedPlay`, `activeEra`, `stageTab`).
   - *Inference 4*: Violates extended requirement 3 ("Thay thế các UI tab đơn điệu trên toàn bộ các trang thành dạng Card, Timeline, Grid đa tầng, Showcase trực quan sinh động").
6. **Observation Step 5**: Content audit across `pageDetailsData.ts` revealed that pages `/gioi-thieu/bao-tang-so-cheo`, `/gioi-thieu/cau-chuyen-hinh-thanh`, `/gioi-thieu/muc-tieu-va-y-nghia`, `/gioi-thieu/doi-ngu-nhom-thuc-hien`, `/gia-tri-van-hoa`, `/phia-sau-san-khau`, `/tien-ich/ban-do-bao-tang`, `/tien-ich/kho-tu-lieu`, `/tien-ich/thong-tin-tham-quan`, `/tien-ich/dia-diem-bieu-dien` only contain 1 or 2 generic text blocks.
   - *Inference 5*: Violates extended requirements 1 & 2 ("Tất cả các trang trung gian... và tất cả các trang nội dung... tuyệt đối không để trang nào sơ sài").

---

## 3. Caveats

1. **Read-Only Constraint**: As an explorer subagent, no source code files outside `.agents/explorer_survey_1` were altered. Proposed solutions must be executed by downstream builder/editor agents.
2. **Local Image Assets**: Current available local photography in `public/images/` consists of 4 files:
   - `cheo_hero.jpg` (722 KB)
   - `cheo_dinh_lang.jpg` (1.03 MB)
   - `cheo_costume.jpg` (842 KB)
   - `cheo_instruments.jpg` (847 KB)
   New sections requiring imagery can either utilize these 4 high-resolution cultural assets, SVG illustrations, or curated visual cards with CSS gradients and icon treatments.
3. **Hash Routing vs Browser History**: Because the application uses hash routing (`#/<path>`), browser refreshes and bookmarking work without requiring server-side fallback rewriting in production. However, any new route added must be registered in `SITEMAP_ROUTES` to ensure consistency with `SitemapTree` and search indexing.

---

## 4. Conclusion & Action Plan

The application possesses a solid Vite SPA architecture and clean build pipeline (`npm run build` passes 100%), but the presentation layer and data depth suffer from widespread placeholder syndome and tab overuse. 

### Implementation Action Plan for Downstream Agents:
1. **Milestone: Âm Thanh & Modern Chèo Transformation (R2 & R3)**:
   - **`AudioSamplePlayer.tsx`**: Re-architect into `StageAudioTimelineAndInstruments.tsx`:
     - Stage 1: Theatrical Audio Progression Timeline (4 stages: Hiệu Lệnh Khởi Nhạc, Hát Xưng Danh, Làn Điệu Trữ Tình, Tiếng Cười Trào Lộng).
     - Stage 2: Showcase Grid of 6 Traditional Instruments (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ) with meta badges, audio play button, timbre description, and rhythmic role.
   - **`ModernCheoShowcase.tsx`**: Refactor from internal tabs into a vertically flowing, multi-tiered exhibition:
     - Tier 1: 1951 Historic Transformation Milestone Banner.
     - Tier 2: Pioneer Masters & Artists Grid Cards (NSND Tào Mạt, Cả Tam, NSND Dịu Hương, Thanh Hoài).
     - Tier 3: Masterpiece Showcase Grid ("Bài ca giữ nước", "Nàng Sita", "Hồ Xuân Hương").
     - Tier 4: UNESCO Dossier & Heritage Preservation Card.
   - Wire `ModernCheoShowcase` into `MuseumView.tsx` and assign `widgetType: 'modern'` in `sitemapRoutes.ts`.
2. **Milestone: Hub Pages & Exhibition Entrances (R1 & Extended Scope)**:
   - Enhance `MuseumView.tsx` to detect major hub routes (`/kham-pha`, `/gioi-thieu`, `/tien-ich`, `/kham-pha/tong-quan`, `/kham-pha/san-khau`, `/tien-ich/tham-quan-va-su-kien`) and render custom hero exhibition banners, key metric counters, and enriched preview cards instead of bare 2-column links.
3. **Milestone: Tab Elimination & Information Architecture Modernization (R4)**:
   - Modernize `CharactersGallery.tsx`, `CostumesShowcase.tsx`, and `PlaysShowcase.tsx` to eliminate flat tab switches in favor of responsive multi-column showcase cards with feature pills, meta badges, and key-value properties.
4. **Milestone: Data Enrichment in `pageDetailsData.ts`**:
   - Expand `gia-tri-van-hoa`, `phia-sau-san-khau`, `kho-tu-lieu`, `ban-do-bao-tang`, and Giới thiệu pages with profound cultural copy, historical facts, and structured bullet lists.
5. **Clean Up Orphaned Files**:
   - Either adopt or safely deprecate `DetailPageRenderer.tsx`, `SitemapDirectory.tsx`, and `NodeDetailDrawer.tsx`.

---

## 5. Verification Method

To independently verify all findings and validate future implementations:

1. **Build Verification**:
   ```bash
   npm run build
   ```
   *Pass criteria*: Zero TypeScript diagnostics, zero Vite bundling warnings/errors.
2. **Route Resolution Verification**:
   Test navigating in the browser to:
   - `http://localhost:5173/#/kham-pha` -> Must show 3 heritage pillars & metrics.
   - `http://localhost:5173/#/kham-pha/cheo-hien-dai` -> Must render full modern Chèo showcase without tabs.
   - `http://localhost:5173/#/kham-pha/san-khau/am-thanh` -> Must render 4-stage timeline & 6 instrument cards.
   - `http://localhost:5173/#/gia-tri-van-hoa` -> Must resolve correctly via fallback to `/kham-pha/tong-quan/gia-tri-van-hoa`.
3. **Code Inspection**:
   - Inspect `src/components/MuseumView.tsx` to verify all widget types are handled.
   - Inspect `src/components/Navbar.tsx` and `src/App.tsx` footer to verify link consistency.
4. **Invalidation Conditions**:
   - If any navigation link results in a 404 or falls back unexpectedly to `/sanh`.
   - If `npm run build` fails at any point during code modification.