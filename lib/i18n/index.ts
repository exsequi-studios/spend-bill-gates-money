import { Language, Translation } from '@/types/i18n'
import { en } from './en'
import { zh } from './zh'

export const translations: Record<Language, Translation> = {
  en,
  zh
}

export const defaultLanguage: Language = 'en'

export const supportedLanguages: Language[] = ['en', 'zh']

export const languageNames: Record<Language, string> = {
  en: 'English', 
  zh: '中文'
}

export function getTranslation(language: Language): Translation {
  return translations[language] || translations[defaultLanguage]
}

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language)
}