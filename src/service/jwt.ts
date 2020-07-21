import * as fs from 'fs';

export const privateKey = fs.readFileSync('./key/jwt');
export const publickKey = fs.readFileSync('./key/jwt.pub');
