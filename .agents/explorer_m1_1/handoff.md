# Handoff Report: Types & Cultural Data Layer Strategy for Milestone 1

**Agent**: teamwork_preview_explorer (Explorer M1)  
**Date**: 2026-09-18T17:35:00Z  
**Task**: Types & Cultural Data Layer Strategy for Milestone 1  
**Reference Documents**:
- Authoritative User Request: `d:\Learning\Chèo Landing page\.agents\ORIGINAL_REQUEST.md`
- Master Project Plan: `d:\Learning\Chèo Landing page\PROJECT.md`
- Survey 3 Artifacts: `d:\Learning\Chèo Landing page\.agents\explorer_survey_3\proposed_cheoCulturalTypes.ts` & `proposed_cheoDataFiles.ts`

---

## 1. Observation

### 1.1 Compiler & Project Configuration Environment
1. **TypeScript App Config (`tsconfig.app.json`)**:
   - Lines 11-17: `"moduleResolution": "bundler"`, `"verbatimModuleSyntax": true`, `"noEmit": true`, `"jsx": "react-jsx"`.
   - Lines 20-23: `"noUnusedLocals": true`, `"noUnusedParameters": true`, `"erasableSyntaxOnly": true`.
   - **Direct Observation**: With `verbatimModuleSyntax: true`, any type import/export MUST use explicit `import type { ... }` or `export type { ... }`. Importing a type as a value will trigger TypeScript compile error `TS1484`.
   - With `noUnusedLocals: true`, any declared and unreferenced import or local variable causes compile failure `TS6133`.
2. **Current Build Status**:
   - Ran `npm run build` (`tsc -b && vite build`):
     ```
     > ch-o-landing-page@0.0.0 build
     > tsc -b && vite build

     vite v8.3.0 building client environment for production...
     ✓ 1896 modules transformed.
     dist/index.html                   0.98 kB │ gzip:   0.58 kB
     dist/assets/index-BKkJrVC8.css   88.22 kB │ gzip:  12.28 kB
     dist/assets/index-DLU_cIUH.js   481.08 kB │ gzip: 133.01 kB
     ✓ built in 256ms
     ```
   - Exit code: `0`. The current codebase compiles cleanly.

### 1.2 Inspection of Survey 3 Artifacts
1. **`proposed_cheoCulturalTypes.ts` (323 lines, 8,081 bytes)**:
   - Contains 22 granular domain interfaces across 5 domains:
     - Common metadata: `MetaBadge`, `KeyValueAttribute`, `CulturalMetric`, `PoeticQuote`.
     - Heritage & Hub: `HeritagePillar`, `HubShowcaseData`.
     - Chèo Hiện Đại (R2): `ModernMilestone`, `PioneerArtist`, `ModernMasterpiece`, `UnescoDossierData`, `ModernCheoComprehensiveData`.
     - Sân Khấu & Âm Thanh (R3): `CheoNightTimelinePhase`, `CheoInstrumentCard`, `CheoMelodyLyric`, `CheoAudioCompleteData`.
     - Cross-museum domains: `FolkPropData`, `FacePaintingRule`, `BackstageArtistryData`, `CulturalPhilosophyData`, `ArchiveDocumentItem`, `MuseumZoneMapData`, `CuratedTourData`.
2. **`proposed_cheoDataFiles.ts` (1,034 lines, 73,622 bytes)**:
   - Deep, academic-grade Vietnamese cultural content:
     - `KHAM_PHA_HUB_DATA`: 3 Heritage Pillars, 4 Key Metrics, poetic quote, 3 room previews with bullet highlights.
     - `MODERN_CHEO_DATA`: 4 historical milestones (1951 Việt Bắc, Tào Mạt sử thi, đổi mới giao thoa, số hóa UNESCO), 4 pioneer artists (Tào Mạt, Cả Tam, Dịu Hương, Bùi Đắc Sừ), 3 masterpieces (*Bài ca giữ nước*, *Nàng Sita*, *Hồ Xuân Hương*), UNESCO 14-province dossier.
     - `CHEO_AUDIO_COMPLETE_DATA`: 4-phase night timeline (19:00 - 22:30), 6 independent instrument cards (Trống đế, Trống cơm, Đàn nguyệt, Đàn nhị, Sáo trúc, Thanh la/Mõ), 4 classic melodies with lyrics (*Đào liễu*, *Quân tử vu dịch*, *Luyện năm cung*, *Hề mồi/Hề gậy*).
     - `BACKSTAGE_ARTISTRY_DATA`, `CULTURAL_PHILOSOPHY_DATA`, `ARCHIVE_VAULT_DATA`, `MUSEUM_ZONES_DATA`, `CURATED_TOURS_DATA`.

