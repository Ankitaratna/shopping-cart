import React, { useState } from 'react';
import Home from './containers/Home';
import Checkout from './containers/checkout';
import {ErrorProvider} from './Provider/index';
const ShoppingApp = () => {
  const [view, setView] = useState('cart'); // 'cart' or 'checkout'

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <ErrorProvider>
    <div>
      <h1>Shopping App</h1>
      <button onClick={() => handleViewChange('cart')}>View Cart</button>
      <button onClick={() => handleViewChange('checkout')}>Checkout</button>

      {view === 'cart' && <Home />}
      {view === 'checkout' && <Checkout />}
    </div>
    </ErrorProvider>
  );
};

export default ShoppingApp;
