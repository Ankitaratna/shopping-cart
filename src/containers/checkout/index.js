import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import your CartContext

const FinalCheckout = () => {
  const { cartItems, discount } = useContext(CartContext); // Assuming cartItems and discount are available from your context

  const calculateItemDiscountedPrice = (item) => {
    return item.price - (item.price * discount);
  };

  const calculateTotal = () => {
    let totalAmount = 0;
    let totalDiscount = 0;
    let totalDiscountedAmount = 0;

    cartItems.forEach(item => {
      totalAmount += item.price;
      const discountedPrice = calculateItemDiscountedPrice(item);
      totalDiscount += (item.price - discountedPrice);
      totalDiscountedAmount += discountedPrice;
    });

    return {
      totalAmount,
      totalDiscount,
      totalDiscountedAmount
    };
  };

  const { totalAmount, totalDiscount, totalDiscountedAmount } = calculateTotal();

  return (
    <div>
      <h2>Final Checkout</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Discount Percent</th>
            <th>Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{(discount * 100).toFixed(0)}%</td>
              <td>${calculateItemDiscountedPrice(item).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>Total Price: ${totalAmount.toFixed(2)}</p>
        <p>Total Discount: ${totalDiscount.toFixed(2)}</p>
        <p>Discounted Total Price: ${totalDiscountedAmount.toFixed(2)}</p>
      </div>

      <button>Place Order</button>
    </div>
  );
};

export default FinalCheckout;
