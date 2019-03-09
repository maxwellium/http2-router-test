"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_hs256_1 = require("jwt-hs256");
exports.JWT_SECRET = 'xr_r$-m0D7#%Q!HC7*OGw$DbmeuSJ6$I';
function jwtFromHeader({ req: { headers: { authorization } } }) {
    const [, token] = (authorization || '').split(' ');
    try {
        //TODO: don't forget to check content!
        return jwt_hs256_1.extractHS256Token(token, exports.JWT_SECRET);
    }
    catch (e) {
        throw { statusCode: 401, msg: e };
    }
}
exports.jwtFromHeader = jwtFromHeader;
//# sourceMappingURL=shared.js.map