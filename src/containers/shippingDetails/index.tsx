import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/cartContext";

interface ShippingDetail {
  id: number;
  name: string;
  address: string;
  // ... other properties
}

const ShippingDetails: React.FC = () => {
  const [shippingDetails, setShippingDetails] = useState<ShippingDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, "cIIIIII");
  useEffect(() => {
    // Simulate fetching shipping details from an API after a delay
    const simulateApiCall = (): Promise<ShippingDetail[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const simulatedData: ShippingDetail[] = [
            { id: 1, name: "John Doe", address: "123 Main St" },
            { id: 2, name: "Jane Smith", address: "456 Elm St" },
            // ... more shipping details
          ];
          resolve(simulatedData);
        }, 2000); // Simulating a 2-second delay
      });
    };

    simulateApiCall()
      .then((data) => {
        setShippingDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shipping details:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Shipping Details</h2>
      {isLoading ? (
        <p>Loading shipping details...</p>
      ) : (
        <div className="shipping-list">
          {shippingDetails.map((shipping) => (
            <div key={shipping.id}>
              <p>Name: {shipping.name}</p>
              <p>Address: {shipping.address}</p>
              {/* ... other details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShippingDetails;
