import React from "react";
type formatPriceProps = {
  price: number;
};
const FormatPrice: React.FC<formatPriceProps> = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return <>{formattedPrice}</>;
};

export default FormatPrice;
