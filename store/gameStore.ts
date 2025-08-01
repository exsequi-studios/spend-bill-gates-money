import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { useEffect } from 'react'
import { GameState, GameActions, GameItem, Company, Challenge } from '@/types/game'
import { Achievement } from '@/types/game/achievements'
import { 
  BILL_GATES_WEALTH, 
  INITIAL_ITEMS, 
  INITIAL_COMPANIES, 
  INITIAL_CHALLENGES 
} from '@/data/gameData'
import { INITIAL_ACHIEVEMENTS } from '@/data/achievements'
import { ItemCategory } from '@/types/game'

interface GameStore extends GameState, GameActions {}

// Create initial game state
const createInitialState = (): GameState => {
  // Calculate initial companies owned count
  const initialCompaniesOwned = INITIAL_COMPANIES.reduce((total, company) => total + company.owned, 0)
  
  return {
    money: BILL_GATES_WEALTH,
    initialMoney: BILL_GATES_WEALTH,
    items: INITIAL_ITEMS.map(item => ({ ...item })),
    companies: INITIAL_COMPANIES.map(company => ({
      ...company,
      // Calculate initial income based on owned count
      currentIncomePerSecond: company.owned > 0 
        ? company.baseIncomePerSecond * Math.pow(company.upgradeMultiplier, company.owned)
        : company.baseIncomePerSecond
    })),
    currentChallenge: null,
    completedChallenges: [],
    achievements: INITIAL_ACHIEVEMENTS.map(achievement => ({ ...achievement })),
    upgradeSystem: {
      inflationRate: 1.0,
      upgradeLevel: 0,
      upgradePrice: 1_000_000_000 // $1B for first upgrade
    },
    stats: {
      totalSpent: 0,
      totalEarned: 0,
      itemsPurchased: 0,
      companiesOwned: initialCompaniesOwned,
      timePlayed: 0,
      sessionsPlayed: 0
    },
    gameStartTime: Date.now(),
    lastSaveTime: Date.now(),
    isGameComplete: false,
    autoSave: true,
    soundEnabled: true,
    showNotifications: true
  }
}

