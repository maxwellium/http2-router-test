"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_hs256_1 = require("jwt-hs256");
const shared_1 = require("../../shared");
async function login(input) {
    return { token: jwt_hs256_1.generateHS256Token(input, shared_1.JWT_SECRET) };
}
exports.login = login;
//# sourceMappingURL=index.js.map