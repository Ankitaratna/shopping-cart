import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import Checkout from "../../components/checkout";
import useCheckoutCalculations from "../../customHooks/useCart";
const FinalCheckout = () => {
  const { cartItems ,removeFromCart} = useContext(CartContext);
  const { discountedList, discountedTotal, cartTotal } =
    useCheckoutCalculations(cartItems);
  let props = {
    cartItems,
    discountedList,
    discountedTotal,
    cartTotal,
    removeFromCart
  };
  return <Checkout {...props} />;
};

export default FinalCheckout;
