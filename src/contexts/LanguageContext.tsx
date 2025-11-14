import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, useTranslation } from '../utils/translations';
import { useAuth } from './AuthContext';
import { loadFromStorage, saveToStorage } from '../data/mockData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { restaurant } = useAuth();

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'es';
  });

  const { t } = useTranslation(language);

  // Load restaurant language settings on login
  useEffect(() => {
    if (restaurant?.settings?.language) {
      const lang = restaurant.settings.language as Language;
      setLanguageState(lang);
      localStorage.setItem('app_language', lang);
    }
  }, [restaurant]);

  // Stable version of setLanguage (Fix for Fast Refresh)
  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang);
      localStorage.setItem('app_language', lang);

      // Update restaurant settings if user is logged in
      if (restaurant) {
        const restaurants = loadFromStorage('restaurants', []);
        const updatedRestaurants = restaurants.map((r: any) =>
          r.id === restaurant.id
            ? {
                ...r,
                settings: { ...r.settings, language: lang },
                updated_at: new Date().toISOString(),
              }
            : r
        );
        saveToStorage('restaurants', updatedRestaurants);

        // Update stored auth
        const currentAuth = loadFromStorage('currentAuth', null);
        if (currentAuth) {
          currentAuth.restaurant.settings.language = lang;
          saveToStorage('currentAuth', currentAuth);
        }
      }
    },
    [restaurant] // stable deps; consistent with React Fast Refresh
  );

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
