# BÁO CÁO TOÀN DIỆN: ĐẶC TẢ RANH GIỚI TỆP, RỦI RO BUILD/TYPE VÀ CHIẾN LƯỢC KIỂM ĐỊNH FORENSIC CHO MILESTONE 1

**Tác giả**: Explorer M1-3 (`teamwork_preview_explorer`)  
**Mã tiến trình**: Milestone 1 — Data & UI Primitives Integration Strategy  
**Tài liệu tham chiếu**: `PROJECT.md`, `.agents/ORIGINAL_REQUEST.md`, `.agents/explorer_survey_1/2/3`  
**Ngày thực hiện**: 2026-09-18T17:34:00Z  

---

## 1. OBSERVATION (QUAN SÁT THỰC NGHIỆM TRỰC TIẾP)

Dựa trên việc kiểm tra trực tiếp toàn bộ cây thư mục mã nguồn và hệ thống cấu hình build của dự án:

### 1.1 Khảo sát Cấu hình Trình biên dịch TypeScript & Bundler
- **Tệp cấu hình**: `tsconfig.app.json` (dòng 1-27).
  - Dòng 12: `"moduleResolution": "bundler"`
  - Dòng 13: `"allowImportingTsExtensions": true`
  - Dòng 14: `"verbatimModuleSyntax": true`
  - Dòng 16: `"noEmit": true`
  - Dòng 20: `"noUnusedLocals": true`
  - Dòng 21: `"noUnusedParameters": true`
  - Dòng 22: `"erasableSyntaxOnly": true`
- **Quan sát thực nghiệm**:
  - Với `"verbatimModuleSyntax": true`, TypeScript cấm triệt để việc import interface/type bằng cú pháp import thông thường nếu trình biên dịch không thể phân biệt ranh giới giá trị và kiểu dữ liệu. Việc dùng `import { RouteNode }` hoặc `import { FC } from 'react'` thay vì `import type { RouteNode }` / `import type { FC } from 'react'` sẽ gây lỗi biên dịch nghiêm trọng: `error TS1484: 'X' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled`.
  - Với `"noUnusedLocals": true` và `"noUnusedParameters": true`, bất kỳ import dư thừa hoặc biến khai báo không dùng sẽ gây lỗi dừng build: `TS6133` / `TS6138`.

### 1.2 Trạng thái Build & Lint Hiện Tại (Baseline Verification)
- Chạy lệnh `npm run build`:
  ```
  > tsc -b && vite build
  vite v8.3.0 building client environment for production...
  ✓ 1896 modules transformed.
  dist/index.html                   0.98 kB │ gzip:   0.58 kB
  dist/assets/index-BKkJrVC8.css   88.22 kB │ gzip:  12.28 kB
  dist/assets/index-DLU_cIUH.js   481.08 kB │ gzip: 133.01 kB
  ✓ built in 448ms (Exit code: 0)
  ```
- Chạy lệnh `npm run lint`:
  ```
  > oxlint
  Found 0 warnings and 0 errors.
  Finished in 20ms on 26 files with 116 rules using 12 threads. (Exit code: 0)
  ```
- Dự án hiện đang ở trạng thái build sạch 100% (Clean build & lint baseline).

### 1.3 Khảo sát Các Consumer Hiện Tại của Sitemap Routes & Page Details Data
- **Khảo sát `src/data/sitemapRoutes.ts` (522 dòng, 30 routes)**:
  - Được import tại:
    1. `src/App.tsx:15`: `import { matchRoute, SITEMAP_ROUTES } from './data/sitemapRoutes'`
    2. `src/components/MuseumView.tsx:15-16`: `import type { RouteNode } from '../data/sitemapRoutes'`, `import { SITEMAP_ROUTES } from '../data/sitemapRoutes'`
    3. `src/components/SearchModal.tsx:3`: `import { SITEMAP_ROUTES } from '../data/sitemapRoutes'`
  - **Phát hiện quan trọng tại `src/components/SearchModal.tsx:26 và 92`**:
    - Dòng 26: `n.subtitle.toLowerCase().includes(query.toLowerCase().trim())`
    - Dòng 92: `{item.subtitle || item.description}`
    - **Cảnh báo**: `SearchModal.tsx` gọi trực tiếp `.toLowerCase()` trên thuộc tính `subtitle`. Nếu M1 Worker xóa bỏ trường `subtitle` hoặc đổi thành optional (`subtitle?: string`) mà không có chuỗi mặc định, `SearchModal.tsx` sẽ sập runtime TypeError và lỗi TypeScript `TS18048: 'n.subtitle' is possibly 'undefined'`.
