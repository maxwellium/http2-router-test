"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STRING = { type: 'string' };
exports.input = {
    type: 'object',
    additionalProperties: false,
    required: ['id'],
    properties: {
        id: STRING
    }
};
exports.output = {
    type: 'object',
    additionalProperties: false,
    required: ['id'],
    properties: {
        id: STRING
    }
};
//# sourceMappingURL=schema.js.map