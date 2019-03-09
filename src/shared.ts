import { Context } from 'http2-router';
import { extractHS256Token } from 'jwt-hs256';


export const JWT_SECRET = 'xr_r$-m0D7#%Q!HC7*OGw$DbmeuSJ6$I';


export function jwtFromHeader( { req: { headers: { authorization } } }: Context ) {

  const [ , token ] = ( authorization || '' ).split( ' ' );

  try {
    //TODO: don't forget to check content!
    return extractHS256Token( token, JWT_SECRET );
  } catch ( e ) {
    throw { statusCode: 401, msg: e };
  }
}
