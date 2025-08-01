interface ChallengeTranslation {
  name: string
  description: string
}

interface ChallengeTranslations {
  [key: string]: {
    en: ChallengeTranslation
    zh: ChallengeTranslation
  }
}

export const challengeTranslations: ChallengeTranslations = {
  speed_spender_1: {
    en: {
      name: 'Speed Spender I',
      description: 'Spend $10 billion in under 5 minutes'
    },
    zh: {
      name: '速度花费者 I',
      description: '在5分钟内花费100亿美元'
    }
  },
  speed_spender_2: {
    en: {
      name: 'Speed Spender II',
      description: 'Spend $50 billion in under 10 minutes'
    },
    zh: {
      name: '速度花费者 II',
      description: '在10分钟内花费500亿美元'
    }
  },
  ultimate_challenge: {
    en: {
      name: 'Ultimate Spender',
      description: 'Spend all of Bill Gates\' money in under 30 minutes'
    },
    zh: {
      name: '终极花费者',
      description: '在30分钟内花光比尔盖茨的所有钱'
    }
  },
  charity_focus: {
    en: {
      name: 'Philanthropist',
      description: 'Spend $10 billion on charity items only'
    },
    zh: {
      name: '慈善家',
      description: '仅在慈善物品上花费100亿美元'
    }
  }
}

export const getChallengeTranslation = (challengeId: string, language: string): ChallengeTranslation => {
  const challenge = challengeTranslations[challengeId]
  if (!challenge) {
    return {
      name: challengeId,
      description: challengeId
    }
  }
  
  return challenge[language as 'en' | 'zh'] || challenge.en
}