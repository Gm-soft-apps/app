import { customAlphabet } from "nanoid/non-secure";

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
// export const nanoid = customAlphabet(alphabet, 9);

export const nanoidString = customAlphabet(alphabet);
export const nanoidInt =(size: number) => Number(customAlphabet(digits)(size));