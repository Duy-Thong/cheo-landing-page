/**
 * Canonical Cultural Data Models & TypeScript Interfaces for Chèo Heritage Platform
 * Location: src/types/cheoCulturalTypes.ts
 * Milestone: M1 (Data & UI Primitives)
 */

// ==========================================
// 1. ATOMIC UI PRIMITIVES & METADATA
// ==========================================

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

// ==========================================
// 2. HERITAGE PILLARS & HUB SHOWCASE
// ==========================================

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

// ==========================================
// 3. R2: CHÈO HIỆN ĐẠI DETAILED DATA
// ==========================================

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

// ==========================================
// 4. R3: ÂM THANH SÂN KHẤU & NHẠC CỤ
// ==========================================

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

// ==========================================
// 5. EXPANDED SCOPE: CROSS-MUSEUM DOMAINS
// ==========================================

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
