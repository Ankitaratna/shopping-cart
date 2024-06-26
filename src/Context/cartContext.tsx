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
  discountedPrice: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  setcartItems: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  appState:string;
  setAppState:Function;
  deliveryAddress:DeliveryAdderess;
  setDeliveryAddress:Function;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

interface DeliveryAdderess{
  pin:Number,
  city:string,
  state:string,
  country:string,
  landmark:string,
  address:string

}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);
  const [appState,setAppState]=useState<string>("listing");
  const [deliveryAddress,setDeliveryAddress]=useState();

  const addToCart = (item: CartItem) => {
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
    
    setcartItems((prevItems) =>
      prevItems.filter((item) => {
        if (item.id !== itemId) {
          return item;
        }
      })
    );
  };
  const clearCart = () => {
    setcartItems([]);
  };

  const contextValue: CartContextProps = {
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    clearCart,
    appState,
    setAppState,
    deliveryAddress,
    setDeliveryAddress
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
