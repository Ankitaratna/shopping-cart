import { useState, useEffect } from "react";

const useCheckoutCalculations = (cartItems) => {
  const [discountedList, setDiscountedList] = useState([]);
  const [discountedTotal, setDiscountedTotal] = useState();
  const [cartTotal] = useState(
    cartItems ? cartItems.reduce((total, item) => total + item.price, 0) : 0
  );

  useEffect(() => {
    if (cartItems) {
      setDiscountedTotal(cartTotal - 0.1 * cartTotal);
      let tempDiscountedList = cartItems.map((item) => ({
        ...item,
        discountedPrice: item.price - 0.1 * item.price,
      }));
      setDiscountedList(tempDiscountedList);
    }
  }, [cartItems]);

  return { discountedList, discountedTotal, cartTotal };
};

export default useCheckoutCalculations;
