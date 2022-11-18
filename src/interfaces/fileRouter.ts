import type { MiddlewareHandler, handler} from 'eviate';


export interface middlewareInterface {
  name: string;
  position: string;
  run: MiddlewareHandler;
}



export interface FileRouteInterface {
  method: string;
  run: handler;
}


export interface FileSystemMiddlewareInterface {
    middlewareDir: string;
    routerDir: string;
    log?: boolean;
}