- **Khảo sát `src/data/pageDetailsData.ts` (748 dòng)**:
  - Được import tại:
    1. `src/components/MuseumView.tsx:17`: `import { PAGE_DETAILS_MAP } from '../data/pageDetailsData'`
    2. `src/components/DetailPageRenderer.tsx:10`: `import { PAGE_DETAILS_MAP } from '../data/pageDetailsData'`
  - Cả 2 component đều phụ thuộc vào các khóa ID tương ứng với từng route trong sitemap (ví dụ `'root'`, `'sanh'`, `'gioi-thieu'`, `'kham-pha'`, `'cheo-hien-dai'`, `'am-thanh'`, v.v.).

### 1.4 Khảo sát Cây Thư Mục & Các Thư Mục Mới
- Chưa tồn tại thư mục `src/types/` (cần tạo mới cho `src/types/cheoCulturalTypes.ts`).
- Chưa tồn tại thư mục `src/components/common/` (cần tạo mới cho 4 atomic UI components).
- Dữ liệu khảo sát từ `explorer_survey_3` đã chuẩn bị sẵn 2 bản thảo có giá trị:
  - `.agents/explorer_survey_3/proposed_cheoCulturalTypes.ts` (8,081 bytes)
  - `.agents/explorer_survey_3/proposed_cheoDataFiles.ts` (73,622 bytes)

---

## 2. LOGIC CHAIN (CHUỖI SUY LUẬN TỪ QUAN SÁT ĐẾN GIẢI PHÁP)

1. **Từ Quan sát 1.1 (`verbatimModuleSyntax` & `noUnusedLocals`)**:
   - *Suy luận*: Bất kỳ file `.ts` / `.tsx` nào được thêm mới bởi M1 Worker đều phải tuân thủ chuẩn strict type-only imports (`import type { ... }`). Nếu không tuân thủ, quá trình đóng gói `tsc -b` sẽ fail ngay lập tức, làm gián đoạn toàn bộ pipeline của các milestone sau.
   - *Kết luận*: Quy định nghiêm ngặt cú pháp import type trong toàn bộ 8 tệp của Milestone 1.

2. **Từ Quan sát 1.3 (Sự phụ thuộc của `SearchModal.tsx` và `MuseumView.tsx`)**:
   - *Suy luận*: Yêu cầu R4 nêu rõ: "Loại bỏ hoàn toàn kiểu nhét các đoạn văn mô tả dài dòng thành subtitle/text phụ dưới tiêu đề". Tuy nhiên, nếu M1 Worker xóa thuộc tính `subtitle` khỏi `RouteNode`, `SearchModal.tsx` sẽ bị vỡ. Do đó, "loại bỏ việc nhét text dài dòng" phải được hiểu là:
     (a) Rút gọn nội dung `subtitle` thành các định danh/tagline văn hóa ngắn gọn, trang nhã (ví dụ: `"10+ Thế Kỷ Di Sản"`, `"Bát Âm Dân Tộc & 200+ Điệu Hát"`).
     (b) Giữ nguyên kiểu `subtitle: string` trong interface `RouteNode`.
     (c) Bổ sung các trường siêu dữ liệu có cấu trúc mới (`metaBadges?: Array<{ label: string; variant?: string }>`, `quickSpecs?: Array<{ label: string; value: string }>`) vào `RouteNode` để các component hiển thị thay thế cho text văn xuôi.
   - *Kết luận*: Giữ 100% tính tương thích ngược cho `RouteNode` và `PageDetailContent`.

