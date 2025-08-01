'use client'

import React, { useState, useMemo } from 'react'
import { ItemCard } from './ItemCard'
import { CategoryFilter } from './CategoryFilter'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ItemCategory } from '@/types/game'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'

type SortOption = 'name' | 'price-low' | 'price-high' | 'owned' | 'category'

export const ItemGrid: React.FC = () => {
  const { items } = useGameStore()
  const { t } = useLanguageStore()
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('category')

  // Calculate item counts by category
  const itemCounts = useMemo(() => {
    const counts: Record<ItemCategory, number> = {
      [ItemCategory.FOOD]: 0,
      [ItemCategory.TRANSPORT]: 0,
      [ItemCategory.TECHNOLOGY]: 0,
      [ItemCategory.REAL_ESTATE]: 0,
      [ItemCategory.LUXURY]: 0,
      [ItemCategory.BUSINESS]: 0,
      [ItemCategory.CHARITY]: 0
    }

    items.forEach(item => {
      counts[item.category]++
    })

    return counts
  }, [items])

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = items

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
    }

    // Sort items
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.currentPrice - b.currentPrice
        case 'price-high':
          return b.currentPrice - a.currentPrice
        case 'owned':
          return b.owned - a.owned
        case 'category':
          if (a.category === b.category) {
            return a.currentPrice - b.currentPrice // Secondary sort by price
          }
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return sorted
  }, [items, selectedCategory, searchQuery, sortBy])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">{t.items.title}</h2>
        <p className="text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        <div className="lg:col-span-1 space-y-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            itemCounts={itemCounts}
          />

          {/* Search */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{t.items.search}</h3>
            <Input
              placeholder={t.items.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Sort */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{t.items.sort_by}</h3>
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category">{t.items.sort_category}</SelectItem>
                <SelectItem value="name">{t.items.sort_name_az}</SelectItem>
                <SelectItem value="price-low">{t.items.sort_price_low}</SelectItem>
                <SelectItem value="price-high">{t.items.sort_price_high}</SelectItem>
                <SelectItem value="owned">{t.items.sort_owned}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Items grid */}
        <div className="lg:col-span-3">
          {filteredAndSortedItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold mb-2">{t.items.no_items_found}</h3>
              <p className="text-muted-foreground">
                {searchQuery ? t.items.try_different_search : t.items.no_items_match}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredAndSortedItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results info */}
      <div className="text-center text-sm text-muted-foreground">
        {t.items.showing_items} {filteredAndSortedItems.length} {t.items.of_items} {items.length} {t.items.items_text}
        {selectedCategory !== 'all' && (
          <span> {t.items.in_category} {selectedCategory.replace('-', ' ')}</span>
        )}
        {searchQuery && (
          <span> {t.items.matching} &quot;{searchQuery}&quot;</span>
        )}
      </div>
    </div>
  )
}