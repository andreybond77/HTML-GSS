// src/contexts/CurrencyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency } from '../data'; // Импортируем тип Currency
import { CurrencyContextType } from '../types'; // Импортируем тип контекста

// 1. Создаем контекст с начальным значением undefined
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// 2. Создаем провайдер
interface CurrencyProviderProps {
  children: ReactNode; // Тип для children
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  // Используем useState для хранения текущей валюты, по умолчанию 'shmeckles'
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('shmeckles');

  // Функция для смены валюты
  const setCurrency = (currency: Currency) => {
    setCurrentCurrency(currency);
  };

  // Значение, которое будет доступно через контекст
  const contextValue: CurrencyContextType = {
    currentCurrency,
    setCurrency,
  };

  // Возвращаем провайдер, оборачивающий children
  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

// 3. Создаем кастомный хук для удобного доступа к контексту
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  // Проверка, что хук используется внутри провайдера
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};