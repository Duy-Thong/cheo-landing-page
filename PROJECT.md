# Project: Chèo Landing Page — Toàn Diện UI/UX & Dữ Liệu Di Sản Văn Hóa Chèo

## Architecture
- **Framework & Runtime**: Vite 8.3 + React 19.2 + Tailwind CSS v4 SPA.
- **Routing**: Client-side hash routing (`window.location.hash` -> `matchRoute` in `sitemapRoutes.ts`) supporting 30 routes (29 unique paths) across 3 main pillars:
  - `/gioi-thieu`: Giới thiệu bảo tàng số, câu chuyện hình thành, mục tiêu, đội ngũ.
  - `/kham-pha`: Không gian di sản, Tổng quan lịch sử, Sân khấu (Nhân vật, Trang phục, Âm thanh, Tác phẩm), Chèo hiện đại.
  - `/tien-ich`: Tìm kiếm, Kho tư liệu, Bản đồ bảo tàng, Tham quan & sự kiện (Lịch diễn, Đặt vé, Địa điểm, Hướng dẫn), Thông tin hỗ trợ.
- **UI Architecture Transformation**:
  - Elimination of all 7 UI tab instances into open Showcases, Timelines, and Multi-tier Grids.
  - Elimination of cramped subtext / verbose subtitles into Atomic UI Primitives: `MetaBadge`, `FeaturePill`, `KeyValueGrid`, `DecomposedHeader`.
  - Thematic Exhibition Banners with key cultural metrics for all 7 Hub pages.
  - 4-phase Chèo night sound timeline + 6 independent instrument cards with audio simulation & poetry.
  - 4-layer modern Chèo exhibition (1951 milestone, master artists, milestone plays, UNESCO dossier).
- **Data Architecture**:
  - `src/types/cheoCulturalTypes.ts`: Central TypeScript interfaces for cultural data models.
  - `src/data/cheoCulturalData.ts`: Standardized rich cultural datasets.
  - Updated `src/data/pageDetailsData.ts` and `src/data/sitemapRoutes.ts`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Cultural Types & Schemas | Centralize TypeScript interfaces in `src/types/cheoCulturalTypes.ts` | M1 | Survey 3 |
