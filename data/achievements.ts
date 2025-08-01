import { Achievement, AchievementType, AchievementRarity } from '@/types/game/achievements'

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  // Spending Achievements
  {
    id: 'first_purchase',
    name: '第一次购买',
    description: '购买你的第一个物品',
    type: AchievementType.SPENDING,
    rarity: AchievementRarity.COMMON,
    icon: '🛒',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    reward: {
      type: 'money',
      amount: 1000,
      description: '获得 $1,000 奖励'
    }
  },
  {
    id: 'million_spender',
    name: '百万富翁',
    description: '花费超过 $1,000,000',
    type: AchievementType.SPENDING,
    rarity: AchievementRarity.COMMON,
    icon: '💰',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1_000_000,
    reward: {
      type: 'multiplier',
      amount: 1.05,
      description: '获得 5% 收入加成'
    }
  },
  {
    id: 'billion_spender',
    name: '十亿富翁',
    description: '花费超过 $1,000,000,000',
    type: AchievementType.SPENDING,
    rarity: AchievementRarity.RARE,
    icon: '💎',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1_000_000_000,
    reward: {
      type: 'multiplier',
      amount: 1.1,
      description: '获得 10% 收入加成'
    }
  },
  {
    id: 'big_spender',
    name: '挥金如土',
    description: '单次购买超过 $100,000,000',
    type: AchievementType.SPENDING,
    rarity: AchievementRarity.UNCOMMON,
    icon: '💸',
    isUnlocked: false,
    progress: 0,
    maxProgress: 100_000_000
  },

  // Items Achievements
  {
    id: 'collector',
    name: '收集家',
    description: '购买 50 个不同的物品',
    type: AchievementType.ITEMS,
    rarity: AchievementRarity.UNCOMMON,
    icon: '🎁',
    isUnlocked: false,
    progress: 0,
    maxProgress: 50
  },
  {
    id: 'hoarder',
    name: '囤积者',
    description: '购买 1000 个物品',
    type: AchievementType.ITEMS,
    rarity: AchievementRarity.RARE,
    icon: '📦',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1000
  },
  {
    id: 'food_lover',
    name: '美食家',
    description: '购买所有食物类物品',
    type: AchievementType.ITEMS,
    rarity: AchievementRarity.UNCOMMON,
    icon: '🍽️',
    isUnlocked: false,
    progress: 0,
    maxProgress: 4 // Number of food items
  },
  {
    id: 'tech_enthusiast',
    name: '科技爱好者',
    description: '购买所有科技类物品',
    type: AchievementType.ITEMS,
    rarity: AchievementRarity.UNCOMMON,
    icon: '⚡',
    isUnlocked: false,
    progress: 0,
    maxProgress: 4 // Number of tech items
  },

  // Companies Achievements
  {
    id: 'entrepreneur',
    name: '企业家',
    description: '购买你的第一家公司',
    type: AchievementType.COMPANIES,
    rarity: AchievementRarity.COMMON,
    icon: '🏢',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1
  },
  {
    id: 'business_mogul',
    name: '商业大亨',
    description: '拥有所有类型的公司',
    type: AchievementType.COMPANIES,
    rarity: AchievementRarity.RARE,
    icon: '👑',
    isUnlocked: false,
    progress: 0,
    maxProgress: 6 // Number of company types
  },
  {
    id: 'passive_income_master',
    name: '被动收入大师',
    description: '每秒被动收入超过 $1,000,000',
    type: AchievementType.COMPANIES,
    rarity: AchievementRarity.EPIC,
    icon: '💰',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1_000_000
  },

  // Challenge Achievements
  {
    id: 'challenger',
    name: '挑战者',
    description: '完成你的第一个挑战',
    type: AchievementType.CHALLENGES,
    rarity: AchievementRarity.COMMON,
    icon: '🏆',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1
  },
  {
    id: 'speed_demon',
    name: '速度恶魔',
    description: '在 2 分钟内完成速度挑战 I',
    type: AchievementType.CHALLENGES,
    rarity: AchievementRarity.RARE,
    icon: '⚡',
    isUnlocked: false,
    progress: 0,
    maxProgress: 120 // 2 minutes in seconds
  },
  {
    id: 'challenge_master',
    name: '挑战大师',
    description: '完成所有挑战',
    type: AchievementType.CHALLENGES,
    rarity: AchievementRarity.EPIC,
    icon: '🏅',
    isUnlocked: false,
    progress: 0,
    maxProgress: 4 // Number of challenges
  },

  // Time Achievements
  {
    id: 'dedication',
    name: '专注玩家',
    description: '游戏时间超过 1 小时',
    type: AchievementType.TIME,
    rarity: AchievementRarity.COMMON,
    icon: '⏰',
    isUnlocked: false,
    progress: 0,
    maxProgress: 3600 // 1 hour in seconds
  },
  {
    id: 'marathon_player',
    name: '马拉松玩家',
    description: '游戏时间超过 10 小时',
    type: AchievementType.TIME,
    rarity: AchievementRarity.RARE,
    icon: '🏃',
    isUnlocked: false,
    progress: 0,
    maxProgress: 36000 // 10 hours in seconds
  },

  // Special Achievements
  {
    id: 'philanthropist',
    name: '慈善家',
    description: '在慈善方面花费超过 $10,000,000,000',
    type: AchievementType.SPECIAL,
    rarity: AchievementRarity.EPIC,
    icon: '❤️',
    isUnlocked: false,
    progress: 0,
    maxProgress: 10_000_000_000
  },
  {
    id: 'completionist',
    name: '完成主义者',
    description: '花光所有比尔·盖茨的钱',
    type: AchievementType.SPECIAL,
    rarity: AchievementRarity.LEGENDARY,
    icon: '🎉',
    isUnlocked: false,
    progress: 0,
    maxProgress: 128_000_000_000
  },
  {
    id: 'efficient_spender',
    name: '高效消费者',
    description: '在 5 分钟内花费超过 $50,000,000,000',
    type: AchievementType.SPECIAL,
    rarity: AchievementRarity.LEGENDARY,
    icon: '🚀',
    isUnlocked: false,
    progress: 0,
    maxProgress: 300 // 5 minutes
  },
  {
    id: 'real_estate_king',
    name: '房地产之王',
    description: '拥有所有房地产物品',
    type: AchievementType.SPECIAL,
    rarity: AchievementRarity.RARE,
    icon: '🏰',
    isUnlocked: false,
    progress: 0,
    maxProgress: 4 // Number of real estate items
  }
]

// Helper function to get rarity color
export const getRarityColor = (rarity: AchievementRarity): string => {
  switch (rarity) {
    case AchievementRarity.COMMON:
      return 'bg-gray-500'
    case AchievementRarity.UNCOMMON:
      return 'bg-green-500'
    case AchievementRarity.RARE:
      return 'bg-blue-500'
    case AchievementRarity.EPIC:
      return 'bg-purple-500'
    case AchievementRarity.LEGENDARY:
      return 'bg-yellow-500'
    default:
      return 'bg-gray-500'
  }
}

// Helper function to get rarity label
export const getRarityLabel = (rarity: AchievementRarity): string => {
  switch (rarity) {
    case AchievementRarity.COMMON:
      return '普通'
    case AchievementRarity.UNCOMMON:
      return '优秀'
    case AchievementRarity.RARE:
      return '稀有'
    case AchievementRarity.EPIC:
      return '史诗'
    case AchievementRarity.LEGENDARY:
      return '传奇'
    default:
      return '普通'
  }
}