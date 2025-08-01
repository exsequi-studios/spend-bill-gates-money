import { GameItem, Company, Challenge, ItemCategory } from '@/types/game'

// Bill Gates' estimated wealth (as of 2024)
export const BILL_GATES_WEALTH = 134_000_000_000 // $134 billion (Forbes 2024)

// Initial purchasable items categorized
export const INITIAL_ITEMS: GameItem[] = [
  // Daily Essentials & Food
  {
    id: 'apple',
    name: 'Apple',
    basePrice: 1,
    currentPrice: 1,
    category: ItemCategory.FOOD,
    description: 'A fresh red apple',
    owned: 0
  },
  {
    id: 'bread_loaf',
    name: 'Bread Loaf',
    basePrice: 3,
    currentPrice: 3,
    category: ItemCategory.FOOD,
    description: 'A loaf of fresh bread',
    owned: 0
  },
  {
    id: 'milk_gallon',
    name: 'Gallon of Milk',
    basePrice: 4,
    currentPrice: 4,
    category: ItemCategory.FOOD,
    description: 'Fresh whole milk',
    owned: 0
  },
  {
    id: 'eggs_dozen',
    name: 'Dozen Eggs',
    basePrice: 5,
    currentPrice: 5,
    category: ItemCategory.FOOD,
    description: 'A dozen fresh eggs',
    owned: 0
  },
  {
    id: 'coffee_cup',
    name: 'Cup of Coffee',
    basePrice: 5,
    currentPrice: 5,
    category: ItemCategory.FOOD,
    description: 'A hot cup of coffee',
    owned: 0
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    basePrice: 8,
    currentPrice: 8,
    category: ItemCategory.FOOD,
    description: 'A delicious sandwich',
    owned: 0
  },
  {
    id: 'pizza_slice',
    name: 'Pizza Slice',
    basePrice: 4,
    currentPrice: 4,
    category: ItemCategory.FOOD,
    description: 'A slice of pizza',
    owned: 0
  },
  {
    id: 'burger_meal',
    name: 'Burger Meal',
    basePrice: 12,
    currentPrice: 12,
    category: ItemCategory.FOOD,
    description: 'Burger with fries and drink',
    owned: 0
  },
  {
    id: 'grocery_weekly',
    name: 'Weekly Groceries',
    basePrice: 150,
    currentPrice: 150,
    category: ItemCategory.FOOD,
    description: 'A week\'s worth of groceries for a family',
    owned: 0
  },
  {
    id: 'restaurant_dinner',
    name: 'Restaurant Dinner',
    basePrice: 80,
    currentPrice: 80,
    category: ItemCategory.FOOD,
    description: 'Dinner at a nice restaurant',
    owned: 0
  },

  // Transport Category
  {
    id: 'bus_ticket',
    name: 'Bus Ticket',
    basePrice: 3,
    currentPrice: 3,
    category: ItemCategory.TRANSPORT,
    description: 'A single bus ride',
    owned: 0
  },
  {
    id: 'subway_ticket',
    name: 'Subway Ticket',
    basePrice: 3,
    currentPrice: 3,
    category: ItemCategory.TRANSPORT,
    description: 'A subway train ride',
    owned: 0
  },
  {
    id: 'taxi_ride',
    name: 'Taxi Ride',
    basePrice: 15,
    currentPrice: 15,
    category: ItemCategory.TRANSPORT,
    description: 'A short taxi ride across town',
    owned: 0
  },
  {
    id: 'uber_ride',
    name: 'Uber Ride',
    basePrice: 12,
    currentPrice: 12,
    category: ItemCategory.TRANSPORT,
    description: 'A convenient rideshare trip',
    owned: 0
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    basePrice: 300,
    currentPrice: 300,
    category: ItemCategory.TRANSPORT,
    description: 'A basic bicycle for daily commuting',
    owned: 0
  },
  {
    id: 'electric_scooter',
    name: 'Electric Scooter',
    basePrice: 500,
    currentPrice: 500,
    category: ItemCategory.TRANSPORT,
    description: 'An electric scooter for short trips',
    owned: 0
  },
  {
    id: 'motorcycle',
    name: 'Harley Davidson',
    basePrice: 20_000,
    currentPrice: 20_000,
    category: ItemCategory.TRANSPORT,
    description: 'A classic Harley Davidson motorcycle',
    owned: 0
  },
  {
    id: 'new_car',
    name: 'BMW Sedan',
    basePrice: 55_000,
    currentPrice: 55_000,
    category: ItemCategory.TRANSPORT,
    description: 'A luxury German sedan with premium features',
    owned: 0
  },
  {
    id: 'tesla_model_s',
    name: 'Tesla Model S',
    basePrice: 95_000,
    currentPrice: 95_000,
    category: ItemCategory.TRANSPORT,
    description: 'A luxury electric sedan from Tesla',
    owned: 0
  },
  {
    id: 'sports_car',
    name: 'Porsche 911',
    basePrice: 120_000,
    currentPrice: 120_000,
    category: ItemCategory.TRANSPORT,
    description: 'A classic German sports car',
    owned: 0
  },
  {
    id: 'ferrari',
    name: 'Ferrari F8 Tributo',
    basePrice: 280_000,
    currentPrice: 280_000,
    category: ItemCategory.TRANSPORT,
    description: 'An Italian supercar with incredible performance',
    owned: 0
  },
  {
    id: 'helicopter',
    name: 'Private Helicopter',
    basePrice: 2_500_000,
    currentPrice: 2_500_000,
    category: ItemCategory.TRANSPORT,
    description: 'Skip traffic with your own helicopter',
    owned: 0
  },
  {
    id: 'private_jet',
    name: 'Private Jet',
    basePrice: 50_000_000,
    currentPrice: 50_000_000,
    category: ItemCategory.TRANSPORT,
    description: 'Your own private jet for ultimate travel luxury',
    owned: 0
  },
  {
    id: 'mega_yacht',
    name: 'Mega Yacht',
    basePrice: 200_000_000,
    currentPrice: 200_000_000,
    category: ItemCategory.TRANSPORT,
    description: 'A massive luxury yacht with full crew',
    owned: 0
  },

  // Household & Personal Items
  {
    id: 'toothbrush',
    name: 'Toothbrush',
    basePrice: 5,
    currentPrice: 5,
    category: ItemCategory.TECHNOLOGY,
    description: 'A basic toothbrush for dental hygiene',
    owned: 0
  },
  {
    id: 'towel',
    name: 'Towel',
    basePrice: 15,
    currentPrice: 15,
    category: ItemCategory.TECHNOLOGY,
    description: 'A soft bath towel',
    owned: 0
  },
  {
    id: 'pillow',
    name: 'Pillow',
    basePrice: 25,
    currentPrice: 25,
    category: ItemCategory.TECHNOLOGY,
    description: 'A comfortable sleeping pillow',
    owned: 0
  },
  {
    id: 'bed_sheets',
    name: 'Bed Sheets Set',
    basePrice: 50,
    currentPrice: 50,
    category: ItemCategory.TECHNOLOGY,
    description: 'A comfortable bed sheet set',
    owned: 0
  },
  {
    id: 'table_lamp',
    name: 'Table Lamp',
    basePrice: 40,
    currentPrice: 40,
    category: ItemCategory.TECHNOLOGY,
    description: 'A simple desk lamp for reading',
    owned: 0
  },
  {
    id: 'coffee_maker',
    name: 'Coffee Maker',
    basePrice: 80,
    currentPrice: 80,
    category: ItemCategory.TECHNOLOGY,
    description: 'A basic coffee maker for home use',
    owned: 0
  },
  {
    id: 'microwave',
    name: 'Microwave Oven',
    basePrice: 120,
    currentPrice: 120,
    category: ItemCategory.TECHNOLOGY,
    description: 'A microwave oven for quick heating',
    owned: 0
  },
  {
    id: 'earbuds',
    name: 'Wireless Earbuds',
    basePrice: 200,
    currentPrice: 200,
    category: ItemCategory.TECHNOLOGY,
    description: 'High-quality wireless earbuds with noise cancellation',
    owned: 0
  },
  {
    id: 'tablet',
    name: 'iPad Pro',
    basePrice: 600,
    currentPrice: 600,
    category: ItemCategory.TECHNOLOGY,
    description: 'Professional tablet for work and creativity',
    owned: 0
  },
  {
    id: 'laptop',
    name: 'MacBook Pro (Fully Configured)',
    basePrice: 7_000,
    currentPrice: 7_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'Top-spec MacBook Pro with maximum RAM and storage',
    owned: 0
  },
  {
    id: 'smartphone',
    name: 'iPhone 15 Pro',
    basePrice: 1_200,
    currentPrice: 1_200,
    category: ItemCategory.TECHNOLOGY,
    description: 'The latest iPhone with advanced features',
    owned: 0
  },
  {
    id: 'smart_watch',
    name: 'Apple Watch Ultra',
    basePrice: 800,
    currentPrice: 800,
    category: ItemCategory.TECHNOLOGY,
    description: 'Advanced smartwatch with health monitoring',
    owned: 0
  },
  {
    id: 'vr_headset',
    name: 'VR Headset Setup',
    basePrice: 2_000,
    currentPrice: 2_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'Complete VR gaming and entertainment setup',
    owned: 0
  },
  {
    id: 'gaming_console',
    name: 'PlayStation 5 Pro',
    basePrice: 700,
    currentPrice: 700,
    category: ItemCategory.TECHNOLOGY,
    description: 'Next-generation gaming console',
    owned: 0
  },
  {
    id: 'gaming_pc',
    name: 'High-End Gaming PC',
    basePrice: 5_000,
    currentPrice: 5_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'A powerful gaming computer with top-tier specs',
    owned: 0
  },
  {
    id: 'smart_tv',
    name: '85" OLED Smart TV',
    basePrice: 3_500,
    currentPrice: 3_500,
    category: ItemCategory.TECHNOLOGY,
    description: 'Ultra-large OLED TV with smart features',
    owned: 0
  },
  {
    id: 'home_theater',
    name: 'Home Theater System',
    basePrice: 25_000,
    currentPrice: 25_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'Professional-grade home cinema experience',
    owned: 0
  },
  {
    id: 'server_rack',
    name: 'Personal Server Rack',
    basePrice: 50_000,
    currentPrice: 50_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'Professional server setup for data storage',
    owned: 0
  },


  // Real Estate Category
  {
    id: 'parking_space',
    name: 'Downtown Parking Space',
    basePrice: 50_000,
    currentPrice: 50_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A premium parking space in downtown',
    owned: 0
  },
  {
    id: 'tiny_house',
    name: 'Tiny House',
    basePrice: 100_000,
    currentPrice: 100_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A small but efficient tiny house',
    owned: 0
  },
  {
    id: 'studio_apartment',
    name: 'Studio Apartment',
    basePrice: 200_000,
    currentPrice: 200_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A cozy downtown studio apartment',
    owned: 0
  },
  {
    id: 'suburban_home',
    name: 'Suburban House',
    basePrice: 500_000,
    currentPrice: 500_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A comfortable family home in the suburbs',
    owned: 0
  },
  {
    id: 'beach_house',
    name: 'Beach House',
    basePrice: 1_200_000,
    currentPrice: 1_200_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A beautiful house right by the beach',
    owned: 0
  },
  {
    id: 'city_condo',
    name: 'Luxury City Condo',
    basePrice: 2_000_000,
    currentPrice: 2_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'High-rise condo with panoramic city views',
    owned: 0
  },
  {
    id: 'luxury_penthouse',
    name: 'Luxury Penthouse',
    basePrice: 5_000_000,
    currentPrice: 5_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A stunning penthouse with city views',
    owned: 0
  },
  {
    id: 'mountain_cabin',
    name: 'Mountain Resort Cabin',
    basePrice: 8_000_000,
    currentPrice: 8_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'Exclusive cabin in a luxury mountain resort',
    owned: 0
  },
  {
    id: 'historic_mansion',
    name: 'Historic Mansion',
    basePrice: 25_000_000,
    currentPrice: 25_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A beautifully restored historic mansion',
    owned: 0
  },


  // Luxury Category
  {
    id: 'designer_handbag',
    name: 'Designer Handbag',
    basePrice: 3_000,
    currentPrice: 3_000,
    category: ItemCategory.LUXURY,
    description: 'A limited edition luxury handbag',
    owned: 0
  },
  {
    id: 'gold_jewelry',
    name: 'Gold Jewelry Set',
    basePrice: 8_000,
    currentPrice: 8_000,
    category: ItemCategory.LUXURY,
    description: 'Exquisite gold jewelry with precious gems',
    owned: 0
  },
  {
    id: 'rolex_watch',
    name: 'Rolex Submariner',
    basePrice: 15_000,
    currentPrice: 15_000,
    category: ItemCategory.LUXURY,
    description: 'A prestigious Swiss luxury watch',
    owned: 0
  },
  {
    id: 'luxury_suit',
    name: 'Bespoke Italian Suit',
    basePrice: 25_000,
    currentPrice: 25_000,
    category: ItemCategory.LUXURY,
    description: 'Hand-tailored suit from Milan\'s finest',
    owned: 0
  },
  {
    id: 'diamond_ring',
    name: 'Diamond Ring',
    basePrice: 50_000,
    currentPrice: 50_000,
    category: ItemCategory.LUXURY,
    description: 'A beautiful diamond engagement ring',
    owned: 0
  },
  {
    id: 'rare_wine_collection',
    name: 'Rare Wine Collection',
    basePrice: 200_000,
    currentPrice: 200_000,
    category: ItemCategory.LUXURY,
    description: 'Collection of vintage wines from legendary years',
    owned: 0
  },
  {
    id: 'antique_furniture',
    name: 'Antique Furniture Set',
    basePrice: 500_000,
    currentPrice: 500_000,
    category: ItemCategory.LUXURY,
    description: 'Authentic antique furniture from European palaces',
    owned: 0
  },
  {
    id: 'sports_car_collection',
    name: 'Classic Car Collection',
    basePrice: 5_000_000,
    currentPrice: 5_000_000,
    category: ItemCategory.LUXURY,
    description: 'Collection of vintage and exotic sports cars',
    owned: 0
  },
  {
    id: 'yacht',
    name: 'Luxury Yacht',
    basePrice: 10_000_000,
    currentPrice: 10_000_000,
    category: ItemCategory.LUXURY,
    description: 'A magnificent yacht for ocean adventures',
    owned: 0
  },
  {
    id: 'private_jet_luxury',
    name: 'Custom Private Jet',
    basePrice: 100_000_000,
    currentPrice: 100_000_000,
    category: ItemCategory.LUXURY,
    description: 'Fully customized luxury private jet',
    owned: 0
  },
  {
    id: 'art_collection',
    name: 'Famous Art Collection',
    basePrice: 500_000_000,
    currentPrice: 500_000_000,
    category: ItemCategory.LUXURY,
    description: 'A collection of world-renowned artworks',
    owned: 0
  },
  {
    id: 'space_tourism',
    name: 'Space Tourism Package',
    basePrice: 1_000_000_000,
    currentPrice: 1_000_000_000,
    category: ItemCategory.LUXURY,
    description: 'Ultimate luxury experience: a trip to space',
    owned: 0
  },

  // Large Purchases & Services
  {
    id: 'gym_membership',
    name: 'Annual Gym Membership',
    basePrice: 600,
    currentPrice: 600,
    category: ItemCategory.BUSINESS,
    description: 'A yearly membership to a fitness center',
    owned: 0
  },
  {
    id: 'house_cleaning',
    name: 'House Cleaning Service',
    basePrice: 150,
    currentPrice: 150,
    category: ItemCategory.BUSINESS,
    description: 'Professional house cleaning service',
    owned: 0
  },
  {
    id: 'lawn_service',
    name: 'Lawn Care Service',
    basePrice: 80,
    currentPrice: 80,
    category: ItemCategory.BUSINESS,
    description: 'Professional lawn mowing and maintenance',
    owned: 0
  },
  {
    id: 'pool_cleaning',
    name: 'Pool Cleaning Service',
    basePrice: 100,
    currentPrice: 100,
    category: ItemCategory.BUSINESS,
    description: 'Weekly pool cleaning and maintenance',
    owned: 0
  },
  {
    id: 'personal_trainer',
    name: 'Personal Trainer (Monthly)',
    basePrice: 800,
    currentPrice: 800,
    category: ItemCategory.BUSINESS,
    description: 'Monthly personal training sessions',
    owned: 0
  },
  {
    id: 'interior_designer',
    name: 'Interior Design Service',
    basePrice: 5_000,
    currentPrice: 5_000,
    category: ItemCategory.BUSINESS,
    description: 'Professional interior design for your home',
    owned: 0
  },
  {
    id: 'wedding_planner',
    name: 'Wedding Planning Service',
    basePrice: 8_000,
    currentPrice: 8_000,
    category: ItemCategory.BUSINESS,
    description: 'Complete wedding planning and coordination',
    owned: 0
  },
  {
    id: 'private_chef',
    name: 'Private Chef (Monthly)',
    basePrice: 12_000,
    currentPrice: 12_000,
    category: ItemCategory.BUSINESS,
    description: 'Personal chef service for a month',
    owned: 0
  },
  {
    id: 'security_service',
    name: 'Home Security System',
    basePrice: 3_000,
    currentPrice: 3_000,
    category: ItemCategory.BUSINESS,
    description: 'Complete home security system installation',
    owned: 0
  },
  {
    id: 'spa_package',
    name: 'Luxury Spa Package',
    basePrice: 2_000,
    currentPrice: 2_000,
    category: ItemCategory.BUSINESS,
    description: 'Weekend luxury spa experience',
    owned: 0
  },


]

