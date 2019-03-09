
import { Context } from 'http2-router';

import { http2Pier, http2PierSend } from '@b-c/http2-pier';

import { jwtFromHeader } from '../../shared';
import * as ioSchema from './schema';
import { whoami } from '.';



async function handler( ctx: Context ) {
  const jwt = jwtFromHeader( ctx );
  return await whoami( { ...ctx, jwt } );
}

export const pier = http2Pier( handler, http2PierSend.json );

pier.i = null;
pier.o = ioSchema.output;
pier.n = 'whoami';
pier.d = '';
