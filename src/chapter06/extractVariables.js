export { price };

function price(order) {
  // 価格 = 本体価格 - 数量　+ 単価
  // price = base prise -  quantity discount + shipping
  const basePrice = order.quantity * order.itemPrice;
  return basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity) * order.itemPrice * 0.01;
}