// Companies based on Bill Gates' real investment portfolio - Player starts with these companies
export const INITIAL_COMPANIES: Company[] = [
  {
    id: 'microsoft',
    name: 'Microsoft Corporation',
    basePrice: 3_000_000_000_000, // $3T market cap
    currentPrice: 3_000_000_000_000,
    baseIncomePerSecond: 80, // Realistic Gates income from Microsoft holdings
    currentIncomePerSecond: 80,
    owned: 1, // Gates still holds significant Microsoft stake
    description: 'The technology giant Bill Gates co-founded, leading in cloud computing and software',
    upgradeMultiplier: 1.08
  },
  {
    id: 'berkshire_hathaway',
    name: 'Berkshire Hathaway',
    basePrice: 900_000_000_000, // $900B market cap
    currentPrice: 900_000_000_000,
    baseIncomePerSecond: 25, // Realistic Gates income from Berkshire investment
    currentIncomePerSecond: 25,
    owned: 1,
    description: 'Warren Buffett\'s investment conglomerate, a major holding in Gates\' portfolio',
    upgradeMultiplier: 1.06
  },
  {
    id: 'canadian_national_railway',
    name: 'Canadian National Railway',
    basePrice: 85_000_000_000,
    currentPrice: 85_000_000_000,
    baseIncomePerSecond: 12,
    currentIncomePerSecond: 12,
    owned: 2, // Gates Foundation holds significant stakes
    description: 'North America\'s largest railway network, a key infrastructure investment',
    upgradeMultiplier: 1.04
  },
  {
    id: 'waste_management',
    name: 'Waste Management Inc.',
    basePrice: 70_000_000_000,
    currentPrice: 70_000_000_000,
    baseIncomePerSecond: 8,
    currentIncomePerSecond: 8,
    owned: 1,
    description: 'Leading waste collection and environmental services company',
    upgradeMultiplier: 1.05
  },
  {
    id: 'caterpillar',
    name: 'Caterpillar Inc.',
    basePrice: 150_000_000_000,
    currentPrice: 150_000_000_000,
    baseIncomePerSecond: 15,
    currentIncomePerSecond: 15,
    owned: 1,
    description: 'World\'s leading manufacturer of construction and mining equipment',
    upgradeMultiplier: 1.05
  },
  {
    id: 'walmart',
    name: 'Walmart Inc.',
    basePrice: 600_000_000_000,
    currentPrice: 600_000_000_000,
    baseIncomePerSecond: 10, // Realistic return from Walmart holdings
    currentIncomePerSecond: 10,
    owned: 1,
    description: 'World\'s largest retailer by revenue and number of employees',
    upgradeMultiplier: 1.04
  },
  {
    id: 'ups',
    name: 'United Parcel Service',
    basePrice: 120_000_000_000,
    currentPrice: 120_000_000_000,
    baseIncomePerSecond: 4,
    currentIncomePerSecond: 4,
    owned: 1,
    description: 'Global leader in logistics and package delivery services',
    upgradeMultiplier: 1.04
  },
  {
    id: 'fedex',
    name: 'FedEx Corporation',
    basePrice: 65_000_000_000,
    currentPrice: 65_000_000_000,
    baseIncomePerSecond: 3,
    currentIncomePerSecond: 3,
    owned: 1,
    description: 'Major American multinational delivery services company',
    upgradeMultiplier: 1.04
  },
  {
    id: 'ecolab',
    name: 'Ecolab Inc.',
    basePrice: 60_000_000_000,
    currentPrice: 60_000_000_000,
    baseIncomePerSecond: 2,
    currentIncomePerSecond: 2,
    owned: 1,
    description: 'Global leader in water, hygiene and infection prevention solutions',
    upgradeMultiplier: 1.05
  }
]

