import { Engine } from "eviate";
import { readdirSync, lstatSync } from "fs";
import path from "path";

import type { FileSystemMiddlewareInterface } from "../interfaces/Listen";

export class FileSystemRouter {
  private options: FileSystemMiddlewareInterface;

  constructor(options: FileSystemMiddlewareInterface) {
    this.options = options;
  }

  public get settings() {
    return {};
  }

  public middlewares(app: Engine): void {
    const middlewarePath: string = path.join(
      process.cwd(),
      this.options.middlewareDir
    );

    readdirSync(middlewarePath).forEach(async (file: string) => {
      const middleware = await import(`${middlewarePath}/${file}`);
      app.use(middleware.middleware.run, middleware.middleware.position);
    });
  }

  private async logFile(file: string, path: string, app: Engine) {
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const code = await import(`${path}/${file}`);

      if (!code.route) throw new Error("Sunrit implement");

      const regex = /\[(\w+)\]/;
      const result = file.match(regex);

      if (result) file = ":" + result[1];

      let rmPath = path
        .replace(process.cwd(), "")
        .replace("/" + this.options.routerDir, "");

      let routePath: string = "";

      routePath = rmPath + "/" + file.replace(".ts", "");

      app.register(code.route.method, routePath, code.route.run);
    }
  }

  private logDirectory(file: string, app: Engine) {
    readdirSync(file).forEach(async (dir: string) => {
      const dirFile = await lstatSync(`${file}/${dir}`);

      if (dirFile.isDirectory()) {
        this.logDirectory(`${file}/${dir}`, app);
      }

      if (dirFile.isFile()) {
        await this.logFile(dir, file, app);
      }
    });
  }

  public logRoutes(app: Engine) {
    const routePath: string = path.join(process.cwd(), this.options.routerDir);

    readdirSync(routePath).forEach(async (dir: string) => {
      const file = await lstatSync(`${routePath}/${dir}`);

      if (file.isDirectory()) {
        this.logDirectory(`${routePath}/${dir}`, app);
      }

      if (file.isFile()) {
        await this.logFile(dir, routePath, app);
      }
    });
  }

  public mutate(app: Engine) {
    this.middlewares(app);
    this.logRoutes(app);
  }
}
