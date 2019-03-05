"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_json_send_1 = require("./http2-json-send");
const json_from_stream_1 = require("@b-c/json-from-stream");
function wrap(fn) {
    return async function ({ req, res }) {
        try {
            const input = json_from_stream_1.jsonFromStream(req);
            const output = await fn(input);
            http2_json_send_1.http2jsonSend(res, output);
        }
        catch (e) {
            if (e.statusCode) {
                res.statusCode = e.statusCode;
            }
            else {
                res.statusCode = 500;
            }
            http2_json_send_1.http2jsonSend(res, e);
        }
    };
}
exports.wrap = wrap;
//# sourceMappingURL=wrapper.js.map