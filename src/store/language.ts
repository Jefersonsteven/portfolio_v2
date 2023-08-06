import { type language, type LanguageStore } from '@/types'
import { create } from 'zustand'
import es from '@/data/translate/es/data.json'

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: es,
  setLanguage: (language: language) => { set(() => ({ language })) }
}))