### 1.3 Comparison: `PROJECT.md` Interface Contracts vs Survey 3 Models
Inspection revealed field nomenclature differences between `PROJECT.md` contract sketches (lines 63-116) and Survey 3 implementations:
- `HeritagePillar`: `PROJECT.md` used `period`, `description`, `quote`, `highlights`, `linkPath`; Survey 3 used `epoch`, `summary`, `keyAspects`, `targetRoute`, `metaBadges`, `visualAsset`.
- `CulturalMetric`: `PROJECT.md` used `label`, `value`, `subtitle`, `iconName`; Survey 3 used `value`, `unit`, `label`, `description`, `icon`.
- `HubShowcaseData`: `PROJECT.md` used `heroTag`, `heroTitle`, `heroDescription`, `quoteText`; Survey 3 used `bannerTitle`, `bannerTagline`, `heroDescription`, `featuredQuote`, `exhibitionSubRooms`.
- `CheoNightTimelinePhase`: `PROJECT.md` used `timeRange`, `title`, `theatricalPurpose`, `atmosphere`, `audioSampleId`; Survey 3 used `timeInNight`, `phaseName`, `dramaticFunction`, `atmosphereAndAcoustics`, `phaseId`.
- `CheoInstrumentCard`: `PROJECT.md` used `name`, `roleTitle`, `instrumentFamily`, `acousticCharacter`; Survey 3 used `vietnameseName`, `sinoVietnameseName`, `classification`, `acousticRole`, `acousticsAndTimbre`.

### 1.4 Inspection of Existing `pageDetailsData.ts` and `sitemapRoutes.ts`
1. **`src/data/pageDetailsData.ts`**:
   - Lines 1-22: `PageDetailContent` defines:
     ```typescript
     export interface PageDetailContent {
       id: string
       title: string
       parentTitle?: string
       breadcrumb: string[]
       quote?: { text: string; author?: string }
       heroBadge: string
       introduction: string
       sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
       funFacts?: string[]
       widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'feedback' | 'timeline' | 'plays' | 'modern' | 'map' | 'archive' | 'default'
       metaBadges?: string[]
       quickSpecs?: { label: string; value: string }[]
       tags: string[]
     }
     ```
   - Notice: `metaBadges?: string[]` is an array of raw strings (e.g. line 425: `['Cột Mốc 1951', 'Kỷ Nguyên Tào Mạt', ...]`).
   - Consumers of `PAGE_DETAILS_MAP`:
     - `src/components/MuseumView.tsx` (lines 15, 45)
     - `src/components/DetailPageRenderer.tsx` (lines 10, 38)
   - Neither component accesses internal properties that would break if new optional fields are added to `PageDetailContent`.
2. **`src/data/sitemapRoutes.ts`**:
   - Lines 1-13: `RouteNode` defines `path`, `id`, `title`, `subtitle`, `category`, `breadcrumbs`, `childrenPaths?`, `isHub?`, `description`, `widgetType?`, `tags`.
   - Consumers: `src/App.tsx`, `src/components/MuseumView.tsx`, `src/components/SearchModal.tsx`.

---

## 2. Logic Chain

1. **Need for Unified Canonical Types**:
   - `proposed_cheoDataFiles.ts` contains 73KB of deeply curated Vietnamese content typed against `proposed_cheoCulturalTypes.ts`. Rewriting that 73KB dataset to match `PROJECT.md` contract sketches would be error-prone and lose rich structures (like `visualAsset`, `sampleAudioData`, `physicalStructure`).
   - Conversely, forcing M2/M3 workers to adapt to non-contract field names without compatibility could lead to friction or test breakage.
   - *Inference*: Creating unified canonical interfaces in `src/types/cheoCulturalTypes.ts` that make the rich Survey 3 structure primary while providing optional backward-compatibility aliases (e.g. `period?: string`, `description?: string`, `iconName?: string`, `heroTitle?: string`) satisfies BOTH contracts simultaneously with zero data conversion friction.

