import React from "react";
import Home from "./containers/Home";
import Checkout from "./containers/checkout";
import { ErrorProvider } from "./Context/errorContext";
import { CartProvider } from "./Context/cartContext";
import useCurrentPage from "./customHooks/useCurrentPage";
import ShippingDetails from "./containers/shippingDetails";
import "./App.scss";

const ShoppingApp = () => {
  const { currentState, goPreviousPage, goNextPage } = useCurrentPage();
  return (
    <ErrorProvider>
      <CartProvider>
        <div className="app-wrapper">
          <div className="page-switch-cta">
            {currentState?.page !== "home" ? (
              <button onClick={() => goPreviousPage(currentState)}>Back</button>
            ) : (
              <div></div>
            )}
            {currentState?.page !== "checkout" ? (
              <button onClick={() => goNextPage(currentState)}>Continue</button>
            ) : (
              ""
            )}
          </div>

          {currentState?.page === "home" && <Home />}
          {currentState?.page === "shipping" && <ShippingDetails />}
          {currentState?.page === "checkout" && <Checkout />}
        </div>
      </CartProvider>
    </ErrorProvider>
  );
};

export default React.memo(ShoppingApp);
