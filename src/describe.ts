import { Routes, Handler } from 'http2-router';
import { http2jsonSend } from 'http2-json-send';

import { http2Pier } from '@b-c/http2-pier';


function isPier( handler: Handler ): handler is http2Pier {
  return ( handler as http2Pier ).hasOwnProperty( 'n' );
}

export function describe( routes: Routes ) {
  return routes.routes
    .map( r => {
      const d: any = {
        head: [ ...r.methods, r.route ].join( ' ' )
      };
      if ( isPier( r.handler ) ) {
        d.i = r.handler.i;
        d.o = r.handler.o;
        d.n = r.handler.n;
        d.d = r.handler.d;
      }

      return d;
    } );
}

export function describeRoute( routes: Routes ): Handler {
  return ( { res } ) => http2jsonSend( res, describe( routes ) );
}