2. **Preserving `PageDetailContent` Invariants in `pageDetailsData.ts`**:
   - `PageDetailContent` currently has `metaBadges?: string[]` and `quickSpecs?: { label: string; value: string }[]`.
   - If `metaBadges` were changed to `MetaBadge[]`, existing hardcoded string arrays (e.g. lines 425, 546, 582) would immediately fail TypeScript type checking.
   - *Inference*: Keep `metaBadges?: string[]` intact, and add `structuredBadges?: MetaBadge[]` alongside optional cultural data payload references (`hubShowcase?: HubShowcaseData`, `modernCheoData?: ModernCheoComprehensiveData`, `audioData?: CheoAudioCompleteData`, `backstageData?: BackstageArtistryData`, `philosophyData?: CulturalPhilosophyData`, `archiveVault?: ArchiveDocumentItem[]`, `museumZones?: MuseumZoneMapData[]`, `curatedTours?: CuratedTourData[]`, `keyMetrics?: CulturalMetric[]`, `pillars?: HeritagePillar[]`).
   - Every existing property remains 100% untouched.

3. **Re-export Strategy for Ergonomic Consumption**:
   - By adding `export * from './cheoCulturalData'` and `export type * from '../types/cheoCulturalTypes'` to `pageDetailsData.ts`, downstream components can import data and types from either `src/types/cheoCulturalTypes`, `src/data/cheoCulturalData`, or `src/data/pageDetailsData` without circular dependency or broken paths.

4. **Extending `sitemapRoutes.ts` with Clean Primitives (R4)**:
   - Requirement R4 demands eliminating verbose subtitles across all routes into structured badges, pills, and key-values.
   - In `sitemapRoutes.ts`, `RouteNode` should be extended with optional properties:
     `metaBadges?: MetaBadge[]`, `featurePills?: string[]`, `keySpecs?: KeyValueAttribute[]`.
   - Existing `subtitle: string` is retained (shortened to crisp phrases) so that existing code reading `route.subtitle` never encounters `undefined`.

5. **Type Safety & Build Verification**:
   - Created prototype files in `.agents/explorer_m1_1/`:
     - `proposed_cheoCulturalTypes.ts`
     - `proposed_cheoCulturalData.ts`
     - `proposed_pageDetailsData_integration.ts`
   - Compiled with `npx tsc --noEmit --ignoreConfig`: All 3 files compile with **0 errors**.

---

## 3. Caveats

1. **Read-Only Explorer Boundary**:
   - In accordance with Milestone 1 Explorer constraints, no files under `src/` were modified directly. All code and blueprints are delivered in `.agents/explorer_m1_1/` for implementation by the builder agent.
2. **Audio Media Assets**:
   - Physical audio files (`.mp3`) do not currently exist in `public/`. Data models include `sampleAudioData` with waveform/duration/note metadata. Audio players should continue using visual simulation / synthetic audio until actual recordings are added.
3. **TypeScript Configuration Rules**:
   - `tsconfig.app.json` has `verbatimModuleSyntax: true`. The implementer must strictly use `import type` for type-only imports and `export type` for type-only exports.

---

## 4. Conclusion & Actionable Implementation Plan

### 4.1 Deliverable 1: Create `src/types/cheoCulturalTypes.ts`
Create the directory `src/types` (if not existing) and place `src/types/cheoCulturalTypes.ts`.

