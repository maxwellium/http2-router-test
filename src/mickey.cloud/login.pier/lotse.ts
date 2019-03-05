import { Context } from 'http2-router';

import { zoll } from '@b-c/zoll';
import { jsonFromStream } from '@b-c/json-from-stream';
import { http2Pier, http2PierSend } from '@b-c/http2-pier';

import * as ioSchema from './schema';
import * as ioTypes from './types';
import { login } from '.';


const validate = zoll<ioTypes.input>( ioSchema.input );

async function handler( ctx: Context ) {
  const input = validate( await jsonFromStream( ctx.req ) );
  return await login( input );
}

export const pier = http2Pier( handler, http2PierSend.json );

pier.i = ioSchema.input;
pier.o = ioSchema.output;
pier.n = 'login';
pier.d = '';
