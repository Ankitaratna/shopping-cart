import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import "./index.scss";
import CloseIcon from "@mui/icons-material/Close";

interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  discountedPrice: number;
  
}

interface CheckoutProps {
  cartItems: CartItem[];
  discountedList: CartItem[]; // You need to define this type
  discountedTotal: number; // You need to define this type
  cartTotal: number; // You need to define this type
  removeFromCart:(itemId: number) => void;
}

const Checkout: React.FC<CheckoutProps> = (props) => {
  const { discountedList, discountedTotal, cartTotal,removeFromCart } = props;

  return (
    <div className="checkout-wrapper">
      <h2 className="header">Checkout</h2>
      {discountedList.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            margin: "1rem",
            padding: "1rem",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            sx={{ height: 150, width: 200, padding: "10px" }}
            image={item?.image}
            title={item?.title}
          />
          <Box sx={{ display: "flex", width: "30vw" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6" className="item-title">
                {item?.title}
              </Typography>
              <Typography variant="body1">Price: ${item?.price}</Typography>
              <Typography variant="body1">
                Discount: ${(item?.price - item?.discountedPrice).toFixed(2)}
              </Typography>
              <Typography variant="body1">Quantity: {}</Typography>
            </CardContent>
            <IconButton
              size="small"
              sx={{ width: "15px", marginBottom: "auto" }}
                onClick={() => removeFromCart(item.id)}
              aria-label="Remove Item"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Card>
      ))}

      <div className="cart-total">
        <div className="label">
          <Typography variant="subtitle1" className="item-title">
            Cart Total:
          </Typography>
          <Typography variant="subtitle1" className="item-title">
            Cart Discount:
          </Typography>
          <Typography variant="subtitle1" className="item-title">
            Total Payable:
          </Typography>
        </div>
        <div className="value">
          <Typography variant="subtitle1" className="item-title">
            ${cartTotal || 0}
          </Typography>
          <Typography variant="subtitle1" className="item-title">
            ${cartTotal - discountedTotal || 0}
          </Typography>
          <Typography variant="subtitle1" className="item-title">
            ${discountedTotal || 0}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
