"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STRING = { type: 'string' };
exports.input = {
    type: 'object',
    additionalProperties: false,
    required: ['id', 'name'],
    properties: {
        id: STRING,
        name: STRING
    }
};
exports.output = {
    type: 'object',
    additionalProperties: false,
    required: ['token'],
    properties: {
        token: STRING
    }
};
//# sourceMappingURL=schema.js.map