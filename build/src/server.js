"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_1 = require("http2");
const fs_1 = require("fs");
const path_1 = require("path");
function runServer(routes, port = 8000) {
    const server = http2_1.createSecureServer({
        key: fs_1.readFileSync(path_1.join(__dirname, '..', '..', 'cert', 'localhost-privkey.pem')),
        cert: fs_1.readFileSync(path_1.join(__dirname, '..', '..', 'cert', 'localhost-cert.pem'))
    });
    server.on('request', (req, res) => routes.route({ req, res }));
    server.on('error', err => console.error(err));
    server.listen(port);
    console.log('listening on', port);
}
exports.runServer = runServer;
//# sourceMappingURL=server.js.map