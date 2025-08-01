'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { formatMoney } from '@/data/gameData'

export const UpgradePanel: React.FC = () => {
  const { 
    money, 
    upgradeSystem, 
    purchaseUpgrade,
    stats
  } = useGameStore()
  
  const { t } = useLanguageStore()

  const canAffordUpgrade = money >= upgradeSystem.upgradePrice
  const inflationPercentage = Math.round((upgradeSystem.inflationRate - 1) * 100)

  const handlePurchaseUpgrade = () => {
    if (canAffordUpgrade) {
      purchaseUpgrade()
    }
  }

  // Calculate spending progress towards next milestone
  const spendingMilestones = [
    10_000_000_000,    // $10B
    50_000_000_000,    // $50B
    100_000_000_000,   // $100B
  ]

  const nextMilestone = spendingMilestones.find(milestone => stats.totalSpent < milestone)
  const milestoneProgress = nextMilestone 
    ? (stats.totalSpent / nextMilestone) * 100 
    : 100

  return (
    <div className="space-y-4">
      {/* Upgrade System Card */}
      <Card className="border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="text-purple-700 dark:text-purple-300 flex items-center gap-2">
            📈 {t.upgrades.system_title}
            <Badge className="bg-purple-500 text-white">
              Level {upgradeSystem.upgradeLevel}
            </Badge>
          </CardTitle>
          <CardDescription>
            {t.upgrades.system_description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Current Inflation Rate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {inflationPercentage}%
              </div>
              <div className="text-sm text-muted-foreground">{t.upgrades.current_inflation}</div>
            </div>
            <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {formatMoney(upgradeSystem.upgradePrice)}
              </div>
              <div className="text-sm text-muted-foreground">{t.upgrades.next_upgrade_cost}</div>
            </div>
            <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                +50%
              </div>
              <div className="text-sm text-muted-foreground">{t.upgrades.price_increase}</div>
            </div>
          </div>

          {/* Upgrade Button */}
          <Button
            onClick={handlePurchaseUpgrade}
            disabled={!canAffordUpgrade}
            className={`w-full ${canAffordUpgrade 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-gray-400'
            }`}
            size="lg"
          >
            {canAffordUpgrade 
              ? `${t.upgrades.purchase_upgrade} - ${formatMoney(upgradeSystem.upgradePrice)}` 
              : t.upgrades.cannot_afford
            }
          </Button>

          {/* Upgrade Effects */}
          <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg space-y-2">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">
              {t.upgrades.upgrade_effects}:
            </h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>• {t.upgrades.all_items_increase}:</span>
                <span className="font-medium">+50%</span>
              </div>
              <div className="flex justify-between">
                <span>• {t.upgrades.all_companies_increase}:</span>
                <span className="font-medium">+50%</span>
              </div>
              <div className="flex justify-between">
                <span>• {t.upgrades.next_cost}:</span>
                <span className="font-medium">{formatMoney(upgradeSystem.upgradePrice * 2)}</span>
              </div>
              <div className="flex justify-between">
                <span>• {t.upgrades.challenge_difficulty}:</span>
                <span className="font-medium text-red-500">{t.upgrades.increased}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spending Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 {t.upgrades.spending_milestones}
          </CardTitle>
          <CardDescription>
            {t.upgrades.milestones_description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Spending */}
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {formatMoney(stats.totalSpent)}
            </div>
            <div className="text-sm text-muted-foreground">{t.upgrades.total_money_spent}</div>
          </div>

          <Separator />

          {/* Progress to Next Milestone */}
          {nextMilestone && (
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>{t.upgrades.progress_to} {formatMoney(nextMilestone)}</span>
                <span>{milestoneProgress.toFixed(1)}%</span>
              </div>
              <Progress value={milestoneProgress} className="h-3" />
              <div className="text-xs text-center mt-1 text-muted-foreground">
                {formatMoney(nextMilestone - stats.totalSpent)} {t.upgrades.remaining}
              </div>
            </div>
          )}

          {/* Milestone List */}
          <div className="space-y-2">
            <h4 className="font-semibold">{t.upgrades.milestone_rewards}:</h4>
            {spendingMilestones.map((milestone) => {
              const achieved = stats.totalSpent >= milestone
              return (
                <div key={milestone} className={`flex items-center justify-between p-2 rounded ${
                  achieved ? 'bg-green-100 dark:bg-green-900/20' : 'bg-gray-100 dark:bg-gray-800'
                }`}>
                  <span className="flex items-center gap-2">
                    {achieved ? '✅' : '⏳'}
                    <span className={achieved ? 'font-medium' : ''}>
                      {t.upgrades.spend_amount} {formatMoney(milestone)}
                    </span>
                  </span>
                  <Badge variant={achieved ? 'default' : 'secondary'}>
                    {achieved ? t.upgrades.achieved : t.upgrades.pending}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Game Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 {t.upgrades.game_statistics}
          </CardTitle>
          <CardDescription>
            {t.upgrades.game_statistics_desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {formatMoney(stats.totalSpent)}
              </div>
              <div className="text-xs text-muted-foreground">{t.upgrades.total_spent}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                {formatMoney(stats.totalEarned)}
              </div>
              <div className="text-xs text-muted-foreground">{t.upgrades.total_earned}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                {stats.itemsPurchased.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">{t.upgrades.items_bought}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                {stats.companiesOwned}
              </div>
              <div className="text-xs text-muted-foreground">{t.upgrades.companies_owned}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Strategy Tips */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
            💡 {t.upgrades.upgrade_strategy}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold mb-1">{t.upgrades.when_to_upgrade}</h4>
              <p className="text-muted-foreground">
                {t.upgrades.when_to_upgrade_desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t.upgrades.strategic_timing}</h4>
              <p className="text-muted-foreground">
                {t.upgrades.strategic_timing_desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t.upgrades.long_term_benefits}</h4>
              <p className="text-muted-foreground">
                {t.upgrades.long_term_benefits_desc}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}