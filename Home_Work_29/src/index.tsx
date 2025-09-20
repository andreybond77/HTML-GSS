// src/types/index.ts
import { Currency } from '../data'; // Импортируем тип Currency из data.ts

// Основной интерфейс продукта
export interface Product {
  id: number;
  name: string;
  description: string;
  // Цены теперь хранятся в объекте с ключами для каждой валюты
  prices: {
    shmeckles: number;
    credits: number;
    flurbos: number;
  };
  imageUrl: string;
}

// Интерфейс для элемента корзины
export interface CartItem {
  product: Product;
  quantity: number;
}

// Интерфейс для универсальной кнопки
export interface StandardButtonProps {
  BGcolor: string;
  icon?: string; // Иконка опциональна
  title: string;
  btnType: 'iconButton' | 'textButton';
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

// Интерфейс для карточки продукта
export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
}

// Интерфейс для модального окна продукта
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart?: (product: Product) => void;
}

// Интерфейс для модального окна корзины
export interface CartProps {
  cartItems: CartItem[];
  onIncrement: (product: CartItem['product']) => void;
  onDecrement: (product: CartItem['product']) => void;
  onRemove: (productId: number) => void;
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

// Интерфейс для контекста валюты
export interface CurrencyContextType {
  currentCurrency: Currency; // Тип Currency импортируется из data.ts
  setCurrency: (currency: Currency) => void;
}