"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_hs256_1 = require("jwt-hs256");
exports.JWT_SECRET = 'xr_r$-m0D7#%Q!HC7*OGw$DbmeuSJ6$I';
function jwtContext(ctx) {
    const [, token] = (ctx.req.headers.authorization || '').split(' ');
    try {
        const session = jwt_hs256_1.extractHS256Token(token, exports.JWT_SECRET);
        ctx.jwt = session;
    }
    catch (e) {
        throw { statusCode: 401, msg: e };
    }
}
exports.jwtContext = jwtContext;
//# sourceMappingURL=shared.js.map