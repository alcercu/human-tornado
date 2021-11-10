import snarkjs, { bigInt } from "snarkjs";
import circomlib from "circomlib";
import crypto from "crypto";


export const rbigint = (nbytes) => (
  bigInt.leBuff2int(crypto.randomBytes(nbytes))
);

export const pedersenHash = (data) => (
  circomlib.babyJub.unpackPoint(circomlib.pedersenHash.hash(data))[0]
);

export const toFixedHex = (number, length = 32) => (
  '0x' +
  snarkjs.bigInt(number)
    .toString(16)
    .padStart(length * 2, '0')
);

export const toHex = (number, length = 32) => (
  '0x' +
  (number instanceof Buffer ? number.toString('hex') : bigInt(number)
    .toString(16)).padStart(length * 2, '0')
);
