import { base32Encode } from './utils';
import { createHmac, randomBytes } from 'crypto';

export function hotp(secret: Buffer, counter: number, digits = 6): string {
  const buf = Buffer.alloc(8);
  buf.writeBigInt64BE(BigInt(counter));

  const hmac = createHmac('sha1', secret).update(buf).digest();

  const offset = hmac[hmac.length - 1] & 0x0f;

  const code =
    ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);

  return (code % 10 ** digits).toString().padStart(digits, '0');
}

export function generateSecretBase32(): string {
  const bytes = randomBytes(20); // 160-bit
  return base32Encode(bytes);
}
