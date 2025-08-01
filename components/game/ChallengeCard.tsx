'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Challenge } from '@/types/game'
import { formatTime } from '@/data/gameData'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'

interface ChallengeCardProps {
  challenge: Challenge
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const { 
    currentChallenge, 
    startChallenge, 
    resetChallenge,
    money,
    initialMoney
  } = useGameStore()
  
  const { t } = useLanguageStore()

  const [currentTime, setCurrentTime] = useState(Date.now())

  // Update current time every second for active challenges
  useEffect(() => {
    if (currentChallenge?.id === challenge.id && currentChallenge.startTime) {
      const interval = setInterval(() => {
        setCurrentTime(Date.now())
      }, 1000)
      
      return () => clearInterval(interval)
    }
  }, [currentChallenge, challenge.id])

  const isActive = currentChallenge?.id === challenge.id
  const isCompleted = challenge.completed
  
  // Calculate current progress for active challenge
  let progress = 0
  let timeElapsed = 0
  let timeRemaining = 0
  
  if (isActive && currentChallenge?.startTime) {
    timeElapsed = (currentTime - currentChallenge.startTime) / 1000
    timeRemaining = Math.max(0, challenge.targetTime - timeElapsed)
    progress = Math.min(100, (timeElapsed / challenge.targetTime) * 100)
  }

  // Calculate spending progress for challenges
  let spendingProgress = 0
  if (isActive) {
    const totalSpent = initialMoney - money
    
    // Different progress calculations based on challenge type
    if (challenge.id === 'speed_spender_1') {
      spendingProgress = Math.min(100, (totalSpent / 10_000_000_000) * 100) // $10B
    } else if (challenge.id === 'speed_spender_2') {
      spendingProgress = Math.min(100, (totalSpent / 50_000_000_000) * 100) // $50B
    } else if (challenge.id === 'ultimate_challenge') {
      spendingProgress = Math.min(100, (totalSpent / initialMoney) * 100) // All money
    } else if (challenge.id === 'charity_focus') {
      // Calculate charity spending - this would need to be tracked separately
      // For now, we'll use a placeholder
      spendingProgress = 0
    }
  }

  const handleStart = () => {
    if (!isActive && !isCompleted) {
      startChallenge(challenge.id)
    }
  }

  const handleStop = () => {
    if (isActive) {
      resetChallenge()
    }
  }

  const getChallengeIcon = (challengeId: string) => {
    switch (challengeId) {
      case 'speed_spender_1':
      case 'speed_spender_2':
        return '⚡'
      case 'ultimate_challenge':
        return '👑'
      case 'charity_focus':
        return '❤️'
      default:
        return '🏆'
    }
  }

  const getChallengeColor = (challengeId: string) => {
    switch (challengeId) {
      case 'speed_spender_1':
        return 'bg-yellow-500'
      case 'speed_spender_2':
        return 'bg-orange-500'
      case 'ultimate_challenge':
        return 'bg-purple-500'
      case 'charity_focus':
        return 'bg-pink-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <Card className={`transition-all duration-200 ${
      isActive ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 
      isCompleted ? 'border-gold bg-yellow-50 dark:bg-yellow-950/20' : 
      'hover:shadow-lg'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight flex items-center gap-2">
              <span>{getChallengeIcon(challenge.id)}</span>
              {challenge.name}
              {isActive && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  {t.challenges.active}
                </Badge>
              )}
              {isCompleted && (
                <Badge className={`${getChallengeColor(challenge.id)} text-white`}>
                  {t.challenges.completed}
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              {challenge.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Target Time */}
          <div className="text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t.challenges.target_time}:</span>
              <span className="font-medium">
                {challenge.targetTime === Infinity ? t.challenges.no_limit : formatTime(challenge.targetTime)}
              </span>
            </div>
          </div>

          {/* Active Challenge Progress */}
          {isActive && (
            <div className="space-y-3">
              {/* Time Progress */}
              {challenge.targetTime !== Infinity && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t.challenges.time_elapsed}</span>
                    <span>{formatTime(timeElapsed)} / {formatTime(challenge.targetTime)}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="text-xs text-center mt-1 text-muted-foreground">
                    {timeRemaining > 0 ? `${formatTime(timeRemaining)} ${t.challenges.time_remaining}` : t.stats.time_up}
                  </div>
                </div>
              )}

              {/* Spending Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>{t.challenges.spending_progress}</span>
                  <span>{spendingProgress.toFixed(1)}%</span>
                </div>
                <Progress value={spendingProgress} className="h-2" />
              </div>
            </div>
          )}

          {/* Best Time */}
          {challenge.bestTime && (
            <div className="text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{t.challenges.best_time}:</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  {formatTime(challenge.bestTime)}
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            {!isActive && !isCompleted && (
              <Button
                onClick={handleStart}
                className="w-full"

              >
                {t.challenges.start}
              </Button>
            )}
            
            {isActive && (
              <div className="space-y-2">
                <Button
                  onClick={handleStop}
                  variant="outline"
                  className="w-full"
  
                >
                  {t.challenges.stop}
                </Button>
                <div className="text-xs text-center text-muted-foreground">
                  {t.challenges.challenge_active}
                </div>
              </div>
            )}

            {isCompleted && (
              <div className="text-center">
                <Badge className={`${getChallengeColor(challenge.id)} text-white`}>
                  ✓ {t.challenges.complete}
                </Badge>
                {challenge.bestTime && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {t.challenges.completed} in {formatTime(challenge.bestTime)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}