import { useState } from 'react';

const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotal,
  };
};

export default useShoppingCart;