| 2 | Rich Cultural Data Store | Comprehensive datasets in `src/data/cheoCulturalData.ts` (70+ KB deep historical & musical data) | M1 | Survey 3 |
| 3 | Atomic UI Primitives | `MetaBadge`, `FeaturePill`, `KeyValueGrid`, `DecomposedHeader` for clean structured data layout | M1 | Survey 2 |
| 4 | Restructure Subtitles & Meta | Eliminate verbose subtitles across all routes in `sitemapRoutes.ts` with structured badges | M1 | Survey 1, 2 |
| 5 | Hub Banner & Metrics Engine | `ExhibitionHubBanner` with gradient, cultural icons, and key metric counters | M2 | Survey 2 |
| 6 | R1: /kham-pha Heritage Pillars | 3 Heritage Pillars (Lịch sử thế kỷ X, Sân khấu & Diễn xướng, Chèo đương đại) & room preview cards | M2 | R1 / Survey 1 |
| 7 | Hub Pages Transformation | Overhaul all 7 Hub pages (/gioi-thieu, /kham-pha, /tien-ich, sub-hubs) with thematic banners & multi-tier cards | M2 | Expanded Scope |
| 8 | R2: Chèo Hiện Đại 1951 Milestone | Detailed history of 1951 Việt Bắc founding (Đoàn Chèo Cổ truyền VN -> Nhà hát Chèo VN) | M3 | R2 / Survey 3 |
| 9 | R2: Chèo Hiện Đại Masters & Works | Tôn vinh NSND Tào Mạt, NSND Cả Tam, NSND Dịu Hương & bộ ba sử thi "Bài ca giữ nước" | M3 | R2 / Survey 3 |
| 10 | R2: Chèo Hiện Đại Innovations & UNESCO | Giao thoa giao hưởng, đề tài xã hội, hồ sơ UNESCO 14 tỉnh thành châu thổ sông Hồng | M3 | R2 / Survey 3 |
| 11 | R2: ModernCheoExhibition Component | Open 4-layer exhibition component mounted in `MuseumView.tsx` under `/kham-pha/cheo-hien-dai` | M3 | R2 / Survey 1, 2 |
| 12 | R3: 4-Phase Chèo Night Sound Timeline | 4 hồi diễn xướng (Khởi nhạc mở màn, Xưng danh nhập cuộc, Trữ tình khắc khoải, Tiếng cười trào lộng) | M3 | R3 / Survey 2, 3 |
| 13 | R3: Orchestra Instruments Showcase | 6 independent instrument cards (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ) | M3 | R3 / Survey 2, 3 |
| 14 | R3: Audio Demo & Classic Poetry Lyrics | Audio simulation with waveform, vocal modes, and classic poetry lyrics (Đào liễu, Quân tử vu dịch...) | M3 | R3 / Survey 2, 3 |
| 15 | Linter Purity Fix | Fix oxlint purity warning (`Date.now()` during render) in audio player | M3 | Survey 2 |
| 16 | CharactersGallery Tab Elimination | Transform 5-character tabs into open visual gallery grid with quotes and traits | M4 | Survey 2 |
| 17 | CostumesShowcase Tab Elimination | Transform 5-costume tabs into open heritage artifacts exhibition | M4 | Survey 2 |
| 18 | PlaysShowcase Tab Elimination | Transform 4-play tabs into Tứ đại kiệt tác multi-column cards | M4 | Survey 2 |
| 19 | TimelineWidget Tab Elimination | Transform 4-century tabs into continuous 10-century historical vertical journey timeline | M4 | Survey 2 |
| 20 | HomePage Tab Elimination | Replace `stageTab` with Multi-Exhibit Curated Showcase | M4 | Survey 2 |
| 21 | Deep Cultural Content: Giá trị văn hóa | 4 humanitarian values, folk satire, community solidarity | M4 | Expanded Scope |
| 22 | Deep Cultural Content: Phía sau sân khấu | "Thanh - Sắc - Tinh - Nghệ", makeup rules, 5 multi-use props (quạt mo, đòn gánh, roi ngựa...) | M4 | Expanded Scope |
| 23 | Deep Cultural Content: Kho tư liệu | 78 RPM Dihavina vinyl records, 1875 Nôm scripts, Trần Bảng monographs | M4 | Expanded Scope |
| 24 | Deep Cultural Content: Bản đồ bảo tàng | 5-zone interactive floorplan & 3 curated visitor tours | M4 | Expanded Scope |
| 25 | Deep Cultural Content: Tiện ích & Sự kiện | Structured theater directories, performance calendar, visitor guidelines | M4 | Expanded Scope |
| 26 | E2E Test Suite (Tiers 1-4) | Comprehensive opaque-box test runner covering all 30 routes, components, and data points | E2E Track | Dual Track |
| 27 | Final Milestone & Adversarial Hardening | Pass 100% E2E tests + Tier 5 white-box stress testing + clean `npm run build` | M5 | Dual Track |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Testing Track | Test infra, Tier 1-4 test runner & test cases, TEST_INFRA.md, TEST_READY.md | none | IN_PROGRESS |
| 1 | M1: Data & UI Primitives | TypeScript types, rich cultural data store, atomic UI components (MetaBadge, KeyValueGrid, DecomposedHeader), sitemap route cleaning | none | PLANNED |
| 2 | M2: Hub Pages & R1 Khám Phá | ExhibitionHubBanner, HubShowcase, 3 Heritage Pillars, cultural metrics, all 7 Hub pages overhaul | M1 | PLANNED |
| 3 | M3: Chèo Hiện Đại (R2) & Âm Thanh (R3) | ModernCheoExhibition (1951, artists, plays, UNESCO), CheoSoundJourneyTimeline & OrchestraInstrumentsGrid, audio lyrics, linter fix | M1, M2 | PLANNED |
| 4 | M4: Tab Elimination & Deep Content | Convert remaining 5 tab widgets into showcases/timelines/grids, enrich all deep content pages (Giá trị văn hóa, Phía sau sân khấu, Kho tư liệu, Bản đồ...) | M1, M2, M3 | PLANNED |
| 5 | M5: E2E Verification & Hardening | Pass 100% E2E tests, Tier 5 adversarial testing, verify clean build & lint | E2E, M1, M2, M3, M4 | PLANNED |

