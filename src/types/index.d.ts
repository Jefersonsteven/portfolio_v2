import type en from "@/data/translate/en/data.json";
export interface MenuStore {
  menu: HTMLElement | null;
  setMenu: (element: HTMLElement) => void;
}

export interface Coordinates {
  coordinates: {
    x: number;
    y: number;
  };
}

export type language = typeof en;

export interface LanguageStore {
  language: language;
  setLanguage: (language: es) => void;
}
export interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface Ip {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org?: string;
  postal?: string;
  timezone: string;
}

export interface View extends Ip {
  id: string;
}

export type Views = number;

export interface Certificate {
  id: string;
  name: string;
  url: string;
  category: string;
  institution: string;
  date: Date;
}

export interface Certificates {
  page: number;
  pageSize: number;
  totalPages: number;
  certificates: Certificate[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ErrorContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
