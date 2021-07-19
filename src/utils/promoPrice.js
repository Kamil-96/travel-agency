export const promoPrice = (price, discount) => {

  if(!price || !discount || typeof price !== 'number' || typeof discount !== 'number' || price < 0 || discount <= 0 || discount > 100) {
    return null;
  } else {
    return price - (discount * (1 / 100) * price);
  }
};
