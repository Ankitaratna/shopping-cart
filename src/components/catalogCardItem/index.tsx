import React from "react";
import "./index.scss";
import Skeleton from "@mui/material/Skeleton";

interface CatalogItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface CatalogItemCardProps {
  item?: CatalogItem;
  addToCart: (item: CatalogItem) => void;
  removeFromCart: (itemId: number) => void;
}

const CatalogItemCard: React.FC<CatalogItemCardProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  const handleAddToCart = (item: CatalogItem) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(item.id);
  };

  if (!item) {
    return (
      <div className="catalog-item-card">
        <Skeleton
          variant="rectangular"
          height={280}
          width="100%"
          animation={"wave"}
        >
          <img src={""} alt={""} className="item-image" loading="lazy" />
        </Skeleton>
        <Skeleton variant="text" width="50%" animation={"wave"} height={25}>
          <h3 className="item-title">{""}</h3>
        </Skeleton>
        <Skeleton variant="text" width="100%" animation={"wave"} height={40}>
          <button onClick={() => handleRemoveFromCart(item?.id)}>
            Remove from Cart
          </button>
        </Skeleton>
      </div>
    );
  }

  return (
    <div className="catalog-item-card">
      <img
        src={item?.image}
        alt={item?.title}
        className="item-image"
        loading="lazy"
      />
      <h3 className="item-title">{item?.title} </h3>
      <p className="item-price">${item?.price}</p>
      <div className="item-buttons">
        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default React.memo(CatalogItemCard);
