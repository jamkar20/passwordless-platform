import { timingSafeEqual } from 'crypto';
import { hotp } from './hotp';

export function totp(
  secret: Buffer,
  time = Date.now(),
  step = 30,
  digits = 6,
): string {
  const counter = Math.floor(time / 1000 / step);
  return hotp(secret, counter, digits);
}

export function verifyTotp(secret: Buffer, token: string, window = 1): boolean {
  const now = Date.now();

  for (let w = -window; w <= window; w++) {
    const time = now + w * 30_000;
    const generated = totp(secret, time);
    if (timingSafeEqual(Buffer.from(generated), Buffer.from(token))) {
      return true;
    }
  }

  return false;
}
