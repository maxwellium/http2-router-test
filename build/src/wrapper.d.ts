import { Handler } from 'http2-router';
export declare type IOFn = (input: any) => any | Promise<any>;
export declare function wrap(fn: IOFn): Handler;
