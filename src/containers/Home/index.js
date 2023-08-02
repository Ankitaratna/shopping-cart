import React, { useEffect, useState } from "react";
import HomeComponent from "../../components/home";
import useShoppingCart from "../../customHooks/useCart";
// Assuming you're using React Router

const Home = () => {
  const { cartItems, addToCart, removeFromCart, calculateTotal } =
  useShoppingCart();
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch()
        .then((res) => res.json())
        .then((res) => setCatalogItems(res));
    })();
  }, []);

  const props = {
    catalogItems: { catalogItems },
    cartItems: { cartItems },
    addToCart: { addToCart },
    removeFromCart: { removeFromCart },
    calculateTotal: { calculateTotal },
  };

  return <HomeComponent {...props} />;
};

export default Home;
