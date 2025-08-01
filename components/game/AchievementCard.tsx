'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Achievement, AchievementType } from '@/types/game'
import { getRarityColor, getRarityLabel } from '@/data/achievements'
import { formatMoney } from '@/data/gameData'
import { useLanguageStore } from '@/store/languageStore'

interface AchievementCardProps {
  achievement: Achievement
}

const getTypeIcon = (type: AchievementType): string => {
  switch (type) {
    case AchievementType.SPENDING:
      return '💰'
    case AchievementType.ITEMS:
      return '🛍️'
    case AchievementType.COMPANIES:
      return '🏢'
    case AchievementType.CHALLENGES:
      return '🏆'
    case AchievementType.TIME:
      return '⏰'
    case AchievementType.SPECIAL:
      return '⭐'
    default:
      return '🏅'
  }
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { t } = useLanguageStore()
  const progressPercentage = achievement.maxProgress > 0 
    ? Math.min(100, (achievement.progress / achievement.maxProgress) * 100)
    : 0

  const formatProgress = (progress: number, maxProgress: number, type: AchievementType): string => {
    if (type === AchievementType.SPENDING && maxProgress >= 1000000) {
      return `${formatMoney(progress)} / ${formatMoney(maxProgress)}`
    }
    return `${progress.toLocaleString()} / ${maxProgress.toLocaleString()}`
  }

  return (
    <Card className={`transition-all duration-200 ${
      achievement.isUnlocked 
        ? 'border-green-500 bg-green-50 dark:bg-green-950/20 hover:shadow-lg' 
        : progressPercentage > 0
          ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/20 hover:shadow-md'
          : 'opacity-70 hover:opacity-90'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`text-3xl ${achievement.isUnlocked ? 'animate-pulse' : ''}`}>
              {achievement.isUnlocked ? achievement.icon : '🔒'}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg leading-tight flex items-center gap-2">
                {achievement.name}
                {achievement.isUnlocked && (
                  <Badge className="bg-green-600 text-white">
                    ✓ {t?.achievements?.unlocked || '已解锁'}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-sm mt-1">
                {achievement.description}
              </CardDescription>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <Badge className={`${getRarityColor(achievement.rarity)} text-white`}>
              {getRarityLabel(achievement.rarity)}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {getTypeIcon(achievement.type)} 
              {achievement.type === AchievementType.SPENDING && (t?.achievements?.spending || '消费')}
              {achievement.type === AchievementType.ITEMS && (t?.achievements?.items || '物品')}
              {achievement.type === AchievementType.COMPANIES && (t?.achievements?.companies || '公司')}
              {achievement.type === AchievementType.CHALLENGES && (t?.challenges?.title || '挑战')}
              {achievement.type === AchievementType.TIME && (t?.achievements?.time || '时间')}
              {achievement.type === AchievementType.SPECIAL && (t?.achievements?.special || '特殊')}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Progress Bar */}
          {achievement.maxProgress > 1 && (
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>{t?.achievements?.progress || '进度'}</span>
                <span>{formatProgress(achievement.progress, achievement.maxProgress, achievement.type)}</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="text-xs text-center mt-1 text-muted-foreground">
                {progressPercentage.toFixed(1)}% {t?.achievements?.completed || '完成'}
              </div>
            </div>
          )}

          {/* Reward */}
          {achievement.reward && (
            <div className={`p-2 rounded-lg border ${
              achievement.isUnlocked 
                ? 'bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700' 
                : 'bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600'
            }`}>
              <div className="text-sm font-medium">{t?.achievements?.reward || '奖励'}:</div>
              <div className="text-sm text-muted-foreground">
                {achievement.reward.description}
              </div>
            </div>
          )}

          {/* Unlock timestamp */}
          {achievement.isUnlocked && achievement.unlockedAt && (
            <div className="text-xs text-muted-foreground text-center">
              {t?.achievements?.unlocked_at || '解锁时间'}: {new Date(achievement.unlockedAt).toLocaleString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}