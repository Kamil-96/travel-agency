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
    it('should return null if there is no or one arg', () => {
      expect(promoPrice()).toBe(null);
      expect(promoPrice(10)).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(promoPrice('abc', 'xyz')).toBe(null);
      expect(promoPrice({}, [])).toBe(null);
    });

    it('should return null if arg is lower than zero or second arg is greater than 100 or equal to zero', () => {
      expect(promoPrice(-2, -5)).toBe(null);
      expect(promoPrice(30, -1)).toBe(null);
      expect(promoPrice(50, 110)).toBe(null);
      expect(promoPrice(10000, 0)).toBe(null);
    });

    it('should return correct number', () => {
      expect(promoPrice(30000, 20)).toBe(24000);
      expect(promoPrice(25000, 100)).toBe(0);
      expect(promoPrice(50000, 50)).toBe(25000);
      expect(promoPrice(10000, 1)).toBe(9900);
    });
  });
});
