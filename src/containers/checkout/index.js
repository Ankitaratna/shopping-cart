import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/cartContext";
import Checkout from "../../components/checkout";
import useCheckoutCalculations from "../../customHooks/useCart";
const FinalCheckout = (props) => {
  const { isSubmitLoading } = props;
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { discountedList, discountedTotal, cartTotal } =
    useCheckoutCalculations(cartItems);
  useEffect(() => {
    clearCart();
  }, [isSubmitLoading, clearCart]);

  let CheckoutProps = {
    cartItems,
    discountedList,
    discountedTotal,
    cartTotal,
    removeFromCart,
    isSubmitLoading,
  };
  return <Checkout {...CheckoutProps} />;
};

export default FinalCheckout;