3. **Từ Quan sát 1.2 & Kiến trúc Song Song (Parallel Execution Safety)**:
   - *Suy luận*: Đội ngũ đang chạy song song nhiều agent (E2E Test Writer, Milestone 1 Worker, sắp tới là Milestone 2 Hub Worker). Nếu M1 Worker tự ý can thiệp vào `MuseumView.tsx`, `HomePage.tsx` hoặc `SearchModal.tsx`, sẽ xảy ra xung đột merge (merge conflict), làm gãy nhánh hoặc tạo ra các lỗi tương tranh (race conditions).
   - *Kết luận*: Thiết lập ranh giới ghi độc quyền nghiêm ngặt (Strict Whitelist): M1 Worker chỉ được ghi đúng 8 file được giao; tuyệt đối không sửa đổi các file ngoài danh mục.

4. **Từ Quan sát 1.4 & Interface Contracts trong `PROJECT.md:63-123`**:
   - *Suy luận*: Các milestone sau (M2, M3, M4) và bộ test E2E (M5) phụ thuộc trực tiếp vào đúng tên interface (`HeritagePillar`, `CulturalMetric`, `HubShowcaseData`, `CheoNightTimelinePhase`, `CheoInstrumentCard`) và đúng tên component (`MetaBadge`, `FeaturePill`, `KeyValueGrid`, `DecomposedHeader`). Nếu M1 Worker đặt tên sai lệch hoặc thiếu thuộc tính bắt buộc, toàn bộ hệ thống downstream sẽ không tích hợp được.
   - *Kết luận*: Khóa cứng schema interface và prop types theo đúng chuẩn `PROJECT.md`.

---

## 3. CAVEATS (GIỚI HẠN & ĐIỀU KIỆN RÀNG BUỘC)

1. **Phạm vi của Explorer**: Báo cáo này mang tính phân tích, khuyến nghị và kiến trúc kiểm định (Read-only Strategy). Explorer không tạo hay chỉnh sửa bất kỳ tệp nào trong `src/`.
2. **Thư mục `tests/`**: Kênh E2E (`test_writer_e2e`) đang khởi tạo các tệp kiểm thử tự động tại `tests/e2e/`. M1 Worker không can thiệp vào thư mục `tests/` nhưng phải đảm bảo mã nguồn M1 thỏa mãn các hợp đồng interface mà E2E test sẽ kiểm tra.
3. **Chưa gắn component vào `MuseumView.tsx`**: Trong Milestone 1, 4 atomic component (`MetaBadge`, `FeaturePill`, `KeyValueGrid`, `DecomposedHeader`) được tạo mới và kiểm tra độc lập tại `src/components/common/`. Việc gắn chúng vào `MuseumView.tsx` và `HomePage.tsx` sẽ do Worker Milestone 2 và 4 thực hiện để đảm bảo ranh giới phân công.

---

## 4. CONCLUSION: MA TRẬN RANH GIỚI TỆP, RỦI RO VÀ TIÊU CHÍ FORENSIC CHO M1

### 4.1 Ranh Giới Ghi Độc Quyền của Milestone 1 Worker (File Ownership Whitelist)

