const STRING = { type: 'string' };

export const output = {
  type: 'object',
  additionalProperties: false,
  required: [ 'id', 'name' ],
  properties: {
    id: STRING,
    name: STRING
  }
};
