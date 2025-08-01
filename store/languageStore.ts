import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Language } from '@/types/i18n'
import { defaultLanguage, isValidLanguage, getTranslation } from '@/lib/i18n'

interface LanguageState {
  language: Language
  t: ReturnType<typeof getTranslation>
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: defaultLanguage,
      t: getTranslation(defaultLanguage),
      
      setLanguage: (language: Language) => {
        if (isValidLanguage(language)) {
          set({
            language,
            t: getTranslation(language)
          })
        }
      }
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Update translation object after rehydration
          state.t = getTranslation(state.language)
        }
      }
    }
  )
)