// Challenge definitions
export const INITIAL_CHALLENGES: Challenge[] = [
  {
    id: 'speed_spender_1',
    name: 'Speed Spender I',
    description: 'Spend $10 billion in under 5 minutes',
    targetTime: 300, // 5 minutes
    startTime: null,
    endTime: null,
    completed: false,
    bestTime: null
  },
  {
    id: 'speed_spender_2',
    name: 'Speed Spender II',
    description: 'Spend $50 billion in under 10 minutes',
    targetTime: 600, // 10 minutes
    startTime: null,
    endTime: null,
    completed: false,
    bestTime: null
  },
  {
    id: 'ultimate_challenge',
    name: 'Ultimate Spender',
    description: 'Spend all of Bill Gates\' money in under 30 minutes',
    targetTime: 1800, // 30 minutes
    startTime: null,
    endTime: null,
    completed: false,
    bestTime: null
  },
  {
    id: 'charity_focus',
    name: 'Philanthropist',
    description: 'Spend $10 billion on charity items only',
    targetTime: Infinity, // No time limit
    startTime: null,
    endTime: null,
    completed: false,
    bestTime: null
  }
]

// Utility function to format large numbers
export const formatMoney = (amount: number): string => {
  if (amount >= 1_000_000_000_000) {
    return `$${(amount / 1_000_000_000_000).toFixed(1)}T`
  } else if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1)}B`
  } else if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`
  } else if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}K`
  } else {
    return `$${amount.toFixed(0)}`
  }
}

// Utility function to format time
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`
  } else {
    return `${secs}s`
  }
}