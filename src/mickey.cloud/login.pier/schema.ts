const STRING = { type: 'string' };

export const input = {
  type: 'object',
  additionalProperties: false,
  required: [ 'id', 'name' ],
  properties: {
    id: STRING,
    name: STRING
  }
};

export const output = {
  type: 'object',
  additionalProperties: false,
  required: [ 'token' ],
  properties: {
    token: STRING
  }
};