#### Canonical Types Definition:
```typescript
/**
 * Canonical Cultural Data Models & TypeScript Interfaces for Chèo Heritage Platform
 * Location: src/types/cheoCulturalTypes.ts
 * Milestone: M1 (Data & UI Primitives)
 */

// 1. ATOMIC UI PRIMITIVES & METADATA
export type BadgeVariant = 'amber' | 'rose' | 'emerald' | 'sky' | 'purple' | 'red' | 'stone'

export interface MetaBadge {
  label: string
  variant: BadgeVariant
  icon?: string
}

export interface KeyValueAttribute {
  label: string
  value: string
  highlight?: boolean
}

export interface CulturalMetric {
  value: string
  unit?: string
  label: string
  description?: string
  icon?: string
  // Compatibility aliases for PROJECT.md contract
  subtitle?: string
  iconName?: string
}

export interface PoeticQuote {
  verse: string
  author?: string
  context?: string
  work?: string
}

// 2. HERITAGE PILLARS & HUB SHOWCASE
export interface HeritagePillar {
  id: string
  title: string
  epoch: string
  summary: string
  keyAspects: string[]
  visualAsset: {
    imageUrl: string
    caption: string
    altText: string
  }
  metrics: CulturalMetric[]
  targetRoute: string
  metaBadges: MetaBadge[]
  // Compatibility aliases for PROJECT.md contract
  period?: string
  description?: string
  highlights?: string[]
  linkPath?: string
  quote?: string
}

export interface HubRoomPreview {
  routePath: string
  id: string
  title: string
  badge: string
  highlightTag: string
  summary: string
  bulletHighlights: string[]
  actionLabel: string
}

export interface HubShowcaseData {
  hubId: string
  bannerTitle: string
  bannerTagline: string
  heroDescription: string
  featuredQuote: PoeticQuote
  keyMetrics: CulturalMetric[]
  pillars?: HeritagePillar[]
  exhibitionSubRooms?: HubRoomPreview[]
  // Compatibility aliases for PROJECT.md contract
  heroTag?: string
  heroTitle?: string
  quoteText?: string
  metrics?: CulturalMetric[]
}

// 3. R2: CHÈO HIỆN ĐẠI DETAILED DATA
export type TransitionNature = 'stage-reform' | 'literary-epic' | 'orchestral-fusion' | 'unesco-digital'

export interface ModernMilestone {
  era: string
  yearRange: string
  title: string
  historicContext: string
  transitionNature: TransitionNature
  coreTransformation: string
  keyAchievements: string[]
  quotesOrDirectives?: PoeticQuote
  metaBadges: MetaBadge[]
}

export interface PioneerArtist {
  id: string
  name: string
  birthDeath: string
  title: string
  stageRoleSpecialty: string
  iconicCharacters: string[]
  historicContribution: string
  signatureStyle: string
  awardedTitle?: string
  avatarPlaceholderText: string
  badges: MetaBadge[]
}

export interface ModernMasterpiece {
  id: string
  title: string
  subTitle?: string
  premiereYear: string
  playwright: string
  director?: string
  troupeOrTheater: string
  synopsis: string
  philosophicalDepth: string
  artisticBreakthrough: string
  awardsAndLegacy: string[]
  iconicExtract: {
    sceneName: string
    lyricsOrExcerpt: string
  }
}

export interface ParticipatingProvince {
  province: string
  cradleVillageOrTroupe: string
  focalHeritagePoint: string
}

export interface UnescoCriteriaAssessment {
  criterionCode: string
  title: string
  assessment: string
}

export interface NationalActionPlanItem {
  pillarName: string
  objective: string
  implementedPrograms: string[]
}

export interface UnescoDossierData {
  dossierTitle: string
  submissionYear: string
  convener: string
  participatingProvinces: ParticipatingProvince[]
  criteriaAssessment: UnescoCriteriaAssessment[]
  nationalActionPlan: NationalActionPlanItem[]
}

export interface ArtisticInnovation {
  area: string
  description: string
  caseStudy: string
  aestheticBalance: string
}

export interface ModernCheoComprehensiveData {
  overviewHero: {
    title: string
    headline: string
    missionDeclaration: string
    metrics: CulturalMetric[]
  }
  milestones: ModernMilestone[]
  pioneers: PioneerArtist[]
  masterpieces: ModernMasterpiece[]
  unescoDossier: UnescoDossierData
  innovations: ArtisticInnovation[]
}

// 4. R3: ÂM THANH SÂN KHẤU & NHẠC CỤ
export interface CheoNightTimelinePhase {
  phaseNumber: 1 | 2 | 3 | 4 | number
  phaseId: string
  phaseName: string
  timeInNight: string
  dramaticFunction: string
  atmosphereAndAcoustics: string
  representativeMelodies: string[]
  primaryInstruments: string[]
  drumPatternDescription: string
  audiencePsychology: string
  metaBadges: MetaBadge[]
  // Compatibility aliases for PROJECT.md contract
  timeRange?: string
  title?: string
  theatricalPurpose?: string
  atmosphere?: string
  instruments?: string[]
  melodyTypes?: string[]
  quoteVerse?: string
  audioSampleId?: string
}

export type InstrumentClassification =
  | 'percussion-membranophone'
  | 'percussion-idiophone'
  | 'chordophone-plucked'
  | 'chordophone-bowed'
  | 'aerophone-woodwind'

export type AcousticRole =
  | 'Rhythmic Commander (Nhạc Trưởng)'
  | 'Melodic Lead (Dẫn Giai Điệu)'
  | 'Emotional Soul (Nỉ Non Cảm Xúc)'
  | 'Atmospheric Flute (Thanh Thoát)'
  | 'Color & Punctuation (Điểm Xuyết)'
  | 'Harmonic Bass (Đệm Trầm)'
  | string

export interface CheoInstrumentCard {
  id: string
  vietnameseName: string
  sinoVietnameseName?: string
  classification: InstrumentClassification
  acousticRole: AcousticRole
  physicalStructure: {
    materials: string
    shapeAndDimensions: string
    soundboxDetail: string
  }
  acousticsAndTimbre: {
    tonalQuality: string
    pitchRange: string
    characteristicSounds: string[]
  }
  soulOfRhythm: string
  stageInteraction: string
  sampleAudioData: {
    soundPreviewLabel: string
    rhythmCadence: string
    durationHint: string
    audioUrl?: string
  }
  badges: MetaBadge[]
  // Compatibility aliases for PROJECT.md contract
  name?: string
  roleTitle?: string
  instrumentFamily?: 'Bộ gõ' | 'Bộ dây' | 'Bộ hơi'
  acousticCharacter?: string
  theatricalInteraction?: string
  classicPoetryRef?: string
  sampleFrequencyWave?: number[]
}

export type MelodySystem =
  | 'Hệ Điệu Sử'
  | 'Hệ Điệu Sa Lệch'
  | 'Hệ Điệu Hề'
  | 'Hệ Điệu Luyện'
  | 'Hệ Điệu Sắp'
  | 'Hệ Nói Lối - Vỉa'

export interface CheoMelodyLyric {
  id: string
  name: string
  melodySystem: MelodySystem
  characterArchetype: string
  vocalAesthetics: string
  meterType: string
  dramaticContext: string
  poeticLyrics: {
    stanzas: string[]
    interpretation: string
  }
  featuredInstruments: string[]
  audioMetadata: {
    performer: string
    recordingNote: string
    duration: string
    audioUrl?: string
  }
}

export interface CheoAudioCompleteData {
  nightTimeline: CheoNightTimelinePhase[]
  instrumentsCatalog: CheoInstrumentCard[]
  classicMelodies: CheoMelodyLyric[]
}

// 5. EXPANDED SCOPE: CROSS-MUSEUM DOMAINS
export interface FolkPropData {
  id: string
  name: string
  folkName: string
  symbolicMeaning: string
  chameleonTransformations: {
    transformation: string
    meaningInPlay: string
    exampleScene: string
  }[]
  craftsmanshipMaterial: string
}

export interface FacePaintingRule {
  characterType: string
  baseMakeup: string
  eyebrowsAndEyes: string
  mouthAndTeeth: string
  symbolicMeaning: string
  keyExamples: string
}

export interface FourPillarsOfMastery {
  pillar: 'Thanh' | 'Sắc' | 'Tinh' | 'Nghệ'
  slogan: string
  explanation: string
  trainingDiscipline: string
}

export interface BackstageArtistryData {
  fourPillarsOfMastery: FourPillarsOfMastery[]
  makeupCodex: FacePaintingRule[]
  propsArtistry: FolkPropData[]
  actorRehearsalRituals: string[]
}

export interface HumanisticPillar {
  title: string
  corePhilosophy: string
  manifestationInPlays: string
  enduringRelevance: string
}

export interface FolkLaughterMechanism {
  humorCategory: string
  targetOfSatire: string
  characterMedium: string
  catharsisEffect: string
}

export interface CulturalPhilosophyData {
  humanisticPillars: HumanisticPillar[]
  folkLaughterMechanisms: FolkLaughterMechanism[]
  communityCohesionRole: string
}

export type ArchiveMediaType =
  | '78-rpm-vinyl'
  | '33-rpm-lp'
  | 'nom-manuscript'
  | 'monograph-book'
  | 'photograph-archive'

export type PreservationStatus =
  | 'Digitized High-Res'
  | 'Restored Binaural Audio'
  | 'Physical Archival Vault'

export interface ArchiveDocumentItem {
  id: string
  title: string
  mediaType: ArchiveMediaType
  catalogNumber: string
  yearOrEra: string
  custodianOrLabel: string
  description: string
  scholarlySignificance: string
  preservationStatus: PreservationStatus
}

export interface MuseumZoneMapData {
  zoneId: string
  floorLevel: string
  zoneName: string
  historicalFocus: string
  highlightExhibits: string[]
  estimatedTourMinutes: number
  audioGuideLanguages: string[]
}

export interface TourItineraryStop {
  zoneName: string
  stopName: string
  highlightAction: string
}

export interface CuratedTourData {
  tourId: string
  title: string
  durationMinutes: number
  targetAudience: string
  itineraryStops: TourItineraryStop[]
}
```

