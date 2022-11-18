import { Context, EviateMiddlewareResponse } from 'eviate';
import { middlewareInterface } from 'src/interfaces/fileRouter';

export const middleware:middlewareInterface = {
  name: 'basicLogger',
  position: 'before',
  run: (ctx: Context): EviateMiddlewareResponse => {
    console.log(`[${ctx.method}] request at path "${ctx.path}"`);
    return {
      ctx: ctx
    };
  }
};