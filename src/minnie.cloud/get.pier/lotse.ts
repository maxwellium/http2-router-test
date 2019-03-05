import { Context } from 'http2-router';

import { routeparamsFromUrl } from '@b-c/routeparams-from-url';
import { http2Pier, http2PierSend } from '@b-c/http2-pier';
import { zoll } from '@b-c/zoll';

import * as ioSchema from './schema';
import * as ioTypes from './types';
import { get } from '.';


const validate = zoll<ioTypes.input>( ioSchema.input );

async function handler( ctx: Context ) {
  const input = validate( routeparamsFromUrl( ctx.req.url, '/.+?/:id' ) );
  return await get( input );
}

export const pier = http2Pier( handler, http2PierSend.json );


pier.i = ioSchema.input;
pier.o = ioSchema.output;
pier.n = 'get';
pier.d = '';
