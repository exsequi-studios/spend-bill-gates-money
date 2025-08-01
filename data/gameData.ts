import { GameItem, Company, Challenge, ItemCategory } from '@/types/game'

// Bill Gates' estimated wealth (as of 2024)
export const BILL_GATES_WEALTH = 128_000_000_000 // $128 billion

// Initial purchasable items categorized
export const INITIAL_ITEMS: GameItem[] = [
  // Food Category
  {
    id: 'hamburger',
    name: 'McDonald\'s Hamburger',
    basePrice: 2,
    currentPrice: 2,
    category: ItemCategory.FOOD,
    description: 'A classic McDonald\'s hamburger',
    owned: 0
  },
  {
    id: 'coffee',
    name: 'Starbucks Coffee',
    basePrice: 5,
    currentPrice: 5,
    category: ItemCategory.FOOD,
    description: 'Premium coffee from Starbucks',
    owned: 0
  },
  {
    id: 'donuts',
    name: 'Box of Donuts',
    basePrice: 12,
    currentPrice: 12,
    category: ItemCategory.FOOD,
    description: 'A dozen fresh donuts from the bakery',
    owned: 0
  },
  {
    id: 'pizza',
    name: 'Large Pizza',
    basePrice: 20,
    currentPrice: 20,
    category: ItemCategory.FOOD,
    description: 'A delicious large pizza for the whole family',
    owned: 0
  },
  {
    id: 'sushi_set',
    name: 'Sushi Set',
    basePrice: 45,
    currentPrice: 45,
    category: ItemCategory.FOOD,
    description: 'Fresh sushi set with premium fish',
    owned: 0
  },
  {
    id: 'wine_bottle',
    name: 'Fine Wine Bottle',
    basePrice: 150,
    currentPrice: 150,
    category: ItemCategory.FOOD,
    description: 'A bottle of premium wine from France',
    owned: 0
  },
  {
    id: 'steak_dinner',
    name: 'Fancy Steak Dinner',
    basePrice: 200,
    currentPrice: 200,
    category: ItemCategory.FOOD,
    description: 'A premium steak dinner at a high-end restaurant',
    owned: 0
  },
  {
    id: 'michelin_meal',
    name: 'Michelin Star Meal',
    basePrice: 500,
    currentPrice: 500,
    category: ItemCategory.FOOD,
    description: 'An exquisite meal at a Michelin-starred restaurant',
    owned: 0
  },
  {
    id: 'truffle_dinner',
    name: 'Truffle Tasting Menu',
    basePrice: 1_500,
    currentPrice: 1_500,
    category: ItemCategory.FOOD,
    description: 'A luxurious tasting menu featuring rare truffles',
    owned: 0
  },
  {
    id: 'caviar_service',
    name: 'Premium Caviar Service',
    basePrice: 3_000,
    currentPrice: 3_000,
    category: ItemCategory.FOOD,
    description: 'The finest caviar served with champagne',
    owned: 0
  },

  // Transport Category
  {
    id: 'bus_ticket',
    name: 'Bus Ticket',
    basePrice: 3,
    currentPrice: 3,
    category: ItemCategory.TRANSPORT,
    description: 'A single bus ride across the city',
    owned: 0
  },
  {
    id: 'subway_pass',
    name: 'Monthly Subway Pass',
    basePrice: 120,
    currentPrice: 120,
    category: ItemCategory.TRANSPORT,
    description: 'Unlimited public transportation for a month',
    owned: 0
  },
  {
    id: 'scooter',
    name: 'Electric Scooter',
    basePrice: 400,
    currentPrice: 400,
    category: ItemCategory.TRANSPORT,
    description: 'A convenient electric scooter for short trips',
    owned: 0
  },
  {
    id: 'bicycle',
    name: 'Mountain Bike',
    basePrice: 500,
    currentPrice: 500,
    category: ItemCategory.TRANSPORT,
    description: 'A high-quality mountain bike',
    owned: 0
  },
  {
    id: 'uber_ride',
    name: 'Uber Premium Ride',
    basePrice: 800,
    currentPrice: 800,
    category: ItemCategory.TRANSPORT,
    description: 'A long-distance premium Uber ride',
    owned: 0
  },
  {
    id: 'used_car',
    name: 'Used Honda Civic',
    basePrice: 15_000,
    currentPrice: 15_000,
    category: ItemCategory.TRANSPORT,
    description: 'A reliable used car for daily commuting',
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

  // Technology Category
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
    name: 'MacBook Pro',
    basePrice: 2_500,
    currentPrice: 2_500,
    category: ItemCategory.TECHNOLOGY,
    description: 'High-performance laptop for professionals',
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
  {
    id: 'quantum_computer',
    name: 'Quantum Computer Access',
    basePrice: 10_000_000,
    currentPrice: 10_000_000,
    category: ItemCategory.TECHNOLOGY,
    description: 'Access to quantum computing resources',
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
  {
    id: 'private_island',
    name: 'Private Island',
    basePrice: 100_000_000,
    currentPrice: 100_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'Your own private tropical island paradise',
    owned: 0
  },
  {
    id: 'skyscraper',
    name: 'Commercial Skyscraper',
    basePrice: 500_000_000,
    currentPrice: 500_000_000,
    category: ItemCategory.REAL_ESTATE,
    description: 'A massive skyscraper in financial district',
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

  // Business Category
  {
    id: 'food_truck_business',
    name: 'Food Truck Business',
    basePrice: 100_000,
    currentPrice: 100_000,
    category: ItemCategory.BUSINESS,
    description: 'Start your own mobile food business',
    owned: 0
  },
  {
    id: 'coffee_shop',
    name: 'Coffee Shop',
    basePrice: 300_000,
    currentPrice: 300_000,
    category: ItemCategory.BUSINESS,
    description: 'A cozy neighborhood coffee shop',
    owned: 0
  },
  {
    id: 'retail_store',
    name: 'Boutique Retail Store',
    basePrice: 500_000,
    currentPrice: 500_000,
    category: ItemCategory.BUSINESS,
    description: 'A trendy boutique in a prime location',
    owned: 0
  },
  {
    id: 'fitness_center',
    name: 'Fitness Center',
    basePrice: 1_000_000,
    currentPrice: 1_000_000,
    category: ItemCategory.BUSINESS,
    description: 'A modern fitness center with all equipment',
    owned: 0
  },
  {
    id: 'restaurant',
    name: 'Fine Dining Restaurant',
    basePrice: 2_000_000,
    currentPrice: 2_000_000,
    category: ItemCategory.BUSINESS,
    description: 'An upscale restaurant with expert chefs',
    owned: 0
  },
  {
    id: 'hotel',
    name: 'Boutique Hotel',
    basePrice: 10_000_000,
    currentPrice: 10_000_000,
    category: ItemCategory.BUSINESS,
    description: 'A luxury boutique hotel in the city center',
    owned: 0
  },
  {
    id: 'tech_startup',
    name: 'Tech Startup',
    basePrice: 50_000_000,
    currentPrice: 50_000_000,
    category: ItemCategory.BUSINESS,
    description: 'Invest in a promising technology startup',
    owned: 0
  },
  {
    id: 'manufacturing_plant',
    name: 'Manufacturing Plant',
    basePrice: 200_000_000,
    currentPrice: 200_000_000,
    category: ItemCategory.BUSINESS,
    description: 'A state-of-the-art manufacturing facility',
    owned: 0
  },
  {
    id: 'airline',
    name: 'Regional Airline',
    basePrice: 500_000_000,
    currentPrice: 500_000_000,
    category: ItemCategory.BUSINESS,
    description: 'Your own regional airline company',
    owned: 0
  },
  {
    id: 'movie_studio',
    name: 'Movie Studio',
    basePrice: 1_000_000_000,
    currentPrice: 1_000_000_000,
    category: ItemCategory.BUSINESS,
    description: 'Your own Hollywood movie production studio',
    owned: 0
  },
  {
    id: 'social_media_platform',
    name: 'Social Media Platform',
    basePrice: 5_000_000_000,
    currentPrice: 5_000_000_000,
    category: ItemCategory.BUSINESS,
    description: 'Build and own a global social media platform',
    owned: 0
  },

  // Charity Category
  {
    id: 'food_bank_donation',
    name: 'Food Bank Donation',
    basePrice: 5_000,
    currentPrice: 5_000,
    category: ItemCategory.CHARITY,
    description: 'Donate meals to local food banks',
    owned: 0
  },
  {
    id: 'homeless_shelter',
    name: 'Homeless Shelter Support',
    basePrice: 25_000,
    currentPrice: 25_000,
    category: ItemCategory.CHARITY,
    description: 'Support homeless shelters in your community',
    owned: 0
  },
  {
    id: 'animal_shelter',
    name: 'Animal Shelter Donation',
    basePrice: 50_000,
    currentPrice: 50_000,
    category: ItemCategory.CHARITY,
    description: 'Help abandoned animals find loving homes',
    owned: 0
  },
  {
    id: 'school_donation',
    name: 'School Donation',
    basePrice: 100_000,
    currentPrice: 100_000,
    category: ItemCategory.CHARITY,
    description: 'Donate to improve education for children',
    owned: 0
  },
  {
    id: 'clean_water',
    name: 'Clean Water Project',
    basePrice: 500_000,
    currentPrice: 500_000,
    category: ItemCategory.CHARITY,
    description: 'Provide clean water access to communities in need',
    owned: 0
  },
  {
    id: 'scholarship_fund',
    name: 'Scholarship Fund',
    basePrice: 1_000_000,
    currentPrice: 1_000_000,
    category: ItemCategory.CHARITY,
    description: 'Create scholarships for underprivileged students',
    owned: 0
  },
  {
    id: 'disaster_relief',
    name: 'Disaster Relief Fund',
    basePrice: 5_000_000,
    currentPrice: 5_000_000,
    category: ItemCategory.CHARITY,
    description: 'Support communities affected by natural disasters',
    owned: 0
  },
  {
    id: 'hospital_wing',
    name: 'Hospital Wing',
    basePrice: 10_000_000,
    currentPrice: 10_000_000,
    category: ItemCategory.CHARITY,
    description: 'Fund a new wing for a local hospital',
    owned: 0
  },
  {
    id: 'arts_education',
    name: 'Arts Education Program',
    basePrice: 25_000_000,
    currentPrice: 25_000_000,
    category: ItemCategory.CHARITY,
    description: 'Support arts education in schools nationwide',
    owned: 0
  },
  {
    id: 'renewable_energy',
    name: 'Renewable Energy Project',
    basePrice: 75_000_000,
    currentPrice: 75_000_000,
    category: ItemCategory.CHARITY,
    description: 'Fund sustainable energy projects for communities',
    owned: 0
  },
  {
    id: 'climate_research',
    name: 'Climate Research Fund',
    basePrice: 100_000_000,
    currentPrice: 100_000_000,
    category: ItemCategory.CHARITY,
    description: 'Support critical climate change research',
    owned: 0
  },
  {
    id: 'wildlife_conservation',
    name: 'Wildlife Conservation',
    basePrice: 250_000_000,
    currentPrice: 250_000_000,
    category: ItemCategory.CHARITY,
    description: 'Protect endangered species and their habitats',
    owned: 0
  },
  {
    id: 'global_health',
    name: 'Global Health Initiative',
    basePrice: 1_000_000_000,
    currentPrice: 1_000_000_000,
    category: ItemCategory.CHARITY,
    description: 'Fund global health programs like the Gates Foundation',
    owned: 0
  },
  {
    id: 'poverty_eradication',
    name: 'Global Poverty Eradication',
    basePrice: 5_000_000_000,
    currentPrice: 5_000_000_000,
    category: ItemCategory.CHARITY,
    description: 'Comprehensive program to end poverty worldwide',
    owned: 0
  },
  {
    id: 'space_exploration',
    name: 'Space Exploration Fund',
    basePrice: 25_000_000_000,
    currentPrice: 25_000_000_000,
    category: ItemCategory.CHARITY,
    description: 'Advance human space exploration for the benefit of all',
    owned: 0
  }
]

// Companies based on Bill Gates' real investment portfolio - Player starts with these companies
export const INITIAL_COMPANIES: Company[] = [
  {
    id: 'microsoft',
    name: 'Microsoft Corporation',
    basePrice: 3_000_000_000_000, // $3T market cap
    currentPrice: 3_000_000_000_000,
    baseIncomePerSecond: 2_000_000, // $63B annual revenue / 31.5M seconds
    currentIncomePerSecond: 2_000_000,
    owned: 1, // Gates still holds significant Microsoft stake
    description: 'The technology giant Bill Gates co-founded, leading in cloud computing and software',
    upgradeMultiplier: 1.08
  },
  {
    id: 'berkshire_hathaway',
    name: 'Berkshire Hathaway',
    basePrice: 900_000_000_000, // $900B market cap
    currentPrice: 900_000_000_000,
    baseIncomePerSecond: 900_000, // Warren Buffett company Gates invests in
    currentIncomePerSecond: 900_000,
    owned: 1,
    description: 'Warren Buffett\'s investment conglomerate, a major holding in Gates\' portfolio',
    upgradeMultiplier: 1.06
  },
  {
    id: 'canadian_national_railway',
    name: 'Canadian National Railway',
    basePrice: 85_000_000_000,
    currentPrice: 85_000_000_000,
    baseIncomePerSecond: 450_000,
    currentIncomePerSecond: 450_000,
    owned: 2, // Gates Foundation holds significant stakes
    description: 'North America\'s largest railway network, a key infrastructure investment',
    upgradeMultiplier: 1.04
  },
  {
    id: 'waste_management',
    name: 'Waste Management Inc.',
    basePrice: 70_000_000_000,
    currentPrice: 70_000_000_000,
    baseIncomePerSecond: 380_000,
    currentIncomePerSecond: 380_000,
    owned: 1,
    description: 'Leading waste collection and environmental services company',
    upgradeMultiplier: 1.05
  },
  {
    id: 'caterpillar',
    name: 'Caterpillar Inc.',
    basePrice: 150_000_000_000,
    currentPrice: 150_000_000_000,
    baseIncomePerSecond: 720_000,
    currentIncomePerSecond: 720_000,
    owned: 1,
    description: 'World\'s leading manufacturer of construction and mining equipment',
    upgradeMultiplier: 1.05
  },
  {
    id: 'walmart',
    name: 'Walmart Inc.',
    basePrice: 600_000_000_000,
    currentPrice: 600_000_000_000,
    baseIncomePerSecond: 1_800_000, // $572B annual revenue
    currentIncomePerSecond: 1_800_000,
    owned: 1,
    description: 'World\'s largest retailer by revenue and number of employees',
    upgradeMultiplier: 1.04
  },
  {
    id: 'ups',
    name: 'United Parcel Service',
    basePrice: 120_000_000_000,
    currentPrice: 120_000_000_000,
    baseIncomePerSecond: 350_000,
    currentIncomePerSecond: 350_000,
    owned: 1,
    description: 'Global leader in logistics and package delivery services',
    upgradeMultiplier: 1.04
  },
  {
    id: 'fedex',
    name: 'FedEx Corporation',
    basePrice: 65_000_000_000,
    currentPrice: 65_000_000_000,
    baseIncomePerSecond: 280_000,
    currentIncomePerSecond: 280_000,
    owned: 1,
    description: 'Major American multinational delivery services company',
    upgradeMultiplier: 1.04
  },
  {
    id: 'ecolab',
    name: 'Ecolab Inc.',
    basePrice: 60_000_000_000,
    currentPrice: 60_000_000_000,
    baseIncomePerSecond: 250_000,
    currentIncomePerSecond: 250_000,
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