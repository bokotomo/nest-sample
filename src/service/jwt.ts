import * as fs from 'fs';

export const privateKey = fs.readFileSync('./key/jwt');
export const publicKey = fs.readFileSync('./key/jwt.pub');
