import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  if (context === undefined) {
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
    const savedLanguage = localStorage.getItem('app_language');
    return (savedLanguage as Language) || 'es';
  });

  const { t } = useTranslation(language);

  useEffect(() => {
    if (restaurant?.settings?.language) {
      const restaurantLanguage = restaurant.settings.language as Language;
      setLanguageState(restaurantLanguage);
      localStorage.setItem('app_language', restaurantLanguage);
    }
  }, [restaurant?.settings?.language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);

    if (!restaurant) return;

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

    const currentAuth = loadFromStorage('currentAuth', null);
    if (currentAuth && currentAuth.restaurant) {
      currentAuth.restaurant.settings = currentAuth.restaurant.settings || {};
      currentAuth.restaurant.settings.language = lang;
      saveToStorage('currentAuth', currentAuth);
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: (key: string) => t(key),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};