| STT | Đường dẫn tệp | Hành động | Quyền sở hữu | Mô tả & Trách nhiệm |
|:---:|---|:---:|:---:|---|
| **1** | `src/types/cheoCulturalTypes.ts` | **CREATE** | Độc quyền M1 | Khởi tạo toàn bộ domain interfaces (`HeritagePillar`, `CulturalMetric`, `HubShowcaseData`, `CheoNightTimelinePhase`, `CheoInstrumentCard`, v.v.). |
| **2** | `src/data/cheoCulturalData.ts` | **CREATE** | Độc quyền M1 | Khởi tạo kho dữ liệu văn hóa chuyên sâu (>70 KB): 3 trụ cột di sản, timeline 4 hồi âm thanh, 6 card nhạc cụ, Chèo hiện đại 1951 & UNESCO, hậu trường, tư liệu. |
| **3** | `src/components/common/MetaBadge.tsx` | **CREATE** | Độc quyền M1 | Atomic UI Primitive: Huy hiệu phân loại với 5 biến thể màu (`amber`, `red`, `emerald`, `sky`, `stone`) và hỗ trợ icon. |
| **4** | `src/components/common/FeaturePill.tsx` | **CREATE** | Độc quyền M1 | Atomic UI Primitive: Viên thuốc thuộc tính (`default`, `accent`) làm nổi bật điệu hát, chất liệu, kỹ thuật. |
| **5** | `src/components/common/KeyValueGrid.tsx` | **CREATE** | Độc quyền M1 | Atomic UI Primitive: Lưới thông số dạng cặp Nhãn - Giá trị đáp ứng đa kích thước màn hình. |
| **6** | `src/components/common/DecomposedHeader.tsx` | **CREATE** | Độc quyền M1 | Atomic UI Primitive: Header bài viết phân rã cấu trúc khoa học (Category badge + Title + Lead summary + MetaBadges + KeyValues). |
| **7** | `src/data/sitemapRoutes.ts` | **MODIFY** | Độc quyền M1 | Cập nhật cấu trúc sitemap: Rút gọn subtitle dài dòng thành tagline cô đọng; bổ sung `metaBadges` và `quickSpecs` cho tất cả 30 routes. Giữ nguyên 100% routes, ID và hàm `matchRoute`. |
| **8** | `src/data/pageDetailsData.ts` | **MODIFY** | Độc quyền M1 | Bổ sung nội dung chuyên sâu, `metaBadges`, `quickSpecs` cho các trang con, liên kết đồng bộ với `cheoCulturalData.ts`. |

> **⚠️ VÙNG CẤM TUYỆT ĐỐI (OUT OF BOUNDS FOR M1 WORKER)**:  
> - `src/components/MuseumView.tsx` (Thuộc quyền M2, M3, M4)  
> - `src/components/HomePage.tsx` (Thuộc quyền M4)  
> - `src/components/interactive/*` (Thuộc quyền M3, M4)  
> - `src/components/SearchModal.tsx`, `Navbar.tsx`, `DetailPageRenderer.tsx`, `SitemapTree.tsx`, `SitemapDirectory.tsx`  
> - `src/App.tsx`, `src/main.tsx`, `src/index.css`, `index.html`  
> - `package.json`, `tsconfig*.json`, `vite.config.ts`, `.oxlintrc.json`  
> - `tests/**` (Thuộc quyền E2E Track)

---

### 4.2 Ma Trận Rủi Ro Build/Type & Giải Pháp Phòng Ngừa Triệt Để

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                   HỆ THỐNG PHÒNG NGỪA RỦI RO BIÊN DỊCH M1                        │
├────────────────────────┬─────────────────────────┬───────────────────────────────┤
│ RỦI RO TIỀM ẨN         │ NGUYÊN NHÂN GỐC RỄ      │ QUY TẮC PHÒNG NGỪA BẮT BUỘC   │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 1. Lỗi TS1484          │ verbatimModuleSyntax:   │ LUÔN dùng `import type { ... }│
│    (Type-only import)  │ true trong tsconfig.    │ khi import interface, type    │
│                        │ Import interface bằng   │ từ các file .ts và từ React.  │
│                        │ cú pháp import trị số.  │                               │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 2. Lỗi TS6133/TS6138   │ noUnusedLocals &        │ Mọi symbol tạo ra phải được   │
│    (Biến/Tham số thừa) │ noUnusedParameters: true│ export. Không để import rác.  │
│                        │ trong tsconfig.         │ Tham số dự phòng đặt tiền tố _│
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 3. Phụ thuộc vòng      │ cheoCulturalData import │ Tuân thủ nghiêm ngặt DAG:    │
│    (Circular Dependency│ ngược sitemapRoutes     │ Types (L0) -> Data (L1) ->   │
│     Architecture)      │ hoặc ngược lại.         │ Sitemap/Pages (L2) -> UI (L3).│
│                        │                         │ L1 tuyệt đối KHÔNG import L2. │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 4. Vỡ SearchModal.tsx  │ Xóa hoặc để undefined   │ Giữ `subtitle: string` bắt    │
│    (Runtime TypeError) │ trường `subtitle` trong │ buộc trong RouteNode. Chỉ thay│
│                        │ RouteNode.              │ chuỗi dài bằng tagline ngắn.  │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 5. Lệch Interface      │ Tên interface khác với  │ Tuân thủ 100% hợp đồng tại    │
│    Contracts với M2-M5 │ PROJECT.md dòng 63-123. │ PROJECT.md: HeritagePillar,   │
│                        │                         │ CulturalMetric, HubShowcase,  │
│                        │                         │ CheoNightTimelinePhase, v.v.  │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 6. Lỗi Purge Tailwind  │ Ghép chuỗi dynamic class│ Dùng static variant lookup map│
│    v4 trong UI badge   │ như `text-${color}-400` │ với đầy đủ class Tailwind v4  │
│                        │ bị trình biên dịch bỏ.  │ tường minh.                   │
├────────────────────────┼─────────────────────────┼───────────────────────────────┤
│ 7. Lệch ID giữa sitemap│ Route ID trong sitemap  │ Mọi ID trong 30 routes sitemap│
│    và pageDetailsData  │ không có key tương ứng  │ đều phải có key đối ứng trong │
│                        │ trong PAGE_DETAILS_MAP. │ PAGE_DETAILS_MAP.             │
└────────────────────────┴─────────────────────────┴───────────────────────────────┘
```

