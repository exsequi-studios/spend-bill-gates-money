export enum AchievementType {
  SPENDING = 'spending',
  ITEMS = 'items',
  COMPANIES = 'companies',
  CHALLENGES = 'challenges',
  TIME = 'time',
  SPECIAL = 'special'
}

export enum AchievementRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon', 
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary'
}

export interface Achievement {
  id: string
  name: string
  description: string
  type: AchievementType
  rarity: AchievementRarity
  icon: string
  unlockedAt?: number // timestamp when unlocked
  isUnlocked: boolean
  progress: number // 0-100
  maxProgress: number
  reward?: {
    type: 'money' | 'multiplier' | 'unlock'
    amount?: number
    description: string
  }
}

export interface AchievementProgress {
  totalSpent: number
  totalEarned: number
  itemsPurchased: number
  companiesOwned: number
  challengesCompleted: number
  timePlayed: number
  fastestCompletion: number
  // Specific achievements
  bigSpender: number // Largest single purchase
  charityGiver: number // Total charity spending
  businessMogul: number // Total companies owned
  speedRunner: number // Fastest challenge completion
}