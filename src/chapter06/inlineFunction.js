export { rating };

function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}