---

### 4.2 Deliverable 2: Create `src/data/cheoCulturalData.ts`
Create `src/data/cheoCulturalData.ts` importing directly from `../types/cheoCulturalTypes`.

#### Key Exports:
1. `KHAM_PHA_HUB_DATA: HubShowcaseData`
2. `GIOI_THIEU_HUB_DATA: HubShowcaseData`
3. `SAN_KHAU_HUB_DATA: HubShowcaseData`
4. `TIEN_ICH_HUB_DATA: HubShowcaseData`
5. `HUB_SHOWCASE_MAP: Record<string, HubShowcaseData>` & `getHubShowcaseData(idOrPath: string): HubShowcaseData | undefined`
6. `MODERN_CHEO_DATA: ModernCheoComprehensiveData`
7. `CHEO_AUDIO_COMPLETE_DATA: CheoAudioCompleteData`
8. `BACKSTAGE_ARTISTRY_DATA: BackstageArtistryData`
9. `CULTURAL_PHILOSOPHY_DATA: CulturalPhilosophyData`
10. `ARCHIVE_VAULT_DATA: ArchiveDocumentItem[]`
11. `MUSEUM_ZONES_DATA: MuseumZoneMapData[]`
12. `CURATED_TOURS_DATA: CuratedTourData[]`

