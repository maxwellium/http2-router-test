import { Context } from 'http2-router';
import { extractHS256Token } from 'jwt-hs256';


export const JWT_SECRET = 'xr_r$-m0D7#%Q!HC7*OGw$DbmeuSJ6$I';


export function jwtContext( ctx: Context ) {
  const [ , token ] = ( ctx.req.headers.authorization || '' ).split( ' ' );

  try {
    const session = extractHS256Token( token, JWT_SECRET );
    ctx.jwt = session;
  } catch ( e ) {
    throw { statusCode: 401, msg: e };
  }
}
