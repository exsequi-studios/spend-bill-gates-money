'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { Company } from '@/types/game'
import { formatMoney } from '@/data/gameData'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { getLocalizedCompanyName, getLocalizedCompanyDescription } from '@/lib/i18n/companyTranslations'


interface CompanyCardProps {
  company: Company
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const { sellCompany } = useGameStore()
  const { t, language } = useLanguageStore()
  const canSell = company.owned > 0
  const sellPrice = Math.floor(company.basePrice * 0.8)

  const handleSell = () => {
    if (canSell) {
      sellCompany(company.id)
    }
  }



  // Calculate total income per second from this company
  const totalIncomePerSecond = company.currentIncomePerSecond * company.owned

  // Calculate efficiency (income per dollar spent)
  const efficiency = company.owned > 0 
    ? totalIncomePerSecond / (company.basePrice * company.owned)
    : company.baseIncomePerSecond / company.basePrice

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${
      canSell ? 'hover:scale-105' : 'opacity-60'
    } ${company.owned > 0 ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' : 'border-gray-300 bg-gray-50 dark:bg-gray-950/20'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight flex items-center gap-2">
              {getLocalizedCompanyName(company.id, language)}
              {company.owned > 0 ? (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  {t.companies.active}
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {t.companies.inactive || 'Inactive'}
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              {getLocalizedCompanyDescription(company.id, language)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Income Display */}
          {company.owned > 0 && (
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-3 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  +{formatMoney(totalIncomePerSecond)}/sec
                </div>
                <div className="text-xs text-muted-foreground">
                  {t.companies.total_passive_income}
                </div>
              </div>
            </div>
          )}

          {/* Ownership and sell price info */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {t.items.owned}: {company.owned}
            </div>
            {company.owned > 0 && (
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                {t.companies.sell_price || 'Sell for'}: {formatMoney(sellPrice)}
              </div>
            )}
          </div>

          {/* Income per unit */}
          <div className="text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>{t.companies.income_per_unit}:</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">
                +{formatMoney(company.currentIncomePerSecond)}{t.per_second}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span>{t.companies.efficiency}:</span>
              <span className="font-medium">
                {formatMoney(efficiency * 3600)}/hour per $1
              </span>
            </div>
          </div>

          {/* Sell button */}
          <div className="space-y-2">
            {company.owned > 0 ? (
              <Button
                onClick={handleSell}
                variant="destructive"
                className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"

              >
                {t.companies.sell_one || 'Sell One'} ({formatMoney(sellPrice)})
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                className="w-full"

              >
                {t.companies.no_companies || 'No Companies to Sell'}
              </Button>
            )}
          </div>

          {/* Company value info */}
          <div className="text-xs text-muted-foreground">
            {t.companies.base_value || 'Base Value'}: {formatMoney(company.basePrice)} 
            ({t.companies.sell_value || 'Sell Value'}: {formatMoney(sellPrice)} - 80%)
          </div>

          {/* Income reduction preview */}
          {company.owned > 1 && (
            <div className="text-xs text-muted-foreground border-t pt-2">
              <div className="flex justify-between">
                <span>{t.companies.after_sell || 'After selling one'}:</span>
                <span className="text-red-600 dark:text-red-400">
                  -{formatMoney(company.currentIncomePerSecond - company.baseIncomePerSecond * Math.pow(company.upgradeMultiplier, company.owned - 1))}{t.per_second}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}