import React, { useEffect, useState ,useContext} from "react";
import HomeComponent from "../../components/home";
import {CartContext} from '../../Context/cartContext';

interface CatalogItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Home: React.FC<any> = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([]);
  const [iscataloglistLoading, setiscataloglistLoading] =
    useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setiscataloglistLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setCatalogItems(data);
      setiscataloglistLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (cartItems?.length) {
      props.setIsContinueDisabled(false);
    }
  }, [cartItems,props]);

  const homeComponentprops = {
    catalogItems,
    cartItems,
    addToCart,
    removeFromCart,
    iscataloglistLoading,
  };

  return <HomeComponent {...homeComponentprops} />;
};

export default React.memo(Home);
