'use client'

import React, { useState, useMemo } from 'react'
import { AchievementCard } from './AchievementCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AchievementType, AchievementRarity } from '@/types/game'
import { useGameStore } from '@/store/gameStore'
import { getRarityColor, getRarityLabel } from '@/data/achievements'

type FilterType = 'all' | 'unlocked' | 'locked' | AchievementType
type SortType = 'name' | 'rarity' | 'progress' | 'unlocked'

export const AchievementGrid: React.FC = () => {
  const { achievements } = useGameStore()
  const [filter, setFilter] = useState<FilterType>('all')
  const [sort, setSort] = useState<SortType>('rarity')

  // Calculate statistics
  const stats = useMemo(() => {
    const unlockedAchievements = achievements.filter(a => a.isUnlocked)
    const totalAchievements = achievements.length
    const progressPercentage = totalAchievements > 0 ? (unlockedAchievements.length / totalAchievements) * 100 : 0
    
    const rarityStats = {
      [AchievementRarity.COMMON]: { total: 0, unlocked: 0 },
      [AchievementRarity.UNCOMMON]: { total: 0, unlocked: 0 },
      [AchievementRarity.RARE]: { total: 0, unlocked: 0 },
      [AchievementRarity.EPIC]: { total: 0, unlocked: 0 },
      [AchievementRarity.LEGENDARY]: { total: 0, unlocked: 0 }
    }
    
    achievements.forEach(achievement => {
      const rarity = achievement.rarity as AchievementRarity
      rarityStats[rarity].total++
      if (achievement.isUnlocked) {
        rarityStats[rarity].unlocked++
      }
    })
    
    return {
      total: totalAchievements,
      unlocked: unlockedAchievements.length,
      percentage: progressPercentage,
      rarityStats
    }
  }, [achievements])

  // Filter and sort achievements
  const filteredAndSortedAchievements = useMemo(() => {
    let filtered = achievements

    // Apply filters
    switch (filter) {
      case 'unlocked':
        filtered = filtered.filter(a => a.isUnlocked)
        break
      case 'locked':
        filtered = filtered.filter(a => !a.isUnlocked)
        break
      case 'all':
        break
      default:
        // Filter by achievement type
        if (Object.values(AchievementType).includes(filter as AchievementType)) {
          filtered = filtered.filter(a => a.type === filter)
        }
        break
    }

    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'name':
          return a.name.localeCompare(b.name, 'zh-CN')
        case 'rarity':
          const rarityOrder = {
            [AchievementRarity.LEGENDARY]: 5,
            [AchievementRarity.EPIC]: 4,
            [AchievementRarity.RARE]: 3,
            [AchievementRarity.UNCOMMON]: 2,
            [AchievementRarity.COMMON]: 1
          }
          return rarityOrder[b.rarity as AchievementRarity] - rarityOrder[a.rarity as AchievementRarity]
        case 'progress':
          const aProgress = a.maxProgress > 0 ? a.progress / a.maxProgress : 0
          const bProgress = b.maxProgress > 0 ? b.progress / b.maxProgress : 0
          return bProgress - aProgress
        case 'unlocked':
          if (a.isUnlocked && !b.isUnlocked) return -1
          if (!a.isUnlocked && b.isUnlocked) return 1
          return 0
        default:
          return 0
      }
    })
  }, [achievements, filter, sort])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">成就系统</h2>
        <p className="text-muted-foreground">
          完成各种挑战来解锁成就并获得奖励
        </p>
      </div>

      {/* Achievement Progress Summary */}
      <Card className="border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
            🏆 成就进度总览
          </CardTitle>
          <CardDescription>
            追踪你在游戏中的各项成就完成情况
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stats.unlocked}/{stats.total}
              </div>
              <div className="text-sm text-muted-foreground">已解锁成就</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stats.percentage.toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">完成度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {Object.values(AchievementRarity).filter(rarity => 
                  stats.rarityStats[rarity].unlocked > 0
                ).length}/5
              </div>
              <div className="text-sm text-muted-foreground">稀有度类型</div>
            </div>
          </div>

          {/* Rarity Statistics */}
          <div className="space-y-2">
            <h4 className="font-semibold">稀有度统计:</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {Object.entries(stats.rarityStats).map(([rarity, data]) => (
                <div
                  key={rarity}
                  className={`p-2 rounded text-center ${
                    data.unlocked > 0 ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <Badge className={`${getRarityColor(rarity as AchievementRarity)} text-white mb-1`}>
                    {getRarityLabel(rarity as AchievementRarity)}
                  </Badge>
                  <div className="text-xs">
                    {data.unlocked}/{data.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Sorting */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Filter buttons */}
            <div className="space-y-2 flex-1">
              <h4 className="font-semibold text-sm">筛选:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilter('all')}
  
                >
                  全部 ({achievements.length})
                </Button>
                <Button
                  variant={filter === 'unlocked' ? 'default' : 'outline'}
                  onClick={() => setFilter('unlocked')}
  
                >
                  已解锁 ({stats.unlocked})
                </Button>
                <Button
                  variant={filter === 'locked' ? 'default' : 'outline'}
                  onClick={() => setFilter('locked')}
  
                >
                  未解锁 ({stats.total - stats.unlocked})
                </Button>
                <Select 
                  value={Object.values(AchievementType).includes(filter as AchievementType) ? filter : ''} 
                  onValueChange={(value: AchievementType) => setFilter(value)}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="按类型筛选" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={AchievementType.SPENDING}>💰 消费成就</SelectItem>
                    <SelectItem value={AchievementType.ITEMS}>🛍️ 物品成就</SelectItem>
                    <SelectItem value={AchievementType.COMPANIES}>🏢 公司成就</SelectItem>
                    <SelectItem value={AchievementType.CHALLENGES}>🏆 挑战成就</SelectItem>
                    <SelectItem value={AchievementType.TIME}>⏰ 时间成就</SelectItem>
                    <SelectItem value={AchievementType.SPECIAL}>⭐ 特殊成就</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">排序:</h4>
              <Select value={sort} onValueChange={(value: SortType) => setSort(value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rarity">按稀有度</SelectItem>
                  <SelectItem value="name">按名称</SelectItem>
                  <SelectItem value="progress">按进度</SelectItem>
                  <SelectItem value="unlocked">按解锁状态</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Grid */}
      {filteredAndSortedAchievements.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-xl font-semibold mb-2">没有找到成就</h3>
          <p className="text-muted-foreground">
            尝试调整筛选条件或开始游戏来解锁成就
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredAndSortedAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      )}

      {/* Results info */}
      <div className="text-center text-sm text-muted-foreground">
        显示 {filteredAndSortedAchievements.length} 个成就
        {filter !== 'all' && (
          <span> (已筛选)</span>
        )}
      </div>
    </div>
  )
}