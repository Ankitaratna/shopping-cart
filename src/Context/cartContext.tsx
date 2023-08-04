import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  setcartItems: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    console.log(item.id);
    if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setcartItems((prevItems) => [...prevItems, { quantity: 1, ...item }]);
    } else {
      let cartIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      let tempCartItems = [...cartItems];
      tempCartItems[cartIndex] = {
        ...tempCartItems[cartIndex],
        quantity: tempCartItems[cartIndex].quantity + 1,
      };
      setcartItems(tempCartItems);
    }
  };

  const removeFromCart = (itemId: number) => {
    setcartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const contextValue: CartContextProps = {
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
