import { Context } from 'http2-router';

import * as ioTypes from './types';


export async function whoami( ctx: Context ): Promise<ioTypes.output> {
  return {
    id: ctx.jwt.id,
    name: ctx.jwt.name
  };
}