export const useGameStore = create<GameStore>()(
  persist(
    immer((set, get) => ({
      ...createInitialState(),

      // Money operations
      spendMoney: (amount: number) => {
        const state = get()
        if (state.money >= amount) {
          set((draft) => {
            draft.money -= amount
            draft.stats.totalSpent += amount
            draft.lastSaveTime = Date.now()
            
            // Check if game is complete (money <= 0)
            if (draft.money <= 0) {
              draft.isGameComplete = true
              if (draft.currentChallenge) {
                draft.currentChallenge.endTime = Date.now()
                draft.currentChallenge.completed = true
                if (draft.currentChallenge.startTime) {
                  const timeTaken = (draft.currentChallenge.endTime - draft.currentChallenge.startTime) / 1000
                  draft.currentChallenge.bestTime = timeTaken
                }
                draft.completedChallenges.push({ ...draft.currentChallenge })
                draft.currentChallenge = null
              }
            }
          })
          return true
        }
        return false
      },

      addMoney: (amount: number) => {
        set((draft) => {
          draft.money += amount
          draft.stats.totalEarned += amount
          draft.lastSaveTime = Date.now()
        })
      },

      // Item operations
      purchaseItem: (itemId: string) => {
        const state = get()
        const item = state.items.find(i => i.id === itemId)
        
        if (!item) return false
        
        // Check max owned limit
        if (item.maxOwned && item.owned >= item.maxOwned) {
          return false
        }
        
        if (state.money >= item.currentPrice) {
          const success = get().spendMoney(item.currentPrice)
          if (success) {
            set((draft) => {
              const draftItem = draft.items.find(i => i.id === itemId)
              if (draftItem) {
                draftItem.owned += 1
                draft.stats.itemsPurchased += 1
                
                // Apply price increase
                draftItem.currentPrice *= 1.01
              }
            })
            
            // Check for achievements after item purchase
            get().checkAchievements()
            return true
          }
        }
        return false
      },

      // Company operations
      sellCompany: (companyId: string) => {
        const state = get()
        const company = state.companies.find(c => c.id === companyId)
        
        if (!company || company.owned <= 0) return false
        
        // Calculate sell price (80% of current base value)
        const sellPrice = Math.floor(company.basePrice * 0.8)
        
        set((draft) => {
          const draftCompany = draft.companies.find(c => c.id === companyId)
          if (draftCompany) {
            draftCompany.owned -= 1
            draft.stats.companiesOwned = Math.max(0, draft.stats.companiesOwned - 1)
            
            // Recalculate income based on remaining owned companies
            const newIncomeMultiplier = draftCompany.owned > 0 
              ? Math.pow(draftCompany.upgradeMultiplier, draftCompany.owned)
              : 0
            draftCompany.currentIncomePerSecond = draftCompany.owned > 0 
              ? draftCompany.baseIncomePerSecond * newIncomeMultiplier 
              : draftCompany.baseIncomePerSecond
            
            // Add money from sale
            draft.money += sellPrice
            draft.stats.totalEarned += sellPrice
          }
        })
        
        // Check for achievements after company sale
        get().checkAchievements()
        return true
      },

      // Challenge operations
      startChallenge: (challengeId: string) => {
        const challenge = INITIAL_CHALLENGES.find(c => c.id === challengeId)
        if (challenge) {
          set((draft) => {
            draft.currentChallenge = {
              ...challenge,
              startTime: Date.now(),
              endTime: null,
              completed: false
            }
          })
        }
      },

      completeChallenge: () => {
        set((draft) => {
          if (draft.currentChallenge && draft.currentChallenge.startTime) {
            draft.currentChallenge.endTime = Date.now()
            draft.currentChallenge.completed = true
            
            const timeTaken = (draft.currentChallenge.endTime - draft.currentChallenge.startTime) / 1000
            
            // Check if within target time
            if (timeTaken <= draft.currentChallenge.targetTime) {
              draft.currentChallenge.bestTime = timeTaken
            }
            
            draft.completedChallenges.push({ ...draft.currentChallenge })
            draft.currentChallenge = null
          }
        })
      },

      resetChallenge: () => {
        set((draft) => {
          draft.currentChallenge = null
        })
      },

      // Upgrade operations
      purchaseUpgrade: () => {
        const state = get()
        const cost = state.upgradeSystem.upgradePrice
        
        if (state.money >= cost) {
          const success = get().spendMoney(cost)
          if (success) {
            set((draft) => {
              // Increase inflation rate (makes everything more expensive)
              draft.upgradeSystem.inflationRate *= 1.5
              draft.upgradeSystem.upgradeLevel += 1
              draft.upgradeSystem.upgradePrice *= 2
              
              // Apply inflation to all items and companies
              draft.items.forEach(item => {
                item.currentPrice = item.basePrice * draft.upgradeSystem.inflationRate
              })
              
              draft.companies.forEach(company => {
                company.currentPrice = company.basePrice * draft.upgradeSystem.inflationRate
              })
            })
            return true
          }
        }
        return false
      },

      // Game operations
      resetGame: () => {
        set(() => createInitialState())
      },

      saveGame: () => {
        set((draft) => {
          draft.lastSaveTime = Date.now()
        })
      },

      loadGame: () => {
        // Handled by Zustand persist middleware
      },

      // Real-time operations (for auto income)
      tick: () => {
        const state = get()
        let totalIncome = 0
        
        state.companies.forEach(company => {
          if (company.owned > 0) {
            totalIncome += company.currentIncomePerSecond
          }
        })
        
        if (totalIncome > 0) {
          get().addMoney(totalIncome)
        }
        
        // Update time played and check achievements
        set((draft) => {
          draft.stats.timePlayed += 1 // Assumes tick is called every second
        })
        
        // Check achievements periodically (every 10 seconds)
        if (state.stats.timePlayed % 10 === 0) {
          get().checkAchievements()
        }
      },

      // Settings
      toggleAutoSave: () => {
        set((draft) => {
          draft.autoSave = !draft.autoSave
        })
      },

      toggleSound: () => {
        set((draft) => {
          draft.soundEnabled = !draft.soundEnabled
        })
      },

      toggleNotifications: () => {
        set((draft) => {
          draft.showNotifications = !draft.showNotifications
        })
      },

      // Achievement operations
      checkAchievements: () => {
        const state = get()
        
        set((draft) => {
          draft.achievements.forEach((achievement: Achievement) => {
            if (achievement.isUnlocked) return
            
            let progress = 0
            let shouldUnlock = false
            
            switch (achievement.id) {
              case 'first_purchase':
                progress = state.stats.itemsPurchased > 0 ? 1 : 0
                shouldUnlock = state.stats.itemsPurchased > 0
                break
                
              case 'million_spender':
                progress = Math.min(state.stats.totalSpent, achievement.maxProgress)
                shouldUnlock = state.stats.totalSpent >= 1_000_000
                break
                
              case 'billion_spender':
                progress = Math.min(state.stats.totalSpent, achievement.maxProgress)
                shouldUnlock = state.stats.totalSpent >= 1_000_000_000
                break
                
              case 'entrepreneur':
                progress = state.stats.companiesOwned > 0 ? 1 : 0
                shouldUnlock = state.stats.companiesOwned > 0
                break
                
              case 'business_mogul':
                const uniqueCompanies = state.companies.filter(c => c.owned > 0).length
                progress = uniqueCompanies
                shouldUnlock = uniqueCompanies >= 6
                break
                
              case 'challenger':
                progress = state.completedChallenges.length > 0 ? 1 : 0
                shouldUnlock = state.completedChallenges.length > 0
                break
                
              case 'challenge_master':
                progress = state.completedChallenges.length
                shouldUnlock = state.completedChallenges.length >= 4
                break
                
              case 'dedication':
                progress = Math.min(state.stats.timePlayed, achievement.maxProgress)
                shouldUnlock = state.stats.timePlayed >= 3600
                break
                
              case 'completionist':
                progress = state.stats.totalSpent
                shouldUnlock = state.isGameComplete
                break
                
              case 'food_lover':
                const foodItems = state.items.filter(item => 
                  item.category === ItemCategory.FOOD && item.owned > 0
                ).length
                progress = foodItems
                shouldUnlock = foodItems >= 4
                break
                
              case 'tech_enthusiast':
                const techItems = state.items.filter(item => 
                  item.category === ItemCategory.TECHNOLOGY && item.owned > 0
                ).length
                progress = techItems
                shouldUnlock = techItems >= 4
                break
                
              case 'collector':
                const ownedItems = state.items.filter(item => item.owned > 0).length
                progress = ownedItems
                shouldUnlock = ownedItems >= 50
                break
                
              case 'hoarder':
                progress = Math.min(state.stats.itemsPurchased, achievement.maxProgress)
                shouldUnlock = state.stats.itemsPurchased >= 1000
                break
                
              // Add more achievement checks here
            }
            
            const achievementToUpdate = draft.achievements.find((a: Achievement) => a.id === achievement.id)
            if (achievementToUpdate) {
              achievementToUpdate.progress = progress
              
              if (shouldUnlock && !achievementToUpdate.isUnlocked) {
                achievementToUpdate.isUnlocked = true
                achievementToUpdate.unlockedAt = Date.now()
                
                // Apply rewards
                if (achievementToUpdate.reward) {
                  if (achievementToUpdate.reward.type === 'money' && achievementToUpdate.reward.amount) {
                    draft.money += achievementToUpdate.reward.amount
                  }
                }
              }
            }
          })
        })
      },

      unlockAchievement: (achievementId: string) => {
        set((draft) => {
          const achievement = draft.achievements.find((a: Achievement) => a.id === achievementId)
          if (achievement && !achievement.isUnlocked) {
            achievement.isUnlocked = true
            achievement.unlockedAt = Date.now()
            achievement.progress = achievement.maxProgress
          }
        })
      }
    })),
    {
      name: 'spend-bill-gates-money-game',
      version: 2, // Incremented to reset cached state with new companies
    }
  )
)

// Hook for periodic game tick (auto income)
export const useGameTick = () => {
  const tick = useGameStore(state => state.tick)
  
  // Set up interval for auto income generation
  useEffect(() => {
    const interval = setInterval(tick, 1000) // Every second
    return () => clearInterval(interval)
  }, [tick])
}