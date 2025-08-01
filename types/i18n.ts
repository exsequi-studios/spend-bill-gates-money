export type Language = 'en' | 'zh'

export interface Translation {
  // Game UI
  title: string
  subtitle: string
  
  // Navigation
  nav: {
    items: string
    companies: string
    challenges: string
    upgrades: string
    achievements: string
  }
  
  // Game Header
  money: string
  income: string
  per_second: string
  
  // Actions
  buy: string
  buy_one: string
  cannot_afford: string
  max_owned: string
  start: string
  reset: string
  reset_game: string
  language: string
  tip: string
  
  // Categories
  categories: {
    food: string
    transport: string
    technology: string
    real_estate: string
    luxury: string
    business: string
    charity: string
  }
  
  // Items page
  items: {
    title: string
    filter_all: string
    owned: string
    base_price: string
    categories: string
    all_items: string
    search: string
    search_placeholder: string
    sort_by: string
    sort_category: string
    sort_name_az: string
    sort_price_low: string
    sort_price_high: string
    sort_owned: string
    no_items_found: string
    try_different_search: string
    no_items_match: string
    showing_items: string
    of_items: string
    items_text: string
    in_category: string
    matching: string
  }
  
  // Companies page
  companies: {
    title: string
    description: string
    active: string
    inactive: string
    income_per_unit: string
    efficiency: string
    next_upgrade: string
    total_passive_income: string
    sell_price: string
    sell_one: string
    no_companies: string
    base_value: string
    sell_value: string
    after_sell: string
    passive_income_summary: string
    generating_money_auto: string
    total_income: string
    per_minute: string
    per_hour: string
    companies_owned: string
    start_building_empire: string
    companies_generate_income: string
    tip_start_cheaper: string
    investment_tips: string
    start_small_scale_up: string
    start_small_desc: string
    compound_growth: string
    compound_growth_desc: string
    efficiency_matters: string
    efficiency_matters_desc: string
    long_term_strategy: string
    long_term_strategy_desc: string
  }
  
  // Challenges page
  challenges: {
    title: string
    description: string
    target_time: string
    seconds: string
    minutes: string
    start_challenge: string
    challenge_active: string
    time_remaining: string
    progress: string
    complete: string
    reset_challenge: string
    active: string
    completed: string
    no_limit: string
    time_elapsed: string
    best_time: string
    spending_progress: string
    start: string
    stop: string
    // ChallengeGrid specific translations
    challenge_progress: string
    track_completion: string
    completed_count: string
    active_count: string
    progress_percentage: string
    currently_running: string
    ready_for_challenge: string
    challenge_excitement: string
    speed_challenges: string
    speed_challenges_desc: string
    ultimate_challenge_title: string
    ultimate_challenge_desc: string
    themed_challenges: string
    themed_challenges_desc: string
    challenge_tips: string
    speed_is_key: string
    speed_tip: string
    use_bulk_purchases: string
    bulk_tip: string
    plan_strategy: string
    strategy_tip: string
    practice_makes_perfect: string
    practice_tip: string
    challenge_master: string
    challenge_master_desc: string
    challenges_complete: string
    challenges_complete_plural: string
    complete_suffix: string
    keep_going: string
    more_to_go: string
    more_plural_to_go: string
  }
  
  // Upgrades page
  upgrades: {
    title: string
    description: string
    current_level: string
    inflation_rate: string
    upgrade_cost: string
    buy_upgrade: string
    system_title: string
    system_description: string
    current_inflation: string
    next_upgrade_cost: string
    price_increase: string
    purchase_upgrade: string
    cannot_afford: string
    upgrade_effects: string
    all_items_increase: string
    all_companies_increase: string
    next_cost: string
    challenge_difficulty: string
    increased: string
    spending_milestones: string
    milestones_description: string
    total_money_spent: string
    progress_to: string
    remaining: string
    milestone_rewards: string
    spend_amount: string
    achieved: string
    pending: string
    // Game Statistics section
    game_statistics: string
    game_statistics_desc: string
    total_spent: string
    total_earned: string
    items_bought: string
    companies_owned: string
    // Upgrade Strategy section
    upgrade_strategy: string
    when_to_upgrade: string
    when_to_upgrade_desc: string
    strategic_timing: string
    strategic_timing_desc: string
    long_term_benefits: string
    long_term_benefits_desc: string
  }
  
  // Achievements page
  achievements: {
    title: string
    progress: string
    reward: string
    unlocked: string
    locked: string
    common: string
    uncommon: string
    rare: string
    epic: string
    legendary: string
    unlocked_at: string
    completed: string
    spending: string
    items: string
    companies: string
    time: string
    special: string
  }
  
  // Game messages
  messages: {
    game_won: string
    challenge_completed: string
    achievement_unlocked: string
  }
  
  // Reset dialog
  reset_dialog: {
    title: string
    description: string
    cancel: string
    confirm: string
  }
  
  // Statistics
  stats: {
    money_spent: string
    items_purchased: string
    companies_owned: string
    total_earned: string
    time_played: string
    time_up: string
  }
  
  theme: {
    light: string
    dark: string
    system: string
    toggle: string
  }
}