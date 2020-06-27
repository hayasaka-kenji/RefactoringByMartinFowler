export { price };

function price(order) {
  // price = base prise -  quantity discount + shipping
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity) * order.itemPrice * 0.01;
  return basePrice - quantityDiscount + shipping;
}