const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function base32Decode(input: string): Buffer {
  let bits = '';
  let value = '';

  input = input.replace(/=+$/, '').toUpperCase();

  for (const char of input) {
    const idx = BASE32_ALPHABET.indexOf(char);
    if (idx === -1) continue;
    bits += idx.toString(2).padStart(5, '0');
  }

  for (let i = 0; i + 8 <= bits.length; i += 8) {
    value += String.fromCharCode(parseInt(bits.substring(i, i + 8), 2));
  }

  return Buffer.from(value, 'binary');
}

export function base32Encode(buffer: Buffer): string {
  let bits = '';
  let output = '';

  for (const byte of buffer) {
    bits += byte.toString(2).padStart(8, '0');
  }

  for (let i = 0; i < bits.length; i += 5) {
    const chunk = bits.substring(i, i + 5);
    if (chunk.length < 5) {
      bits = bits.padEnd(i + 5, '0');
    }

    const index = parseInt(bits.substring(i, i + 5), 2);
    output += BASE32_ALPHABET[index];
  }

  const padding = (8 - (output.length % 8)) % 8;
  return output + '='.repeat(padding);
}
