"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STRING = { type: 'string' };
exports.output = {
    type: 'object',
    additionalProperties: false,
    required: ['id', 'name'],
    properties: {
        id: STRING,
        name: STRING
    }
};
//# sourceMappingURL=schema.js.map