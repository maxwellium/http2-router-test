"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_json_send_1 = require("http2-json-send");
function isPier(handler) {
    return handler.hasOwnProperty('n');
}
function describe(routes) {
    return routes.routes
        .map(r => {
        const d = {
            head: [...r.methods, r.route].join(' ')
        };
        if (isPier(r.handler)) {
            d.i = r.handler.i;
            d.o = r.handler.o;
            d.n = r.handler.n;
            d.d = r.handler.d;
        }
        return d;
    });
}
exports.describe = describe;
function describeRoute(routes) {
    return ({ res }) => http2_json_send_1.http2jsonSend(res, describe(routes));
}
exports.describeRoute = describeRoute;
//# sourceMappingURL=describe.js.map