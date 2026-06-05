// ============================================================
// Kullanıcı
// ============================================================
export interface Profile {
  id: string
  username: string
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  created_at: string
  followers_count?: number
  following_count?: number
  posts_count?: number
}

// ============================================================
// Aktivite kategorileri
// ============================================================
export const ACTIVITY_CATEGORIES = [
  { id: 'camping',      label: 'Kamp',           emoji: '⛺' },
  { id: 'bbq',          label: 'Mangal',          emoji: '🔥' },
  { id: 'fishing',      label: 'Balık Tutma',     emoji: '🎣' },
  { id: 'kayaking',     label: 'Kayak',           emoji: '🛶' },
  { id: 'hiking',       label: 'Yürüyüş',         emoji: '🥾' },
  { id: 'trekking',     label: 'Trekking',        emoji: '🏔️' },
  { id: 'climbing',     label: 'Kaya Tırmanışı',  emoji: '🧗' },
  { id: 'swimming',     label: 'Yüzme',           emoji: '🏊' },
  { id: 'sup',          label: 'SUP Board',       emoji: '🏄' },
  { id: 'diving',       label: 'Dalgıçlık',       emoji: '🤿' },
  { id: 'cycling',      label: 'Bisiklet',        emoji: '🚴' },
  { id: 'nature',       label: 'Doğa',            emoji: '🌿' },
] as const

export type ActivityCategory = typeof ACTIVITY_CATEGORIES[number]['id']

// ============================================================
// Konum etiketleri
// ============================================================
export const LOCATION_TAGS = {
  camping: [
    { id: 'fire_allowed',   label: 'Ateş yakılabilir' },
    { id: 'water_available', label: 'Su mevcut' },
    { id: 'electricity',    label: 'Elektrik mevcut' },
    { id: 'toilet',         label: 'Tuvalet mevcut' },
    { id: 'shower',         label: 'Duş mevcut' },
    { id: 'paid',           label: 'Ücretli' },
    { id: 'free',           label: 'Ücretsiz' },
    { id: 'reservable',     label: 'Rezervasyon gerekli' },
    { id: 'flat_ground',    label: 'Düz zemin' },
    { id: 'shaded',         label: 'Gölgelik' },
  ],
  fishing: [
    { id: 'license_required', label: 'Lisans gerekli' },
    { id: 'catch_release',   label: 'Tut-bırak' },
    { id: 'boat_access',     label: 'Tekne erişimi' },
    { id: 'pier_available',  label: 'İskele mevcut' },
  ],
  climbing: [
    { id: 'bolted',         label: 'Ankrajlı' },
    { id: 'trad',           label: 'Trad rotalar' },
    { id: 'beginner_ok',    label: 'Başlangıç uygun' },
    { id: 'guide_needed',   label: 'Rehber gerekli' },
  ],
  general: [
    { id: 'parking',        label: 'Otopark var' },
    { id: 'dog_friendly',   label: 'Köpek dostu' },
    { id: 'family_friendly', label: 'Aile dostu' },
    { id: 'accessible',     label: 'Engelli erişimi' },
    { id: 'crowded_weekend', label: 'Hafta sonu kalabalık' },
    { id: 'cell_signal',    label: 'Sinyal var' },
    { id: 'no_signal',      label: 'Sinyal yok' },
  ],
} as const

// ============================================================
// Post
// ============================================================
export interface LocationData {
  lat: number
  lng: number
  name: string
  address?: string
}

export interface Post {
  id: string
  user_id: string
  content: string
  images: string[]
  activity_categories: ActivityCategory[]
  location: LocationData | null
  location_tags: string[]
  likes_count: number
  comments_count: number
  created_at: string
  updated_at: string
  // ilişkili
  profile?: Profile
  user_has_liked?: boolean
}

// ============================================================
// Yorum
// ============================================================
export interface Comment {
  id: string
  post_id: string
  user_id: string
  content: string
  created_at: string
  profile?: Profile
}

// ============================================================
// Auth
// ============================================================
export interface AuthFormData {
  email: string
  password: string
  username?: string
  full_name?: string
}
