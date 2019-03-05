import { Routes, NEXT } from 'http2-router';
import { http2RouterCors } from 'http2-router-cors';

import { runServer } from './server';

import * as mickey from './mickey.cloud';
import * as minnie from './minnie.cloud';
import { describeRoute } from './describe';



const routes = new Routes();

routes.add( 'options,get,post', '.*', http2RouterCors( { NEXT } ) );

routes.add( 'get', '/', ( { res } ) => res.end( 'hello' ) );
routes.add( 'post', '/mickey/login', mickey.login );
routes.add( 'post', '/minnie/whoami', minnie.whoami );
routes.add( 'get', '/minnie/get/:id', minnie.get );

routes.add( 'get', '/__describe', describeRoute( routes ) );



console.log( 'registered', routes.routes.map( r => [ ...r.methods, r.route ].join( ' ' ) ) );


runServer( routes );
