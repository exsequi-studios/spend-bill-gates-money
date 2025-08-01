'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { formatMoney } from '@/data/gameData'

export const StickyMoneyDisplay: React.FC = () => {
  const { money, companies } = useGameStore()
  const { t } = useLanguageStore()

  // Calculate total passive income
  const totalPassiveIncome = companies.reduce((total, company) => {
    return total + (company.currentIncomePerSecond * company.owned)
  }, 0)

  return (
    <div className="sticky top-0 z-30 backdrop-blur-sm bg-gradient-to-br from-blue-50/95 to-indigo-100/95 dark:from-gray-900/95 dark:to-gray-800/95 border-b border-white/20 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-2">
        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg border-0">
          <CardContent className="py-3">
            <div className="flex items-center justify-center space-x-4">
              {/* Money Amount */}
              <div className="text-center">
                <div className="text-xs opacity-75">{t.money}</div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                  {formatMoney(money)}
                </div>
              </div>
              
              {/* Passive Income - if exists */}
              {totalPassiveIncome > 0 && (
                <div className="text-center border-l border-white/30 pl-4">
                  <div className="text-xs opacity-75">{t.income}</div>
                  <div className="text-sm md:text-base font-medium">
                    +{formatMoney(totalPassiveIncome)}{t.per_second}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}