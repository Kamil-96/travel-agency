import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('promoPrice', () => {
    it('should return undefined if there is no or one arg', () => {
      expect(promoPrice()).toBe(undefined);
      expect(promoPrice(10)).toBe(undefined);
    });

    it('should return undefined if price is not a string', () => {
      expect(promoPrice(10, 15)).toBe(undefined);
      expect(promoPrice({}, 20)).toBe(undefined);
    });

    it('should return undefined if discount is greater than 100 or equal to zero', () => {
      expect(promoPrice('$20', -5)).toBe(undefined);
      expect(promoPrice('$30', -1)).toBe(undefined);
      expect(promoPrice('$50', 110)).toBe(undefined);
      expect(promoPrice('$10,000', 0)).toBe(undefined);
    });

    it('should return correct number', () => {
      expect(promoPrice('$30,000', 20)).toBe('$24,000');
      expect(promoPrice('$25,000', 99)).toBe('$250');
      expect(promoPrice('$50,000', 50)).toBe('$25,000');
      expect(promoPrice('$10,000', 1)).toBe('$9,900');
    });
  });
});