---

### 4.3 Đặc Tả Chi Tiết Hợp Đồng Interface & Component Cho M1 Worker

#### A. Hợp Đồng Interface (`src/types/cheoCulturalTypes.ts`)
```typescript
import type { ComponentType, ReactNode } from 'react'

export interface HeritagePillar {
  id: string
  title: string
  period: string
  description: string
  quote: string
  highlights: string[]
  linkPath: string
}

export interface CulturalMetric {
  value: string
  label: string
  subtitle: string
  iconName: string
}

export interface HubShowcaseData {
  heroTag: string
  heroTitle: string
  heroDescription: string
  quoteText: string
  metrics: CulturalMetric[]
  pillars?: HeritagePillar[]
}

export interface CheoNightTimelinePhase {
  phaseNumber: number
  timeRange: string
  title: string
  theatricalPurpose: string
  atmosphere: string
  instruments: string[]
  melodyTypes: string[]
  quoteVerse: string
  audioSampleId: string
}

export interface CheoInstrumentCard {
  id: string
  name: string
  sinoVietnameseName?: string
  roleTitle: string
  instrumentFamily: 'Bộ gõ' | 'Bộ dây' | 'Bộ hơi'
  acousticCharacter: string
  physicalStructure: string[]
  soulOfRhythm: string
  theatricalInteraction: string
  classicPoetryRef: string
  sampleFrequencyWave: number[]
}

export interface MetaBadgeProps {
  label: string
  variant?: 'amber' | 'red' | 'emerald' | 'sky' | 'stone'
  icon?: ComponentType<{ className?: string }>
}

export interface FeaturePillProps {
  text: string
  variant?: 'default' | 'accent'
}

export interface KeyValueGridProps {
  items: Array<{ label: string; value: string }>
}

export interface DecomposedHeaderProps {
  title: string
  category?: string
  badges?: Array<{ label: string; variant?: 'amber' | 'red' | 'emerald' | 'sky' | 'stone' }>
  leadSummary: string
  keyValues?: Array<{ label: string; value: string }>
  quote?: { text: string; author?: string }
}
```

#### B. Hợp Đồng Cấu Trúc Atomic UI Components (`src/components/common/`)

1. **`MetaBadge.tsx`**:
   - Sử dụng static lookup map cho variant styling:
     - `amber`: `bg-amber-500/10 text-amber-300 border-amber-500/30`
     - `red`: `bg-red-500/10 text-red-300 border-red-500/30`
     - `emerald`: `bg-emerald-500/10 text-emerald-300 border-emerald-500/30`
     - `sky`: `bg-sky-500/10 text-sky-300 border-sky-500/30`
     - `stone`: `bg-stone-800/80 text-stone-400 border-stone-700/60`
   - Render icon nếu được truyền vào với kích thước chuẩn `w-3 h-3`.

2. **`FeaturePill.tsx`**:
   - Styling:
     - `default`: `bg-stone-900/80 text-stone-300 border border-stone-800 text-xs px-2.5 py-1 rounded-full`
     - `accent`: `bg-amber-950/40 text-amber-300 border border-amber-800/40 text-xs px-2.5 py-1 rounded-full`
   - Thể hiện nhịp phách, làn điệu, kỹ thuật diễn xướng cô đọng.

