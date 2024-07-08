const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return formattedPrice;
};

export default formatPrice;
