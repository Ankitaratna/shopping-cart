import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/cartContext";
import Checkout from "../../components/checkout";
import useCheckoutCalculations from "../../customHooks/useCart";
const FinalCheckout = (props) => {
  const { isSubmitLoading, goPreviousPage } = props;
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { discountedList, discountedTotal, cartTotal } =
    useCheckoutCalculations(cartItems);
    useEffect(() => {
      if (cartItems.length === 0) {
        goPreviousPage({ pageNo: 1, page: "shipping" });
      }
    }, [cartItems]);
  useEffect(() => {
    if (isSubmitLoading) clearCart();
  }, [isSubmitLoading]);

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
