import * as ioTypes from './types';


export async function get( input: ioTypes.input ): Promise<ioTypes.output> {
  return { id: input.id };
}
