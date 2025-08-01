// Import achievement types
import { Achievement } from './achievements'
export * from './achievements'

// Game item categories
export enum ItemCategory {
  FOOD = 'food',
  TRANSPORT = 'transport',
  TECHNOLOGY = 'technology',
  REAL_ESTATE = 'real-estate',
  LUXURY = 'luxury',
  BUSINESS = 'business',
  CHARITY = 'charity'
}

// Individual purchasable item
export interface GameItem {
  id: string
  name: string
  basePrice: number // Base price in USD
  currentPrice: number // Current price after inflation
  category: ItemCategory
  description: string
  imageUrl?: string
  owned: number // How many owned
  maxOwned?: number // Maximum that can be owned (optional)
}

// Company that generates auto income
export interface Company {
  id: string
  name: string
  basePrice: number
  currentPrice: number
  baseIncomePerSecond: number
  currentIncomePerSecond: number
  owned: number
  description: string
  upgradeMultiplier: number // How much income increases per owned
}

// Challenge system
export interface Challenge {
  id: string
  name: string
  description: string
  targetTime: number // Target completion time in seconds
  startTime: number | null
  endTime: number | null
  completed: boolean
  bestTime: number | null
}

// Upgrade system for inflation
export interface UpgradeSystem {
  inflationRate: number // Global price multiplier
  upgradeLevel: number
  upgradePrice: number
}

// Game statistics
export interface GameStats {
  totalSpent: number
  totalEarned: number
  itemsPurchased: number
  companiesOwned: number
  timePlayed: number
  sessionsPlayed: number
}

// Main game state
export interface GameState {
  // Core game data
  money: number // Current money amount (starts with Bill Gates' wealth)
  initialMoney: number // Bill Gates' initial wealth for reference
  
  // Game items and companies
  items: GameItem[]
  companies: Company[]
  
  // Challenge system
  currentChallenge: Challenge | null
  completedChallenges: Challenge[]
  
  // Achievement system
  achievements: Achievement[]
  
  // Upgrade system
  upgradeSystem: UpgradeSystem
  
  // Game statistics
  stats: GameStats
  
  // Game state
  gameStartTime: number
  lastSaveTime: number
  isGameComplete: boolean
  
  // Settings
  autoSave: boolean
  soundEnabled: boolean
  showNotifications: boolean
}

// Actions for the game store
export interface GameActions {
  // Money operations
  spendMoney: (amount: number) => boolean
  addMoney: (amount: number) => void
  
  // Item operations
  purchaseItem: (itemId: string, quantity?: number) => boolean
  
  // Company operations
  sellCompany: (companyId: string) => boolean
  
  // Challenge operations
  startChallenge: (challengeId: string) => void
  completeChallenge: () => void
  resetChallenge: () => void
  
  // Upgrade operations
  purchaseUpgrade: () => boolean
  
  // Game operations
  resetGame: () => void
  saveGame: () => void
  loadGame: () => void
  
  // Real-time operations (for auto income)
  tick: () => void
  
  // Achievement operations
  checkAchievements: () => void
  unlockAchievement: (achievementId: string) => void
  
  // Settings
  toggleAutoSave: () => void
  toggleSound: () => void
  toggleNotifications: () => void
}