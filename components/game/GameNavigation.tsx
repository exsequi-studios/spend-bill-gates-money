'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'

export type GameTab = 'items' | 'companies' | 'challenges' | 'upgrades' | 'achievements'

interface GameNavigationProps {
  currentTab: GameTab
  onTabChange: (tab: GameTab) => void
}

export const GameNavigation: React.FC<GameNavigationProps> = ({
  currentTab,
  onTabChange
}) => {
  const { companies, completedChallenges, upgradeSystem, currentChallenge, achievements } = useGameStore()
  const { t } = useLanguageStore()

  // Calculate notification badges
  const ownedCompanies = companies.filter(c => c.owned > 0).length
  const activeChallenges = currentChallenge ? 1 : 0
  const completedChallengeCount = completedChallenges.length
  const unlockedAchievements = achievements.filter(a => a.isUnlocked).length

  const tabs = [
    {
      id: 'items' as GameTab,
      label: t.nav.items,
      icon: '🛍️',
      description: t.items.title,
      badge: null
    },
    {
      id: 'companies' as GameTab,
      label: t.nav.companies,
      icon: '🏢',
      description: t.companies.title,
      badge: ownedCompanies > 0 ? ownedCompanies : null
    },
    {
      id: 'challenges' as GameTab,
      label: t.nav.challenges,
      icon: '🏆',
      description: t.challenges.title,
      badge: activeChallenges > 0 ? '!' : (completedChallengeCount > 0 ? completedChallengeCount : null)
    },
    {
      id: 'upgrades' as GameTab,
      label: t.nav.upgrades,
      icon: '📈',
      description: t.upgrades.title,
      badge: upgradeSystem.upgradeLevel > 0 ? upgradeSystem.upgradeLevel : null
    },
    {
      id: 'achievements' as GameTab,
      label: t.nav.achievements,
      icon: '🏆',
      description: t.achievements.title,
      badge: unlockedAchievements > 0 ? unlockedAchievements : null
    }
  ]

  return (
    <div className="space-y-4">
      {/* Desktop Navigation */}
      <div className="hidden md:grid md:grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            variant={currentTab === tab.id ? 'default' : 'outline'}
            className={`h-auto p-4 flex-col space-y-2 ${
              currentTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-blue-50 dark:hover:bg-blue-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
              {tab.badge && (
                <Badge 
                  className={`${
                    currentTab === tab.id 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {tab.badge}
                </Badge>
              )}
            </div>
            <div className="text-xs opacity-75">
              {tab.description}
            </div>
          </Button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            variant={currentTab === tab.id ? 'default' : 'outline'}
            className={`h-auto p-3 flex-col space-y-1 ${
              currentTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-blue-50 dark:hover:bg-blue-950/20'
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium text-sm">{tab.label}</span>
              {tab.badge && (
                <Badge 
                  size="sm"
                  className={`text-xs ${
                    currentTab === tab.id 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {tab.badge}
                </Badge>
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Current Tab Indicator */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          <span>{tabs.find(t => t.id === currentTab)?.icon}</span>
          <span className="font-medium text-blue-700 dark:text-blue-300">
            {tabs.find(t => t.id === currentTab)?.label}
          </span>
          <span className="text-sm text-blue-600 dark:text-blue-400">
            {tabs.find(t => t.id === currentTab)?.description}
          </span>
        </div>
      </div>
    </div>
  )
}