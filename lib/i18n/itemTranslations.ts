import { Language } from '@/types/i18n'

// Translation mapping for game items
export interface ItemTranslation {
  name: string
  description: string
}

export const itemTranslations: Record<string, Record<Language, ItemTranslation>> = {
  // Food Category Items
  hamburger: {
    en: { name: 'McDonald\'s Hamburger', description: 'A classic McDonald\'s hamburger' },
    zh: { name: '麦当劳汉堡', description: '经典的麦当劳汉堡' }
  },
  coffee: {
    en: { name: 'Starbucks Coffee', description: 'Premium coffee from Starbucks' },
    zh: { name: '星巴克咖啡', description: '来自星巴克的优质咖啡' }
  },
  donuts: {
    en: { name: 'Box of Donuts', description: 'A dozen fresh donuts from the bakery' },
    zh: { name: '甜甜圈盒子', description: '来自面包店的一打新鲜甜甜圈' }
  },
  pizza: {
    en: { name: 'Large Pizza', description: 'A delicious large pizza for the whole family' },
    zh: { name: '大披萨', description: '适合全家享用的美味大披萨' }
  },
  sushi_set: {
    en: { name: 'Sushi Set', description: 'Fresh sushi set with premium fish' },
    zh: { name: '寿司套餐', description: '使用优质鱼类制作的新鲜寿司套餐' }
  },
  wine_bottle: {
    en: { name: 'Fine Wine Bottle', description: 'A bottle of premium wine from France' },
    zh: { name: '精品红酒', description: '来自法国的优质红酒' }
  },
  steak_dinner: {
    en: { name: 'Fancy Steak Dinner', description: 'A premium steak dinner at a high-end restaurant' },
    zh: { name: '高档牛排晚餐', description: '在高端餐厅享用的优质牛排晚餐' }
  },
  michelin_meal: {
    en: { name: 'Michelin Star Meal', description: 'An exquisite meal at a Michelin-starred restaurant' },
    zh: { name: '米其林星级餐厅', description: '在米其林星级餐厅享用的精致美食' }
  },
  truffle_dinner: {
    en: { name: 'Truffle Tasting Menu', description: 'A luxurious tasting menu featuring rare truffles' },
    zh: { name: '松露品鉴菜单', description: '以珍贵松露为特色的奢华品鉴菜单' }
  },
  caviar_service: {
    en: { name: 'Premium Caviar Service', description: 'The finest caviar served with champagne' },
    zh: { name: '顶级鱼子酱服务', description: '配香槟的顶级鱼子酱服务' }
  },

  // Transport Category Items
  bus_ticket: {
    en: { name: 'Bus Ticket', description: 'A single bus ride across the city' },
    zh: { name: '公交车票', description: '城市内单次公交车乘坐' }
  },
  subway_pass: {
    en: { name: 'Monthly Subway Pass', description: 'Unlimited public transportation for a month' },
    zh: { name: '地铁月票', description: '一个月无限次公共交通出行' }
  },
  scooter: {
    en: { name: 'Electric Scooter', description: 'A convenient electric scooter for short trips' },
    zh: { name: '电动滑板车', description: '适合短途出行的便捷电动滑板车' }
  },
  bicycle: {
    en: { name: 'Mountain Bike', description: 'A high-quality mountain bike' },
    zh: { name: '山地自行车', description: '高品质的山地自行车' }
  },
  uber_ride: {
    en: { name: 'Uber Premium Ride', description: 'A long-distance premium Uber ride' },
    zh: { name: '优步高端服务', description: '长途优步高端乘车服务' }
  },
  used_car: {
    en: { name: 'Used Honda Civic', description: 'A reliable used car for daily commuting' },
    zh: { name: '二手本田思域', description: '可靠的日常通勤二手车' }
  },
  motorcycle: {
    en: { name: 'Harley Davidson', description: 'A classic Harley Davidson motorcycle' },
    zh: { name: '哈雷摩托车', description: '经典的哈雷戴维森摩托车' }
  },
  new_car: {
    en: { name: 'BMW Sedan', description: 'A luxury German sedan with premium features' },
    zh: { name: '宝马轿车', description: '配备豪华功能的德国豪华轿车' }
  },
  tesla_model_s: {
    en: { name: 'Tesla Model S', description: 'A luxury electric sedan from Tesla' },
    zh: { name: '特斯拉Model S', description: '特斯拉的豪华电动轿车' }
  },
  sports_car: {
    en: { name: 'Porsche 911', description: 'A classic German sports car' },
    zh: { name: '保时捷911', description: '经典的德国跑车' }
  },
  ferrari: {
    en: { name: 'Ferrari F8 Tributo', description: 'An Italian supercar with incredible performance' },
    zh: { name: '法拉利F8 Tributo', description: '性能卓越的意大利超级跑车' }
  },
  helicopter: {
    en: { name: 'Private Helicopter', description: 'Skip traffic with your own helicopter' },
    zh: { name: '私人直升机', description: '用专属直升机跳过交通拥堵' }
  },
  private_jet: {
    en: { name: 'Private Jet', description: 'Your own private jet for ultimate travel luxury' },
    zh: { name: '私人飞机', description: '享受终极奢华旅行的专属私人飞机' }
  },
  mega_yacht: {
    en: { name: 'Mega Yacht', description: 'A massive luxury yacht with full crew' },
    zh: { name: '超级游艇', description: '配备全套船员的巨型豪华游艇' }
  },

  // Technology Category Items
  earbuds: {
    en: { name: 'Wireless Earbuds', description: 'High-quality wireless earbuds with noise cancellation' },
    zh: { name: '无线耳机', description: '带降噪功能的高品质无线耳机' }
  },
  tablet: {
    en: { name: 'iPad Pro', description: 'Professional tablet for work and creativity' },
    zh: { name: 'iPad Pro', description: '专业工作和创意平板电脑' }
  },
  laptop: {
    en: { name: 'MacBook Pro', description: 'High-performance laptop for professionals' },
    zh: { name: 'MacBook Pro', description: '专业人士的高性能笔记本电脑' }
  },
  smartphone: {
    en: { name: 'iPhone 15 Pro', description: 'The latest iPhone with advanced features' },
    zh: { name: 'iPhone 15 Pro', description: '具有先进功能的最新iPhone' }
  },
  smart_watch: {
    en: { name: 'Apple Watch Ultra', description: 'Advanced smartwatch with health monitoring' },
    zh: { name: 'Apple Watch Ultra', description: '带健康监测功能的先进智能手表' }
  },
  vr_headset: {
    en: { name: 'VR Headset Setup', description: 'Complete VR gaming and entertainment setup' },
    zh: { name: 'VR头显套装', description: '完整的VR游戏和娱乐套装' }
  },
  gaming_console: {
    en: { name: 'PlayStation 5 Pro', description: 'Next-generation gaming console' },
    zh: { name: 'PlayStation 5 Pro', description: '下一代游戏主机' }
  },
  gaming_pc: {
    en: { name: 'High-End Gaming PC', description: 'A powerful gaming computer with top-tier specs' },
    zh: { name: '高端游戏电脑', description: '配备顶级规格的强大游戏电脑' }
  },
  smart_tv: {
    en: { name: '85" OLED Smart TV', description: 'Ultra-large OLED TV with smart features' },
    zh: { name: '85寸OLED智能电视', description: '具有智能功能的超大OLED电视' }
  },
  home_theater: {
    en: { name: 'Home Theater System', description: 'Professional-grade home cinema experience' },
    zh: { name: '家庭影院系统', description: '专业级家庭影院体验' }
  },
  server_rack: {
    en: { name: 'Personal Server Rack', description: 'Professional server setup for data storage' },
    zh: { name: '个人服务器机架', description: '专业数据存储服务器设置' }
  },
  quantum_computer: {
    en: { name: 'Quantum Computer Access', description: 'Access to quantum computing resources' },
    zh: { name: '量子计算机使用权', description: '量子计算资源使用权限' }
  },

  // Real Estate Category Items
  parking_space: {
    en: { name: 'Downtown Parking Space', description: 'A premium parking space in downtown' },
    zh: { name: '市中心停车位', description: '位于市中心的优质停车位' }
  },
  tiny_house: {
    en: { name: 'Tiny House', description: 'A small but efficient tiny house' },
    zh: { name: '迷你屋', description: '小巧而高效的迷你住宅' }
  },
  studio_apartment: {
    en: { name: 'Studio Apartment', description: 'A cozy downtown studio apartment' },
    zh: { name: '单身公寓', description: '位于市中心的温馨单身公寓' }
  },
  suburban_home: {
    en: { name: 'Suburban House', description: 'A comfortable family home in the suburbs' },
    zh: { name: '郊区房屋', description: '位于郊区的舒适家庭住宅' }
  },
  beach_house: {
    en: { name: 'Beach House', description: 'A beautiful house right by the beach' },
    zh: { name: '海滨别墅', description: '紧邻海滩的美丽别墅' }
  },
  city_condo: {
    en: { name: 'Luxury City Condo', description: 'High-rise condo with panoramic city views' },
    zh: { name: '豪华城市公寓', description: '拥有全景城市景观的高层公寓' }
  },
  luxury_penthouse: {
    en: { name: 'Luxury Penthouse', description: 'A stunning penthouse with city views' },
    zh: { name: '豪华顶层公寓', description: '拥有城市景观的绝美顶层公寓' }
  },
  mountain_cabin: {
    en: { name: 'Mountain Resort Cabin', description: 'Exclusive cabin in a luxury mountain resort' },
    zh: { name: '山区度假木屋', description: '豪华山区度假村的专属木屋' }
  },
  historic_mansion: {
    en: { name: 'Historic Mansion', description: 'A beautifully restored historic mansion' },
    zh: { name: '历史豪宅', description: '精美修复的历史豪宅' }
  },
  private_island: {
    en: { name: 'Private Island', description: 'Your own private tropical island paradise' },
    zh: { name: '私人岛屿', description: '专属的热带岛屿天堂' }
  },
  skyscraper: {
    en: { name: 'Commercial Skyscraper', description: 'A massive skyscraper in financial district' },
    zh: { name: '商业摩天大楼', description: '位于金融区的巨型摩天大楼' }
  },

  // Luxury Category Items
  designer_handbag: {
    en: { name: 'Designer Handbag', description: 'A limited edition luxury handbag' },
    zh: { name: '设计师手袋', description: '限量版奢华手袋' }
  },
  gold_jewelry: {
    en: { name: 'Gold Jewelry Set', description: 'Exquisite gold jewelry with precious gems' },
    zh: { name: '黄金珠宝套装', description: '镶嵌珍贵宝石的精美黄金珠宝' }
  },
  rolex_watch: {
    en: { name: 'Rolex Submariner', description: 'A prestigious Swiss luxury watch' },
    zh: { name: '劳力士潜水表', description: '享有盛誉的瑞士奢华手表' }
  },
  luxury_suit: {
    en: { name: 'Bespoke Italian Suit', description: 'Hand-tailored suit from Milan\'s finest' },
    zh: { name: '定制意大利西装', description: '来自米兰最优秀工匠的手工定制西装' }
  },
  diamond_ring: {
    en: { name: 'Diamond Ring', description: 'A beautiful diamond engagement ring' },
    zh: { name: '钻石戒指', description: '美丽的钻石订婚戒指' }
  },
  rare_wine_collection: {
    en: { name: 'Rare Wine Collection', description: 'Collection of vintage wines from legendary years' },
    zh: { name: '稀有红酒收藏', description: '传奇年份的珍藏葡萄酒收藏' }
  },
  antique_furniture: {
    en: { name: 'Antique Furniture Set', description: 'Authentic antique furniture from European palaces' },
    zh: { name: '古董家具套装', description: '来自欧洲宫殿的正宗古董家具' }
  },
  sports_car_collection: {
    en: { name: 'Classic Car Collection', description: 'Collection of vintage and exotic sports cars' },
    zh: { name: '经典跑车收藏', description: '古董和异国跑车的收藏' }
  },
  yacht: {
    en: { name: 'Luxury Yacht', description: 'A magnificent yacht for ocean adventures' },
    zh: { name: '豪华游艇', description: '用于海洋探险的华丽游艇' }
  },
  private_jet_luxury: {
    en: { name: 'Custom Private Jet', description: 'Fully customized luxury private jet' },
    zh: { name: '定制私人飞机', description: '完全定制的奢华私人飞机' }
  },
  art_collection: {
    en: { name: 'Famous Art Collection', description: 'A collection of world-renowned artworks' },
    zh: { name: '名画收藏', description: '世界知名艺术作品的收藏' }
  },
  space_tourism: {
    en: { name: 'Space Tourism Package', description: 'Ultimate luxury experience: a trip to space' },
    zh: { name: '太空旅游套餐', description: '终极奢华体验：太空之旅' }
  },

  // Business Category Items
  food_truck_business: {
    en: { name: 'Food Truck Business', description: 'Start your own mobile food business' },
    zh: { name: '餐车生意', description: '开始您自己的移动食品业务' }
  },
  coffee_shop: {
    en: { name: 'Coffee Shop', description: 'A cozy neighborhood coffee shop' },
    zh: { name: '咖啡店', description: '温馨的社区咖啡店' }
  },
  retail_store: {
    en: { name: 'Boutique Retail Store', description: 'A trendy boutique in a prime location' },
    zh: { name: '精品零售店', description: '位于黄金地段的时尚精品店' }
  },
  fitness_center: {
    en: { name: 'Fitness Center', description: 'A modern fitness center with all equipment' },
    zh: { name: '健身中心', description: '配备所有设备的现代健身中心' }
  },
  restaurant: {
    en: { name: 'Fine Dining Restaurant', description: 'An upscale restaurant with expert chefs' },
    zh: { name: '高档餐厅', description: '配有专业厨师的高端餐厅' }
  },
  hotel: {
    en: { name: 'Boutique Hotel', description: 'A luxury boutique hotel in the city center' },
    zh: { name: '精品酒店', description: '位于市中心的豪华精品酒店' }
  },
  tech_startup: {
    en: { name: 'Tech Startup', description: 'Invest in a promising technology startup' },
    zh: { name: '科技创业公司', description: '投资有前途的科技创业公司' }
  },
  manufacturing_plant: {
    en: { name: 'Manufacturing Plant', description: 'A state-of-the-art manufacturing facility' },
    zh: { name: '制造工厂', description: '最先进的制造设施' }
  },
  airline: {
    en: { name: 'Regional Airline', description: 'Your own regional airline company' },
    zh: { name: '地区航空公司', description: '您自己的地区航空公司' }
  },
  movie_studio: {
    en: { name: 'Movie Studio', description: 'Your own Hollywood movie production studio' },
    zh: { name: '电影制片厂', description: '您自己的好莱坞电影制作工厂' }
  },
  social_media_platform: {
    en: { name: 'Social Media Platform', description: 'Build and own a global social media platform' },
    zh: { name: '社交媒体平台', description: '构建并拥有全球社交媒体平台' }
  },

  // Charity Category Items
  food_bank_donation: {
    en: { name: 'Food Bank Donation', description: 'Donate meals to local food banks' },
    zh: { name: '食物银行捐赠', description: '向当地食物银行捐赠食物' }
  },
  homeless_shelter: {
    en: { name: 'Homeless Shelter Support', description: 'Support homeless shelters in your community' },
    zh: { name: '流浪者收容所支持', description: '支持您社区的流浪者收容所' }
  },
  animal_shelter: {
    en: { name: 'Animal Shelter Donation', description: 'Help abandoned animals find loving homes' },
    zh: { name: '动物收容所捐赠', description: '帮助被遗弃的动物找到温暖的家' }
  },
  school_donation: {
    en: { name: 'School Donation', description: 'Donate to improve education for children' },
    zh: { name: '学校捐赠', description: '捐赠改善儿童教育条件' }
  },
  clean_water: {
    en: { name: 'Clean Water Project', description: 'Provide clean water access to communities in need' },
    zh: { name: '清洁水源项目', description: '为有需要的社区提供清洁水源' }
  },
  scholarship_fund: {
    en: { name: 'Scholarship Fund', description: 'Create scholarships for underprivileged students' },
    zh: { name: '奖学金基金', description: '为贫困学生设立奖学金' }
  },
  disaster_relief: {
    en: { name: 'Disaster Relief Fund', description: 'Support communities affected by natural disasters' },
    zh: { name: '灾难救援基金', description: '支持受自然灾害影响的社区' }
  },
  hospital_wing: {
    en: { name: 'Hospital Wing', description: 'Fund a new wing for a local hospital' },
    zh: { name: '医院新翼楼', description: '为当地医院资助新的医疗大楼' }
  },
  arts_education: {
    en: { name: 'Arts Education Program', description: 'Support arts education in schools nationwide' },
    zh: { name: '艺术教育项目', description: '支持全国学校的艺术教育' }
  },
  renewable_energy: {
    en: { name: 'Renewable Energy Project', description: 'Fund sustainable energy projects for communities' },
    zh: { name: '可再生能源项目', description: '为社区资助可持续能源项目' }
  },
  climate_research: {
    en: { name: 'Climate Research Fund', description: 'Support critical climate change research' },
    zh: { name: '气候研究基金', description: '支持重要的气候变化研究' }
  },
  wildlife_conservation: {
    en: { name: 'Wildlife Conservation', description: 'Protect endangered species and their habitats' },
    zh: { name: '野生动物保护', description: '保护濒危物种及其栖息地' }
  },
  global_health: {
    en: { name: 'Global Health Initiative', description: 'Fund global health programs like the Gates Foundation' },
    zh: { name: '全球健康倡议', description: '资助像盖茨基金会这样的全球健康项目' }
  },
  poverty_eradication: {
    en: { name: 'Global Poverty Eradication', description: 'Comprehensive program to end poverty worldwide' },
    zh: { name: '全球贫困根除', description: '在全球范围内终结贫困的综合项目' }
  },
  space_exploration: {
    en: { name: 'Space Exploration Fund', description: 'Advance human space exploration for the benefit of all' },
    zh: { name: '太空探索基金', description: '推进人类太空探索，造福全人类' }
  }
}

// Helper function to get localized item data
export function getLocalizedItemName(itemId: string, language: Language): string {
  return itemTranslations[itemId]?.[language]?.name || itemId
}

export function getLocalizedItemDescription(itemId: string, language: Language): string {
  return itemTranslations[itemId]?.[language]?.description || 'No description available'
}