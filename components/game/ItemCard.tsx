'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GameItem, ItemCategory } from '@/types/game'
import { formatMoney } from '@/data/gameData'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { getLocalizedItemName, getLocalizedItemDescription } from '@/lib/i18n/itemTranslations'


interface ItemCardProps {
  item: GameItem
}

const categoryColors: Record<ItemCategory, string> = {
  [ItemCategory.FOOD]: 'bg-orange-500',
  [ItemCategory.TRANSPORT]: 'bg-blue-500',
  [ItemCategory.TECHNOLOGY]: 'bg-purple-500',
  [ItemCategory.REAL_ESTATE]: 'bg-green-500',
  [ItemCategory.LUXURY]: 'bg-yellow-500',
  [ItemCategory.BUSINESS]: 'bg-red-500',
  [ItemCategory.CHARITY]: 'bg-pink-500'
}



export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { money, purchaseItem } = useGameStore()
  const { t, language } = useLanguageStore()
  const canAfford = money >= item.currentPrice
  const isMaxedOut = item.maxOwned && item.owned >= item.maxOwned
  
  const categoryLabels: Record<ItemCategory, string> = {
    [ItemCategory.FOOD]: t.categories.food,
    [ItemCategory.TRANSPORT]: t.categories.transport,
    [ItemCategory.TECHNOLOGY]: t.categories.technology,
    [ItemCategory.REAL_ESTATE]: t.categories.real_estate,
    [ItemCategory.LUXURY]: t.categories.luxury,
    [ItemCategory.BUSINESS]: t.categories.business,
    [ItemCategory.CHARITY]: t.categories.charity
  }

  const handlePurchase = () => {
    if (canAfford && !isMaxedOut) {
      purchaseItem(item.id)
    }
  }



  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${
      canAfford ? 'hover:scale-105' : 'opacity-60'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">{getLocalizedItemName(item.id, language)}</CardTitle>
            <CardDescription className="text-sm mt-1">
              {getLocalizedItemDescription(item.id, language)}
            </CardDescription>
          </div>
          <Badge 
            className={`${categoryColors[item.category]} text-white text-xs ml-2 shrink-0`}
          >
            {categoryLabels[item.category]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Price and ownership info */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">
              {formatMoney(item.currentPrice)}
            </div>
            {item.owned > 0 && (
              <div className="text-sm text-muted-foreground">
                {t.items.owned}: {item.owned}{item.maxOwned ? ` / ${item.maxOwned}` : ''}
              </div>
            )}
          </div>

          {/* Purchase buttons */}
          <div className="space-y-2">
            <Button
              onClick={handlePurchase}
              disabled={!canAfford || isMaxedOut}
              className="w-full"
              size="sm"
            >
              {isMaxedOut ? t.max_owned : canAfford ? t.buy_one : t.cannot_afford}
            </Button>

          </div>

          {/* Additional info */}
          {item.basePrice !== item.currentPrice && (
            <div className="text-xs text-muted-foreground">
              {t.items.base_price}: {formatMoney(item.basePrice)} 
              (+{Math.round(((item.currentPrice - item.basePrice) / item.basePrice) * 100)}%)
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}