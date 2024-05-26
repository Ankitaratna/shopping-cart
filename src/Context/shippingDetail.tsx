import React, { createContext, useState, ReactNode } from "react";

interface ShippingDetailType {
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

interface ShippingDetailProviderProps {
  children: ReactNode;
}

interface ShippingDetailContextProps {
  addShippingDetail: Function;
  editShippingDetail: Function;
  shippingDetail: ShippingDetailType;
}

export const ShippingDetailContext = createContext(undefined);

export const ShippingDetailProvider: React.FC<ShippingDetailProviderProps> = ({
  children,
}) => {
  const [shippingDetail, setShippingDetail] = useState<ShippingDetailType>(
    {} as ShippingDetailType
  );

  const addShippingDetail = (shippingDetail: ShippingDetailType) => {
    setShippingDetail(shippingDetail);
  };

  const editShippingDetail = (props: any) => {
    const { fieldKey, value } = props;
    let tempShippingDetail = { ...shippingDetail, [fieldKey]: value };
    setShippingDetail(tempShippingDetail);
  };

  const contextValue: ShippingDetailContextProps = {
    addShippingDetail,
    editShippingDetail,
    shippingDetail,
  };

  return (
    <ShippingDetailContext.Provider value={contextValue}>
      {children}
    </ShippingDetailContext.Provider>
  );
};
