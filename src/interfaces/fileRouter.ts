import type { MiddlewareHandler, handler} from 'eviate';


export interface middleware {
  name: string;
  position: string;
  run: MiddlewareHandler;
}



export interface FileRoute {
  method: string;
  run: handler;
}


export interface FileSystemMiddlewareInterface {
    middlewareDir: string;
    routerDir: string;
    log?: boolean;
}