3. **`KeyValueGrid.tsx`**:
   - Layout: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-2`
   - Item card: `p-3 rounded-xl bg-stone-900/50 border border-stone-800/80`
   - Label: `text-[10px] uppercase font-sans text-stone-500 block mb-0.5 tracking-wider`
   - Value: `text-xs font-serif font-semibold text-stone-200 block truncate`

4. **`DecomposedHeader.tsx`**:
   - Khung header chuẩn hóa thay thế header thô hiện tại:
     - Category badge & tags hàng trên.
     - Tiêu đề chính h1 (`font-serif`, `text-2xl sm:text-4xl text-amber-100`).
     - Đoạn tóm tắt dẫn nhập `leadSummary` thanh thoát (`text-sm sm:text-base text-stone-300 font-light`).
     - Hàng `MetaBadge` phân loại thuộc tính.
     - Lưới `KeyValueGrid` cho thông số nhanh.
     - Khối trích dẫn thơ cổ (`quote`) nếu có.

---

### 4.4 Bảng Tiêu Chí Forensic Audit Cho Milestone 1 Review (Reviewer's Forensic Checklist)

Để chấp thuận nghiệm thu Milestone 1, Người kiểm định (Sub-orchestrator / Reviewer) thực hiện kiểm toán 5 tầng theo danh sách sau:

#### Tầng 1: Forensic File Boundaries & Layout Compliance
- [ ] Lệnh `git status --porcelain` chỉ hiển thị thay đổi tại 8 tệp whitelisted:
  - `?? src/types/cheoCulturalTypes.ts`
  - `?? src/data/cheoCulturalData.ts`
  - `?? src/components/common/MetaBadge.tsx`
  - `?? src/components/common/FeaturePill.tsx`
  - `?? src/components/common/KeyValueGrid.tsx`
  - `?? src/components/common/DecomposedHeader.tsx`
  - ` M src/data/sitemapRoutes.ts`
  - ` M src/data/pageDetailsData.ts`
- [ ] Không có bất kỳ tệp nguồn nào khác bị sửa đổi ngoài ý muốn (đặc biệt: `MuseumView.tsx`, `HomePage.tsx`, `SearchModal.tsx`, `package.json` giữ nguyên trạng thái gốc).
- [ ] Thư mục `.agents/` chỉ chứa metadata báo cáo, không chứa mã nguồn ứng dụng.

#### Tầng 2: Forensic Build & Type Check
- [ ] Chạy `npm run build` thành công 100% (Mã thoát = 0).
- [ ] `tsc -b` không xuất hiện bất kỳ cảnh báo hoặc lỗi TypeScript nào.
- [ ] Chạy `npm run lint` (`oxlint`) thành công 100% với 0 errors và 0 warnings.
- [ ] Tất cả các lệnh import kiểu dữ liệu đều sử dụng cú pháp `import type`.

#### Tầng 3: Forensic Interface & Component Contract Verification
- [ ] Tệp `src/types/cheoCulturalTypes.ts` export đầy đủ 5 interface hợp đồng cốt lõi:
  - `HeritagePillar`
  - `CulturalMetric`
  - `HubShowcaseData`
  - `CheoNightTimelinePhase`
  - `CheoInstrumentCard`
- [ ] 4 component atomic tại `src/components/common/` export đúng props theo contract `PROJECT.md:118-123`.

#### Tầng 4: Forensic Cultural Data Integrity & Completeness
- [ ] Dung lượng `src/data/cheoCulturalData.ts` đạt mức phong phú (>40 KB), chứa đầy đủ:
  - 3 Heritage Pillars cho `/kham-pha`.
  - 4 Hồi diễn tiến âm thanh chuẩn mực của đêm Chèo.
  - 6 Card nhạc cụ độc lập (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ).
  - Khối Chèo hiện đại 1951: Nghệ nhân (Tào Mạt, Cả Tam, Dịu Hương, Thanh Hoài), Vở diễn ("Bài ca giữ nước", "Nàng Sita", "Hồ Xuân Hương"), Hồ sơ UNESCO 14 tỉnh thành.
  - Tư liệu hậu trường ("Thanh - Sắc - Tinh - Nghệ", quy tắc vẽ mặt, 5 đạo cụ).
  - Dữ liệu Hub banner và số liệu metric cho toàn bộ 7 trang Hub.

#### Tầng 5: Forensic Backward Compatibility & Consumer Stability
- [ ] Cả 30 routes trong `sitemapRoutes.ts` vẫn hiện diện đầy đủ, giữ nguyên giá trị `path` và `id`.
- [ ] Thuộc tính `subtitle` trên mỗi route vẫn là chuỗi `string` hợp lệ, không rỗng (bảo vệ `SearchModal.tsx:26` khỏi crash).
- [ ] Hàm `matchRoute(hash: string): RouteNode` giữ nguyên signature và hoạt động chính xác.
- [ ] Mọi route ID đều có bản ghi đối ứng trong `PAGE_DETAILS_MAP` tại `src/data/pageDetailsData.ts`.
- [ ] Các component consumer hiện tại (`App.tsx`, `MuseumView.tsx`, `SearchModal.tsx`, `DetailPageRenderer.tsx`) biên dịch và hoạt động không lỗi.

---

## 5. VERIFICATION METHOD (PHƯƠNG PHÁP KIỂM TRA ĐỘC LẬP)

Để độc lập thẩm tra kết quả của Milestone 1 Worker, hãy thực thi tuần tự các bước kiểm chứng dòng lệnh và đối chiếu mã sau:

### Bước 1: Kiểm tra Biên dịch & Linting
```powershell
# 1. Kiểm tra TypeScript và đóng gói Vite
npm run build

