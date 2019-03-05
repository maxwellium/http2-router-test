"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_pier_1 = require("@b-c/http2-pier");
const shared_1 = require("../../shared");
const ioSchema = require("./schema");
const _1 = require(".");
async function handler(ctx) {
    shared_1.jwtContext(ctx);
    return await _1.whoami(ctx);
}
exports.pier = http2_pier_1.http2Pier(handler, http2_pier_1.http2PierSend.json);
exports.pier.i = null;
exports.pier.o = ioSchema.output;
exports.pier.n = 'whoami';
exports.pier.d = '';
//# sourceMappingURL=lotse.js.map