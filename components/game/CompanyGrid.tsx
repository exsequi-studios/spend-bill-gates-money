'use client'

import React, { useMemo } from 'react'
import { CompanyCard } from './CompanyCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { formatMoney } from '@/data/gameData'

export const CompanyGrid: React.FC = () => {
  const { companies } = useGameStore()
  const { t } = useLanguageStore()

  // Calculate total passive income
  const totalPassiveIncome = useMemo(() => {
    return companies.reduce((total, company) => {
      return total + (company.currentIncomePerSecond * company.owned)
    }, 0)
  }, [companies])

  // Calculate total companies owned
  const totalCompaniesOwned = useMemo(() => {
    return companies.reduce((total, company) => total + company.owned, 0)
  }, [companies])

  // Sort companies by price (cheapest first)
  const sortedCompanies = useMemo(() => {
    return [...companies].sort((a, b) => a.currentPrice - b.currentPrice)
  }, [companies])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">{t.companies.title}</h2>
        <p className="text-muted-foreground">
          {t.companies.description || "Sell companies to get money! You start with some companies."}
        </p>
      </div>

      {/* Passive Income Summary */}
      {totalPassiveIncome > 0 && (
        <Card className="border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
              💰 {t.companies.passive_income_summary}
            </CardTitle>
            <CardDescription>
              {t.companies.generating_money_auto}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  +{formatMoney(totalPassiveIncome)}/sec
                </div>
                <div className="text-sm text-muted-foreground">{t.companies.total_income}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  +{formatMoney(totalPassiveIncome * 60)}/min
                </div>
                <div className="text-sm text-muted-foreground">{t.companies.per_minute}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  +{formatMoney(totalPassiveIncome * 3600)}/hour
                </div>
                <div className="text-sm text-muted-foreground">{t.companies.per_hour}</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                {totalCompaniesOwned} {t.companies.companies_owned}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions for first-time users */}
      {totalPassiveIncome === 0 && (
        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-2">{t.companies.start_building_empire}</h3>
            <p className="text-muted-foreground mb-4">
              {t.companies.companies_generate_income}
            </p>
            <div className="text-sm text-muted-foreground">
              <strong>{t.tip}:</strong> {t.companies.tip_start_cheaper}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* Investment Tips */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
            💡 {t.companies.investment_tips}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">{t.companies.start_small_scale_up}</h4>
              <p className="text-muted-foreground">
                {t.companies.start_small_desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.companies.compound_growth}</h4>
              <p className="text-muted-foreground">
                {t.companies.compound_growth_desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.companies.efficiency_matters}</h4>
              <p className="text-muted-foreground">
                {t.companies.efficiency_matters_desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.companies.long_term_strategy}</h4>
              <p className="text-muted-foreground">
                {t.companies.long_term_strategy_desc}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}