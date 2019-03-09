import { createSecureServer } from 'http2';
import { readFileSync } from 'fs';
import { join } from 'path';

import { Routes } from 'http2-router';


export function runServer( routes: Routes, port = 8000 ) {

  const server = createSecureServer( {
    key: readFileSync( join( __dirname, '..', '..', 'cert', 'localhost-privkey.pem' ) ),
    cert: readFileSync( join( __dirname, '..', '..', 'cert', 'localhost-cert.pem' ) )
  } );

  server.on( 'request', ( req, res ) => routes.route( { req, res } ) );
  server.on( 'error', err => console.error( err ) );

  server.listen( port );

  console.log( 'listening on', port );
}
