const STRING = { type: 'string' };

export const input = {
  type: 'object',
  additionalProperties: false,
  required: [ 'id' ],
  properties: {
    id: STRING
  }
};

export const output = {
  type: 'object',
  additionalProperties: false,
  required: [ 'id' ],
  properties: {
    id: STRING
  }
};
