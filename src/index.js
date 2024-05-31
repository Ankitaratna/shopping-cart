import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingApp from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./Context/cartContext";
import { ShippingDetailProvider } from "./Context/shippingDetail";
import { PageContextProvider } from "./Context/pageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ShippingDetailProvider>
        <PageContextProvider>
          <ShoppingApp />
        </PageContextProvider>
      </ShippingDetailProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
