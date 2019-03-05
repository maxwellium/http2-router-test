"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function whoami(ctx) {
    return {
        id: ctx.jwt.id,
        name: ctx.jwt.name
    };
}
exports.whoami = whoami;
//# sourceMappingURL=index.js.map