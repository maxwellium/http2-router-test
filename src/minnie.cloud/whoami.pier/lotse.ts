
import { Context } from 'http2-router';

import { http2Pier, http2PierSend } from '@b-c/http2-pier';

import { jwtContext } from '../../shared';
import * as ioSchema from './schema';
import { whoami } from '.';



async function handler( ctx: Context ) {
  jwtContext( ctx );
  return await whoami( ctx );
}

export const pier = http2Pier( handler, http2PierSend.json );

pier.i = null;
pier.o = ioSchema.output;
pier.n = 'whoami';
pier.d = '';
