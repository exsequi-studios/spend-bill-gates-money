'use client'

import React, { useState } from 'react'
import { GameHeader } from './GameHeader'
import { GameNavigation, GameTab } from './GameNavigation'
import { StickyMoneyDisplay } from './StickyMoneyDisplay'
import { ItemGrid } from './ItemGrid'
import { CompanyGrid } from './CompanyGrid'
import { ChallengeGrid } from './ChallengeGrid'
import { UpgradePanel } from './UpgradePanel'
import { AchievementGrid } from './AchievementGrid'

export const Game: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<GameTab>('items')

  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'items':
        return <ItemGrid />
      case 'companies':
        return <CompanyGrid />
      case 'challenges':
        return <ChallengeGrid />
      case 'upgrades':
        return <UpgradePanel />
      case 'achievements':
        return <AchievementGrid />
      default:
        return <ItemGrid />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sticky Money Display */}
      <StickyMoneyDisplay />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Game Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            💸 Spend Bill Gates Money 💸
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Can you spend all $128 billion of Bill Gates&apos; fortune? 
            Buy items, invest in companies, and take on challenges in this ultimate money-spending simulator!
          </p>
        </div>

        {/* Game Header - Money Display */}
        <GameHeader />

        {/* Navigation */}
        <GameNavigation 
          currentTab={currentTab} 
          onTabChange={setCurrentTab} 
        />

        {/* Content Area */}
        <div className="min-h-[600px]">
          {renderCurrentTab()}
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ using Next.js, React, and Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground">
            This is a simulation game. Bill Gates&apos; actual net worth and spending habits may vary.
            Data is automatically saved to your browser&apos;s local storage.
          </p>
        </div>
      </div>
    </div>
  )
}