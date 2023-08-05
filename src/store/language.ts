import { type language, type LanguageStore } from '@/types'
import { create } from 'zustand'
import en from '@/data/translate/en/data.json'

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: en,
  setLanguage: (language: language) => { set(() => ({ language })) }
}))
