// import React, { useState } from "react";

// interface Shipping {
//   fullName: string;
//   address: string;
//   city: string;
//   country: string;
//   postalCode: string;
// }

// // context type that includes state and update function
// interface ShippingContextType {
//   shippingData: Shipping;
//   setShippingData: (data: Shipping) => void;
// }

// const ShippingContext = React.createContext<ShippingContextType>(
//   {} as ShippingContextType
// );

// export const ShippingProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [shippingData, setShippingData] = useState<Shipping>({
//     fullName: "",
//     address: "",
//     city: "",
//     country: "",
//     postalCode: "",
//   });
// };

// return (
//   <ShippingContextType.Provider value = {{Shipping, setShippingData}}>
//   {children}</ShippingContext.Provider>
// )

// export default ShippingContext;