*(The complete tested 73KB implementation is available at `d:\Learning\Chèo Landing page\.agents\explorer_m1_1\proposed_cheoCulturalData.ts` ready for direct transfer).*

---

### 4.3 Deliverable 3: Integrate into `src/data/pageDetailsData.ts`

#### Step-by-Step Integration Method:
1. **Top Imports**:
   ```typescript
   import type {
     HubShowcaseData,
     ModernCheoComprehensiveData,
     CheoAudioCompleteData,
     BackstageArtistryData,
     CulturalPhilosophyData,
     ArchiveDocumentItem,
     MuseumZoneMapData,
     CuratedTourData,
     CulturalMetric,
     HeritagePillar,
     MetaBadge
   } from '../types/cheoCulturalTypes'

   import {
     KHAM_PHA_HUB_DATA,
     GIOI_THIEU_HUB_DATA,
     SAN_KHAU_HUB_DATA,
     TIEN_ICH_HUB_DATA,
     MODERN_CHEO_DATA,
     CHEO_AUDIO_COMPLETE_DATA,
     BACKSTAGE_ARTISTRY_DATA,
     CULTURAL_PHILOSOPHY_DATA,
     ARCHIVE_VAULT_DATA,
     MUSEUM_ZONES_DATA,
     CURATED_TOURS_DATA
   } from './cheoCulturalData'
   ```

2. **Interface Extension (`PageDetailContent`)**:
   ```typescript
   export interface PageDetailContent {
     id: string
     title: string
     parentTitle?: string
     breadcrumb: string[]
     quote?: {
       text: string
       author?: string
     }
     heroBadge: string
     introduction: string
     sections: {
       heading: string
       paragraphs: string[]
       bullets?: string[]
     }[]
     funFacts?: string[]
     widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'feedback' | 'timeline' | 'plays' | 'modern' | 'map' | 'archive' | 'default'
     metaBadges?: string[]
     structuredBadges?: MetaBadge[]
     quickSpecs?: { label: string; value: string }[]
     tags: string[]
     // Rich Cultural Extensions (100% Non-breaking)
     hubShowcase?: HubShowcaseData
     modernCheoData?: ModernCheoComprehensiveData
     audioData?: CheoAudioCompleteData
     backstageData?: BackstageArtistryData
     philosophyData?: CulturalPhilosophyData
     archiveVault?: ArchiveDocumentItem[]
     museumZones?: MuseumZoneMapData[]
     curatedTours?: CuratedTourData[]
     keyMetrics?: CulturalMetric[]
     pillars?: HeritagePillar[]
   }
   ```

