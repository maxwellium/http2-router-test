"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeparams_from_url_1 = require("@b-c/routeparams-from-url");
const http2_pier_1 = require("@b-c/http2-pier");
const zoll_1 = require("@b-c/zoll");
const ioSchema = require("./schema");
const _1 = require(".");
const validate = zoll_1.zoll(ioSchema.input);
async function handler(ctx) {
    const input = validate(routeparams_from_url_1.routeparamsFromUrl(ctx.req.url, '/.+?/:id'));
    return await _1.get(input);
}
exports.pier = http2_pier_1.http2Pier(handler, http2_pier_1.http2PierSend.json);
exports.pier.i = ioSchema.input;
exports.pier.o = ioSchema.output;
exports.pier.n = 'get';
exports.pier.d = '';
//# sourceMappingURL=lotse.js.map