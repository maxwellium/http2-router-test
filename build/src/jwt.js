"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function base64urlEncode(data) {
    return urlEncode(Buffer
        .from(data, 'utf8')
        .toString('base64'));
}
function urlEncode(data) {
    return data
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}
function base64urlDecode(data) {
    return Buffer.from(data
        .padEnd(data.length + data.length % 4, '=')
        .replace(/\-/g, '+')
        .replace(/_/g, '/'), 'base64').toString('utf8');
}
const HEADER_HS256 = { alg: 'HS256', typ: 'JWT' };
const HEADER = {
    obj: HEADER_HS256,
    str: base64urlEncode(JSON.stringify(HEADER_HS256))
};
function verifyHS256(token, secret) {
    let [header, payload, signature] = token.split('.');
    if (!signature) {
        signature = payload;
        payload = header;
        header = HEADER.str;
    }
    const verify = signHS256(`${header}.${payload}`, secret);
    if (verify !== signature) {
        throw 'signature mismatch';
    }
    return JSON.parse(base64urlDecode(payload));
}
exports.verifyHS256 = verifyHS256;
function generateHS256(payload, secret) {
    const data = `${HEADER.str}.${base64urlEncode(JSON.stringify(payload))}`;
    return `${data}.${urlEncode(signHS256(data, secret))}`;
}
exports.generateHS256 = generateHS256;
function signHS256(data, secret) {
    return crypto_1.createHmac('sha256', secret)
        .update(data)
        .digest('base64');
}
exports.signHS256 = signHS256;
console.log(generateHS256({
    "sub": "1234567890",
    "name": "John Doe",
}, 'test'));
//# sourceMappingURL=jwt.js.map