# 2. Kiểm tra quy tắc Linter
npm run lint
```
*Điều kiện đạt*: Cả hai lệnh đều thoát với mã 0 (Exit Code 0), không sinh bất kỳ lỗi TypeScript hay cảnh báo linting nào.

### Bước 2: Kiểm tra Ranh giới Tệp (File Boundary Audit)
```powershell
# Kiểm tra danh sách các file đã thay đổi so với nhánh chính
git status --porcelain
```
*Điều kiện đạt*: Chỉ đúng 8 file thuộc whitelist được tạo mới hoặc chỉnh sửa. Không có bất kỳ file nào khác ngoài phạm vi bị thay đổi.

### Bước 3: Kiểm tra Khả năng Nhập (Export / Import Smoke Test)
Tạo tệp kiểm tra tạm thời hoặc thực thi lệnh node headless để kiểm tra việc import các contracts:
```typescript
import type { 
  HeritagePillar, 
  CulturalMetric, 
  HubShowcaseData, 
  CheoNightTimelinePhase, 
  CheoInstrumentCard 
} from './src/types/cheoCulturalTypes'

import { 
  HERITAGE_PILLARS, 
  CHEO_NIGHT_TIMELINE, 
  CHEO_ORCHESTRA_INSTRUMENTS, 
  MODERN_CHEO_DATA, 
  HUB_SHOWCASE_MAP 
} from './src/data/cheoCulturalData'

import { MetaBadge } from './src/components/common/MetaBadge'
import { FeaturePill } from './src/components/common/FeaturePill'
import { KeyValueGrid } from './src/components/common/KeyValueGrid'
import { DecomposedHeader } from './src/components/common/DecomposedHeader'

import { SITEMAP_ROUTES, matchRoute } from './src/data/sitemapRoutes'
import { PAGE_DETAILS_MAP } from './src/data/pageDetailsData'
```
*Điều kiện đạt*: Không có lỗi phân giải module, không có circular dependency, tất cả contracts đều tồn tại và được export chính xác.

### Bước 4: Kiểm tra Tính Tương Thích Ngược của Subtitle trong SearchModal
- Mở `src/components/SearchModal.tsx`, xác nhận `n.subtitle` vẫn là `string` hợp lệ cho toàn bộ 30 routes của `SITEMAP_ROUTES`.
- Xác nhận không có route nào có `subtitle` là `undefined`.
