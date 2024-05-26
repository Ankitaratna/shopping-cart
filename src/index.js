import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingApp from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./Context/cartContext";
import { ShippingDetailProvider } from "./Context/shippingDetailContext";
import { PageStateProvider } from "./Context/pageStateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ShippingDetailProvider>
        <PageStateProvider>
          <ShoppingApp />
        </PageStateProvider>
      </ShippingDetailProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
