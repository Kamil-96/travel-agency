import { formatPrice } from './formatPrice';

export const promoPrice = (price, discount) => {

  if(typeof price === 'string' && price.includes('$') && discount > 0 && discount < 100) {
    price = price.slice(1).replace(',', '');

    return formatPrice(price - (discount * (1 / 100) * price));
  }
};
