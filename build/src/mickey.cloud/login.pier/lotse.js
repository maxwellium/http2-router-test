"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoll_1 = require("@b-c/zoll");
const json_from_stream_1 = require("@b-c/json-from-stream");
const http2_pier_1 = require("@b-c/http2-pier");
const ioSchema = require("./schema");
const _1 = require(".");
const validate = zoll_1.zoll(ioSchema.input);
async function handler(ctx) {
    const input = validate(await json_from_stream_1.jsonFromStream(ctx.req));
    return await _1.login(input);
}
exports.pier = http2_pier_1.http2Pier(handler, http2_pier_1.http2PierSend.json);
exports.pier.i = ioSchema.input;
exports.pier.o = ioSchema.output;
exports.pier.n = 'login';
exports.pier.d = '';
//# sourceMappingURL=lotse.js.map