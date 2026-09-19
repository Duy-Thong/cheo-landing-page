/**
 * TypeScript Data Models & Interfaces for Chèo Heritage Platform
 * Author: Explorer Survey 3 (Cultural Content & Data Models)
 * Location: .agents/explorer_survey_3/proposed_cheoCulturalTypes.ts
 */

// ==========================================
// 1. COMMON STRUCTURED METADATA & BADGES
// ==========================================

export interface MetaBadge {
  label: string
  variant: 'amber' | 'rose' | 'emerald' | 'sky' | 'purple' | 'red' | 'stone'
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
}

export interface PoeticQuote {
  verse: string
  author?: string
  context?: string
  work?: string
}

// ==========================================
// 2. R1: HERITAGE PILLARS & HUB PAGES (/kham-pha, etc.)
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
}

export interface HubShowcaseData {
  hubId: string
  bannerTitle: string
  bannerTagline: string
  heroDescription: string
  featuredQuote: PoeticQuote
  keyMetrics: CulturalMetric[]
  pillars?: HeritagePillar[]
  exhibitionSubRooms: {
    routePath: string
    id: string
    title: string
    badge: string
    highlightTag: string
    summary: string
    bulletHighlights: string[]
    actionLabel: string
  }[]
}

// ==========================================
// 3. R2: CHÈO HIỆN ĐẠI DETAILED DATA (/kham-pha/cheo-hien-dai)
// ==========================================

export interface ModernMilestone {
  era: string
  yearRange: string
  title: string
  historicContext: string
  transitionNature: 'stage-reform' | 'literary-epic' | 'orchestral-fusion' | 'unesco-digital'
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

export interface UnescoDossierData {
  dossierTitle: string
  submissionYear: string
  convener: string
  participatingProvinces: {
    province: string
    cradleVillageOrTroupe: string
    focalHeritagePoint: string
  }[]
  criteriaAssessment: {
    criterionCode: string
    title: string
    assessment: string
  }[]
  nationalActionPlan: {
    pillarName: string
    objective: string
    implementedPrograms: string[]
  }[]
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
  innovations: {
    area: string
    description: string
    caseStudy: string
    aestheticBalance: string
  }[]
}

// ==========================================
// 4. R3: ÂM THANH SÂN KHẤU & NHẠC CỤ (/kham-pha/san-khau/am-thanh)
// ==========================================

export interface CheoNightTimelinePhase {
  phaseNumber: 1 | 2 | 3 | 4
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
}

export interface CheoInstrumentCard {
  id: string
  vietnameseName: string
  sinoVietnameseName?: string
  classification: 'percussion-membranophone' | 'percussion-idiophone' | 'chordophone-plucked' | 'chordophone-bowed' | 'aerophone-woodwind'
  acousticRole: 'Rhythmic Commander (Nhạc Trưởng)' | 'Melodic Lead (Dẫn Giai Điệu)' | 'Emotional Soul (Nỉ Non Cảm Xúc)' | 'Atmospheric Flute (Thanh Thoát)' | 'Color & Punctuation (Điểm Xuyết)' | 'Harmonic Bass (Đệm Trầm)'
  physicalStructure: {
    materials: string
    shapeAndDimensions: string
    soundboxDetail: string
  }
  acousticsAndTimbre: {
    tonalQuality: string
    pitchRange: string
    characteristicSounds: string[] // e.g. ["Tùng (mặt)", "Cắc (tang)", "Rụp"]
  }
  soulOfRhythm: string // Linh hồn nhịp phách
  stageInteraction: string // Tương tác với diễn viên & nhân vật
  sampleAudioData: {
    soundPreviewLabel: string
    rhythmCadence: string
    durationHint: string
  }
  badges: MetaBadge[]
}

export interface CheoMelodyLyric {
  id: string
  name: string
  melodySystem: 'Hệ Điệu Sử' | 'Hệ Điệu Sa Lệch' | 'Hệ Điệu Hề' | 'Hệ Điệu Luyện' | 'Hệ Điệu Sắp' | 'Hệ Nói Lối - Vỉa'
  characterArchetype: string
  vocalAesthetics: string // Tính chất điệu hát (Trầm lắng, nỉ non, vui tươi, trào lộng...)
  meterType: string // Thể thơ (Lục bát, Song thất lục bát, Thất ngôn...)
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
  }
}

export interface CheoAudioCompleteData {
  nightTimeline: CheoNightTimelinePhase[]
  instrumentsCatalog: CheoInstrumentCard[]
  classicMelodies: CheoMelodyLyric[]
}

// ==========================================
// 5. EXPANDED SCOPE: CROSS-MUSEUM PAGES
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

export interface BackstageArtistryData {
  fourPillarsOfMastery: {
    pillar: 'Thanh' | 'Sắc' | 'Tinh' | 'Nghệ'
    slogan: string
    explanation: string
    trainingDiscipline: string
  }[]
  makeupCodex: FacePaintingRule[]
  propsArtistry: FolkPropData[]
  actorRehearsalRituals: string[]
}

export interface CulturalPhilosophyData {
  humanisticPillars: {
    title: string
    corePhilosophy: string
    manifestationInPlays: string
    enduringRelevance: string
  }[]
  folkLaughterMechanisms: {
    humorCategory: string
    targetOfSatire: string
    characterMedium: string
    catharsisEffect: string
  }[]
  communityCohesionRole: string
}

export interface ArchiveDocumentItem {
  id: string
  title: string
  mediaType: '78-rpm-vinyl' | '33-rpm-lp' | 'nom-manuscript' | 'monograph-book' | 'photograph-archive'
  catalogNumber: string
  yearOrEra: string
  custodianOrLabel: string
  description: string
  scholarlySignificance: string
  preservationStatus: 'Digitized High-Res' | 'Restored Binaural Audio' | 'Physical Archival Vault'
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

export interface CuratedTourData {
  tourId: string
  title: string
  durationMinutes: number
  targetAudience: string
  itineraryStops: {
    zoneName: string
    stopName: string
    highlightAction: string
  }[]
}