## Interface Contracts

### M1 ↔ M2, M3, M4: Cultural Types Contract (`src/types/cheoCulturalTypes.ts`)
```typescript
export interface HeritagePillar {
  id: string;
  title: string;
  period: string;
  description: string;
  quote: string;
  highlights: string[];
  linkPath: string;
}

export interface CulturalMetric {
  value: string;
  label: string;
  subtitle: string;
  iconName: string;
}

export interface HubShowcaseData {
  heroTag: string;
  heroTitle: string;
  heroDescription: string;
  quoteText: string;
  metrics: CulturalMetric[];
  pillars?: HeritagePillar[];
}

export interface CheoNightTimelinePhase {
  phaseNumber: number;
  timeRange: string;
  title: string;
  theatricalPurpose: string;
  atmosphere: string;
  instruments: string[];
  melodyTypes: string[];
  quoteVerse: string;
  audioSampleId: string;
}

export interface CheoInstrumentCard {
  id: string;
  name: string;
  sinoVietnameseName?: string;
  roleTitle: string;
  instrumentFamily: 'Bộ gõ' | 'Bộ dây' | 'Bộ hơi';
  acousticCharacter: string;
  physicalStructure: string[];
  soulOfRhythm: string;
  theatricalInteraction: string;
  classicPoetryRef: string;
  sampleFrequencyWave: number[];
}
```

### M1 ↔ M2, M3, M4: Atomic UI Components Contract
- `MetaBadge`: `({ label: string, variant?: 'amber' | 'red' | 'emerald' | 'sky', icon?: React.ComponentType }) => React.ReactNode`
- `FeaturePill`: `({ text: string, variant?: 'default' | 'accent' }) => React.ReactNode`
- `KeyValueGrid`: `({ items: Array<{ label: string; value: string }> }) => React.ReactNode`
- `DecomposedHeader`: `({ title: string; category?: string; badges?: Array<{ label: string; variant?: any }>; leadSummary: string; keyValues?: Array<{ label: string; value: string }> }) => React.ReactNode`

### MuseumView ↔ Widget Contract
- `MuseumView.tsx` routes `widgetType`:
  - `'modern'`: `<ModernCheoExhibition />`
  - `'audio'`: `<CheoSoundJourneyTimeline />` & `<OrchestraInstrumentsGrid />`
  - `'characters'`: `<CharactersGallery />` (open grid)
  - `'costumes'`: `<CostumesShowcase />` (open showcase)
  - `'plays'`: `<PlaysShowcase />` (open cards)
  - `'timeline'`: `<TimelineWidget />` (vertical historical journey)

## Code Layout
- `src/types/cheoCulturalTypes.ts`: Domain types & interfaces
- `src/data/cheoCulturalData.ts`: Rich cultural data constants
- `src/data/pageDetailsData.ts`: Extended page details
- `src/data/sitemapRoutes.ts`: Route definitions with cleaned badges
- `src/components/common/`:
  - `MetaBadge.tsx`
  - `FeaturePill.tsx`
  - `KeyValueGrid.tsx`
  - `DecomposedHeader.tsx`
- `src/components/hub/`:
  - `ExhibitionHubBanner.tsx`
  - `HubShowcase.tsx`
- `src/components/interactive/`:
  - `ModernCheoExhibition.tsx` (replaces `ModernCheoShowcase.tsx`)
  - `CheoSoundJourneyTimeline.tsx`
  - `OrchestraInstrumentsGrid.tsx`
  - `AudioSamplePlayer.tsx` (integrated audio engine)
  - `CharactersGallery.tsx`
  - `CostumesShowcase.tsx`
  - `PlaysShowcase.tsx`
  - `TimelineWidget.tsx`
- `tests/e2e/`:
  - `testRunner.ts`: Standalone test suite execution script
  - `tier1_features.test.ts`
  - `tier2_boundaries.test.ts`
  - `tier3_combinations.test.ts`
  - `tier4_scenarios.test.ts`
