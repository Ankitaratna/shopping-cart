import React, { useState, useEffect } from "react";

interface ShippingDetail {
  customer_id: string;
  name: string;
  address: string;
  city: string;
  postal_code: number;
  country: string;
  phone: string;
}

const ShippingDetails: React.FC = () => {
  const [shippingDetails, setShippingDetails] = useState<ShippingDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const simulateApiCall = (): Promise<ShippingDetail[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const simulatedData: ShippingDetail[] = [
            {
              customer_id: "12345",
              name: "John Doe",
              address: "123 Main St",
              city: "New York",
              postal_code: 10001,
              country: "United States",
              phone: "123 - 456 - 7890",
            },
          ];
          resolve(simulatedData);
        }, 1000);
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
            <div key={shipping?.customer_id}>
              <p>Name: {shipping?.name}</p>
              <p>Address: {shipping?.address}</p>
              <p>City: {shipping?.city}</p>
              <p>Postal Code: {shipping?.postal_code}</p>
              <p>Country: {shipping?.country}</p>
              <p>Phone: {shipping?.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShippingDetails;
