'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ItemCategory } from '@/types/game'
import { useLanguageStore } from '@/store/languageStore'

interface CategoryFilterProps {
  selectedCategory: ItemCategory | 'all'
  onCategoryChange: (category: ItemCategory | 'all') => void
  itemCounts: Record<ItemCategory, number>
}

const getCategoryLabels = (t: { categories?: Record<string, string> } | null): Record<ItemCategory, string> => {
  if (!t || !t.categories) {
    // Fallback labels if translation is not loaded
    return {
      [ItemCategory.FOOD]: 'Food & Dining',
      [ItemCategory.TRANSPORT]: 'Transportation',
      [ItemCategory.TECHNOLOGY]: 'Technology',
      [ItemCategory.REAL_ESTATE]: 'Real Estate',
      [ItemCategory.LUXURY]: 'Luxury Items',
      [ItemCategory.BUSINESS]: 'Business',
      [ItemCategory.CHARITY]: 'Charity'
    }
  }
  
  return {
    [ItemCategory.FOOD]: t.categories.food,
    [ItemCategory.TRANSPORT]: t.categories.transport,
    [ItemCategory.TECHNOLOGY]: t.categories.technology,
    [ItemCategory.REAL_ESTATE]: t.categories.real_estate,
    [ItemCategory.LUXURY]: t.categories.luxury,
    [ItemCategory.BUSINESS]: t.categories.business,
    [ItemCategory.CHARITY]: t.categories.charity
  }
}

const categoryColors: Record<ItemCategory, string> = {
  [ItemCategory.FOOD]: 'bg-orange-500 hover:bg-orange-600',
  [ItemCategory.TRANSPORT]: 'bg-blue-500 hover:bg-blue-600',
  [ItemCategory.TECHNOLOGY]: 'bg-purple-500 hover:bg-purple-600',
  [ItemCategory.REAL_ESTATE]: 'bg-green-500 hover:bg-green-600',
  [ItemCategory.LUXURY]: 'bg-yellow-500 hover:bg-yellow-600',
  [ItemCategory.BUSINESS]: 'bg-red-500 hover:bg-red-600',
  [ItemCategory.CHARITY]: 'bg-pink-500 hover:bg-pink-600'
}

const categoryIcons: Record<ItemCategory, string> = {
  [ItemCategory.FOOD]: '🍔',
  [ItemCategory.TRANSPORT]: '🚗',
  [ItemCategory.TECHNOLOGY]: '💻',
  [ItemCategory.REAL_ESTATE]: '🏠',
  [ItemCategory.LUXURY]: '💎',
  [ItemCategory.BUSINESS]: '🏢',
  [ItemCategory.CHARITY]: '❤️'
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  itemCounts
}) => {
  const { t } = useLanguageStore()
  const categoryLabels = getCategoryLabels(t)
  const totalItems = Object.values(itemCounts).reduce((sum, count) => sum + count, 0)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t?.items?.categories || 'Categories'}</h3>
      
      <div className="space-y-2">
        {/* All Items */}
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className="w-full justify-between text-left"
        >
          <span className="flex items-center gap-2">
            <span>🌟</span>
            <span>{t?.items?.all_items || 'All Items'}</span>
          </span>
          <Badge variant="secondary" className="ml-2">
            {totalItems}
          </Badge>
        </Button>

        {/* Category Buttons */}
        {Object.values(ItemCategory).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className={`w-full justify-between text-left ${
              selectedCategory === category 
                ? categoryColors[category] + ' text-white' 
                : 'hover:bg-muted'
            }`}
          >
            <span className="flex items-center gap-2">
              <span>{categoryIcons[category]}</span>
              <span className="text-sm">{categoryLabels[category]}</span>
            </span>
            <Badge 
              variant={selectedCategory === category ? 'outline' : 'secondary'} 
              className={`ml-2 ${
                selectedCategory === category ? 'bg-white/20 text-white border-white/30' : ''
              }`}
            >
              {itemCounts[category]}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}