"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_router_1 = require("http2-router");
const http2_router_cors_1 = require("http2-router-cors");
const server_1 = require("./server");
const mickey = require("./mickey.cloud");
const minnie = require("./minnie.cloud");
const describe_1 = require("./describe");
const routes = new http2_router_1.Routes();
routes.add('options,get,post', '.*', http2_router_cors_1.http2RouterCors({ NEXT: http2_router_1.NEXT }));
routes.add('get', '/', ({ res }) => res.end('hello'));
routes.add('post', '/mickey/login', mickey.login);
routes.add('post', '/minnie/whoami', minnie.whoami);
routes.add('get', '/minnie/get/:id', minnie.get);
routes.add('get', '/__describe', describe_1.describeRoute(routes));
console.log('registered', routes.routes.map(r => [...r.methods, r.route].join(' ')));
server_1.runServer(routes);
//# sourceMappingURL=index.js.map