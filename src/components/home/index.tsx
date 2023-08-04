import React from "react";
import "./index.scss";
import CatalogItemCard from "../catalogCardItem";

interface CatalogItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface HomeProps {
  catalogItems: CatalogItem[];
  cartItems: CatalogItem[];
  addToCart: (item: CatalogItem) => void;
  removeFromCart: (itemId: number) => void;
  iscataloglistLoading: boolean;
}

const Home: React.FC<HomeProps> = (props) => {
  const { catalogItems, addToCart, removeFromCart, iscataloglistLoading } =
    props;
  return (
    <div className="home-wrapper">
      <div className="header">
        <h1>Welcome to Xyntra!</h1>
        <p>Explore our wide range of products and find great deals.</p>
      </div>

      <div className="catalog-wrapper">
        {iscataloglistLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <CatalogItemCard
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : catalogItems.map((item: CatalogItem) => (
              <CatalogItemCard
                key={`${item?.id}${item?.title}`}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
