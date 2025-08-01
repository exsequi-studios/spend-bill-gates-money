import { Language } from '@/types/i18n'

// Translation mapping for Bill Gates' real investment companies
export interface CompanyTranslation {
  name: string
  description: string
}

export const companyTranslations: Record<string, Record<Language, CompanyTranslation>> = {
  microsoft: {
    en: { 
      name: 'Microsoft Corporation', 
      description: 'The technology giant Bill Gates co-founded, leading in cloud computing and software' 
    },
    zh: { 
      name: '微软公司', 
      description: '比尔·盖茨共同创立的科技巨头，在云计算和软件领域处于领先地位' 
    }
  },
  berkshire_hathaway: {
    en: { 
      name: 'Berkshire Hathaway', 
      description: 'Warren Buffett\'s investment conglomerate, a major holding in Gates\' portfolio' 
    },
    zh: { 
      name: '伯克希尔·哈撒韦', 
      description: '沃伦·巴菲特的投资集团，盖茨投资组合中的重要持股' 
    }
  },
  canadian_national_railway: {
    en: { 
      name: 'Canadian National Railway', 
      description: 'North America\'s largest railway network, a key infrastructure investment' 
    },
    zh: { 
      name: '加拿大国家铁路', 
      description: '北美最大的铁路网络，重要的基础设施投资' 
    }
  },
  waste_management: {
    en: { 
      name: 'Waste Management Inc.', 
      description: 'Leading waste collection and environmental services company' 
    },
    zh: { 
      name: '废物管理公司', 
      description: '领先的废物收集和环境服务公司' 
    }
  },
  caterpillar: {
    en: { 
      name: 'Caterpillar Inc.', 
      description: 'World\'s leading manufacturer of construction and mining equipment' 
    },
    zh: { 
      name: '卡特彼勒公司', 
      description: '世界领先的建筑和采矿设备制造商' 
    }
  },
  walmart: {
    en: { 
      name: 'Walmart Inc.', 
      description: 'World\'s largest retailer by revenue and number of employees' 
    },
    zh: { 
      name: '沃尔玛公司', 
      description: '按收入和员工数量计算的世界最大零售商' 
    }
  },
  ups: {
    en: { 
      name: 'United Parcel Service', 
      description: 'Global leader in logistics and package delivery services' 
    },
    zh: { 
      name: '联合包裹服务', 
      description: '物流和包裹递送服务的全球领导者' 
    }
  },
  fedex: {
    en: { 
      name: 'FedEx Corporation', 
      description: 'Major American multinational delivery services company' 
    },
    zh: { 
      name: '联邦快递公司', 
      description: '美国主要的跨国递送服务公司' 
    }
  },
  ecolab: {
    en: { 
      name: 'Ecolab Inc.', 
      description: 'Global leader in water, hygiene and infection prevention solutions' 
    },
    zh: { 
      name: '艺康集团', 
      description: '水处理、卫生和感染预防解决方案的全球领导者' 
    }
  }
}

// Helper function to get localized company data
export function getLocalizedCompanyName(companyId: string, language: Language): string {
  return companyTranslations[companyId]?.[language]?.name || companyId
}

export function getLocalizedCompanyDescription(companyId: string, language: Language): string {
  return companyTranslations[companyId]?.[language]?.description || 'No description available'
}