3. **Map Linkage in `PAGE_DETAILS_MAP`**:
   - In `'kham-pha'`: Add `hubShowcase: KHAM_PHA_HUB_DATA`, `keyMetrics: KHAM_PHA_HUB_DATA.keyMetrics`, `pillars: KHAM_PHA_HUB_DATA.pillars`.
   - In `'gioi-thieu'`: Add `hubShowcase: GIOI_THIEU_HUB_DATA`, `keyMetrics: GIOI_THIEU_HUB_DATA.keyMetrics`.
   - In `'san-khau'`: Add `hubShowcase: SAN_KHAU_HUB_DATA`, `keyMetrics: SAN_KHAU_HUB_DATA.keyMetrics`.
   - In `'tien-ich'`: Add `hubShowcase: TIEN_ICH_HUB_DATA`, `keyMetrics: TIEN_ICH_HUB_DATA.keyMetrics`.
   - In `'cheo-hien-dai'`: Add `modernCheoData: MODERN_CHEO_DATA`.
   - In `'am-thanh'`: Add `audioData: CHEO_AUDIO_COMPLETE_DATA`.
   - In `'phia-sau-san-khau'`: Add `backstageData: BACKSTAGE_ARTISTRY_DATA`.
   - In `'gia-tri-van-hoa'`: Add `philosophyData: CULTURAL_PHILOSOPHY_DATA`.
   - In `'kho-tu-lieu'`: Add `archiveVault: ARCHIVE_VAULT_DATA`.
   - In `'ban-do-bao-tang'`: Add `museumZones: MUSEUM_ZONES_DATA`, `curatedTours: CURATED_TOURS_DATA`.

4. **Re-export at bottom of `pageDetailsData.ts`**:
   ```typescript
   export * from './cheoCulturalData'
   export type * from '../types/cheoCulturalTypes'
   ```

---

### 4.4 Deliverable 4: Integrate into `src/data/sitemapRoutes.ts`

```typescript
import type { MetaBadge, KeyValueAttribute } from '../types/cheoCulturalTypes'

export interface RouteNode {
  path: string
  id: string
  title: string
  subtitle: string
  category: string
  breadcrumbs: { title: string; path: string }[]
  childrenPaths?: string[]
  isHub?: boolean
  description: string
  widgetType?: 'audio' | 'characters' | 'costumes' | 'ticket' | 'timeline' | 'feedback' | 'plays' | 'modern' | 'map' | 'archive' | 'default'
  tags: string[]
  // Structured Metadata Primitives for R4:
  metaBadges?: MetaBadge[]
  featurePills?: string[]
  keySpecs?: KeyValueAttribute[]
}
```

---

## 5. Verification Method

### 5.1 Independent Verification Commands
To verify the implementation once applied:

1. **TypeScript App Compilation**:
   ```powershell
   npx tsc --noEmit
   ```
   *Expected output*: 0 errors, exit code 0.

2. **Full Production Build**:
   ```powershell
   npm run build
   ```
   *Expected output*: `tsc -b && vite build` completes with exit code 0 and bundles `dist/`.

3. **Linter Check**:
   ```powershell
   npx oxlint
   ```
   *Expected output*: Clean pass without unhandled errors.

### 5.2 Specific Files to Inspect
- `src/types/cheoCulturalTypes.ts`: Ensure `import type` is respected and all 22 domain interfaces are exported.
- `src/data/cheoCulturalData.ts`: Ensure imports use `import type { ... } from '../types/cheoCulturalTypes'`.
- `src/data/pageDetailsData.ts`: Ensure `PageDetailContent` maintains all 13 original properties.
- `src/data/sitemapRoutes.ts`: Ensure all 30 routes maintain their original `subtitle` string while supporting optional `metaBadges`.

### 5.3 Invalidation Conditions
- Any removal or type change of existing properties on `PageDetailContent` (e.g. converting `metaBadges?: string[]` to non-string) will invalidate backwards compatibility with `DetailPageRenderer.tsx`.
- Importing types without the `type` keyword under `verbatimModuleSyntax` will fail `npm run build`.
- Unused variables or imports will fail `noUnusedLocals: true`.
