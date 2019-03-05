import { generateHS256Token } from 'jwt-hs256';

import { input, output } from './types';
import { JWT_SECRET } from '../../shared';


export async function login( input: input ): Promise<output> {
  return { token: generateHS256Token( input, JWT_SECRET ) };
}
