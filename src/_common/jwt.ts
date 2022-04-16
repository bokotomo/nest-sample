import * as fs from 'fs';

export const privateKey = fs.readFileSync('./key/sample_jwt');
export const publicKey = fs.readFileSync('./key/sample_jwt.pub');
