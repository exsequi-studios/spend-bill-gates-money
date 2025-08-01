'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { useGameStore, useGameTick } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { formatMoney, formatTime } from '@/data/gameData'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'

export const GameHeader: React.FC = () => {
  const { 
    money, 
    initialMoney, 
    isGameComplete, 
    currentChallenge,
    companies,
    resetGame,
    stats
  } = useGameStore()
  
  const { t } = useLanguageStore()

  // Initialize game tick for passive income
  useGameTick()

  const [currentTime, setCurrentTime] = useState(Date.now())

  // Update time every second for challenge timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  // Calculate spending progress
  const spentMoney = initialMoney - money
  const spendingProgress = (spentMoney / initialMoney) * 100

  // Calculate total passive income
  const totalPassiveIncome = companies.reduce((total, company) => {
    return total + (company.currentIncomePerSecond * company.owned)
  }, 0)

  // Calculate challenge timer if active
  let challengeTimeElapsed = 0
  let challengeTimeRemaining = 0
  if (currentChallenge?.startTime) {
    challengeTimeElapsed = (currentTime - currentChallenge.startTime) / 1000
    challengeTimeRemaining = Math.max(0, currentChallenge.targetTime - challengeTimeElapsed)
  }

  return (
    <div className="space-y-4">
      {/* Header Controls */}
      <div className="flex justify-end gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <span className="text-lg">🔄</span>
              <span className="sr-only">{t.reset_game}</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t.reset_dialog.title}</AlertDialogTitle>
              <AlertDialogDescription>
                {t.reset_dialog.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t.reset_dialog.cancel}</AlertDialogCancel>
              <AlertDialogAction 
                onClick={resetGame}
                className="bg-red-600 hover:bg-red-700"
              >
                {t.reset_dialog.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      {/* Game Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Spending Progress Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>{t.stats.money_spent}</span>
                <span>{formatMoney(spentMoney)} ({spendingProgress.toFixed(1)}%)</span>
              </div>
              <Progress value={spendingProgress} className="h-3" />
              <div className="text-xs text-center mt-1 text-muted-foreground">
                {money <= 0 ? t.messages.game_won : `${formatMoney(money)} ${t.money.toLowerCase()}`}
              </div>
            </div>

            {/* Game Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stats.itemsPurchased.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">{t.stats.items_purchased}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {stats.companiesOwned}
                </div>
                <div className="text-xs text-muted-foreground">{t.stats.companies_owned}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {formatMoney(stats.totalEarned)}
                </div>
                <div className="text-xs text-muted-foreground">{t.stats.total_earned}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {Math.floor(stats.timePlayed / 60)}m
                </div>
                <div className="text-xs text-muted-foreground">{t.stats.time_played}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Challenge Display */}
      {currentChallenge && (
        <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <Badge className="bg-green-600">
                🏃‍♂️ {t.challenges.challenge_active}: {currentChallenge.name}
              </Badge>
              <div className="text-sm text-muted-foreground">
                {currentChallenge.description}
              </div>
              
              {currentChallenge.targetTime !== Infinity && (
                <div className="space-y-1">
                  <div className="text-lg font-bold">
                    {challengeTimeRemaining > 0 
                      ? `⏰ ${t.challenges.time_remaining}: ${formatTime(challengeTimeRemaining)}`
                      : `⏰ ${t.stats.time_up}`
                    }
                  </div>
                  <Progress 
                    value={Math.min(100, (challengeTimeElapsed / currentChallenge.targetTime) * 100)} 
                    className="h-2"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Complete */}
      {isGameComplete && (
        <Card className="border-gold bg-gradient-to-r from-yellow-400 to-gold text-white">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <div className="text-4xl">🎉</div>
              <div className="text-2xl font-bold">Congratulations!</div>
              <div className="text-lg">
                You&apos;ve successfully spent all of Bill Gates&apos; money!
              </div>
              {currentChallenge?.startTime && (
                <div className="text-sm">
                  Total time: {formatTime(challengeTimeElapsed)}
                </div>
              )}
              <Button 
                onClick={resetGame}
                className="mt-4 bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🔄 Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}