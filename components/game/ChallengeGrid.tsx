'use client'

import React from 'react'
import { ChallengeCard } from './ChallengeCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useGameStore } from '@/store/gameStore'
import { useLanguageStore } from '@/store/languageStore'
import { INITIAL_CHALLENGES } from '@/data/gameData'
import { getChallengeTranslation } from '@/lib/i18n/challengeTranslations'

export const ChallengeGrid: React.FC = () => {
  const { completedChallenges, currentChallenge } = useGameStore()
  const { t, language } = useLanguageStore()

  const completedChallengeIds = new Set(completedChallenges.map(c => c.id))
  const totalChallenges = INITIAL_CHALLENGES.length
  const completedCount = completedChallenges.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">{t.challenges.title}</h2>
        <p className="text-muted-foreground">
          {t.challenges.description}
        </p>
      </div>

      {/* Progress Summary */}
      <Card className="border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
            🏆 {t.challenges.challenge_progress}
          </CardTitle>
          <CardDescription>
            {t.challenges.track_completion}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {completedCount}/{totalChallenges}
              </div>
              <div className="text-sm text-muted-foreground">{t.challenges.completed_count}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {currentChallenge ? '1' : '0'}
              </div>
              <div className="text-sm text-muted-foreground">{t.challenges.active_count}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {Math.round((completedCount / totalChallenges) * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">{t.challenges.progress_percentage}</div>
            </div>
          </div>
          
          {/* Current Challenge Status */}
          {currentChallenge && (
            <div className="mt-4 text-center">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                {t.challenges.currently_running}: {getChallengeTranslation(currentChallenge.id, language).name}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Instructions */}
      {completedCount === 0 && !currentChallenge && (
        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">{t.challenges.ready_for_challenge}</h3>
            <p className="text-muted-foreground mb-4">
              {t.challenges.challenge_excitement}
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <div><strong>{t.challenges.speed_challenges}:</strong> {t.challenges.speed_challenges_desc}</div>
              <div><strong>{t.challenges.ultimate_challenge_title}:</strong> {t.challenges.ultimate_challenge_desc}</div>
              <div><strong>{t.challenges.themed_challenges}:</strong> {t.challenges.themed_challenges_desc}</div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INITIAL_CHALLENGES.map((challenge) => {
          // Get translated challenge data
          const translation = getChallengeTranslation(challenge.id, language)
          
          // Create challenge with completion status and translations
          const challengeWithStatus = {
            ...challenge,
            name: translation.name,
            description: translation.description,
            completed: completedChallengeIds.has(challenge.id),
            bestTime: completedChallenges.find(c => c.id === challenge.id)?.bestTime || null
          }
          
          return (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challengeWithStatus} 
            />
          )
        })}
      </div>

      {/* Challenge Tips */}
      <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="text-amber-700 dark:text-amber-300 flex items-center gap-2">
            💡 {t.challenges.challenge_tips}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">{t.challenges.speed_is_key}</h4>
              <p className="text-muted-foreground">
                {t.challenges.speed_tip}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.challenges.use_bulk_purchases}</h4>
              <p className="text-muted-foreground">
                {t.challenges.bulk_tip}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.challenges.plan_strategy}</h4>
              <p className="text-muted-foreground">
                {t.challenges.strategy_tip}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t.challenges.practice_makes_perfect}</h4>
              <p className="text-muted-foreground">
                {t.challenges.practice_tip}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Status */}
      {completedCount > 0 && (
        <Card className="bg-gradient-to-r from-gold/10 to-yellow-500/10 border-yellow-300">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-4">🏅</div>
            <h3 className="text-lg font-semibold mb-2">
              {completedCount === totalChallenges ? 
                t.challenges.challenge_master : 
                `${completedCount} ${completedCount > 1 ? t.challenges.challenges_complete_plural : t.challenges.challenges_complete} ${t.challenges.complete_suffix}`
              }
            </h3>
            <p className="text-muted-foreground">
              {completedCount === totalChallenges ? 
                t.challenges.challenge_master_desc :
                `${t.challenges.keep_going} ${totalChallenges - completedCount} ${(totalChallenges - completedCount) > 1 ? t.challenges.more_plural_to_go : t.challenges.more_to_go}`
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}