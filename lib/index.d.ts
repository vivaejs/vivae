type Method =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH"
  | "PROPFIND"
  | "PROPPATCH"
  | "MKCOL"
  | "COPY"
  | "MOVE"
  | "LOCK"
  | "UNLOCK"
  | "VERSION-CONTROL"
  | "REPORT"
  | "CHECKIN"
  | "CHECKOUT"
  | "UNCHECKOUT"
  | "MKWORKSPACE"
  | "UPDATE"
  | "LABEL"
  | "MERGE"
  | "BASELINE-CONTROL"
  | "MKACTIVITY"
  | "ACL"
  | "SEARCH";

type Event = {
  data: (chunk: Buffer | string) => void;
  end: () => void;
  error: (error: Error) => void;
  close: () => void;
  aborted: () => void;
};

interface VivaeObject {
  url: string;
  path: string;
  query: { [key: string]: string | number | boolean } | {};
  params: { [param: string]: string } | {};
  method: Method;
  status: number;

  send(body: string | object): void;
  next(error?: any): void;

  setHeaders(headers: { [key: string]: string }): void;

  respond(options: {
    status?: number;
    headers?: { [key: string]: string };
  }): this;

  on<E extends keyof Event>(event: E, listener: Event[E]): this;
  once<E extends keyof Event>(event: E, listener: Event[E]): this;
  off<E extends keyof Event>(event: E, listener: Event[E]): this;
}

type Middleware = ((vobj: VivaeObject) => void);

interface VivaeConfig {
  debug?: {
    logging?: boolean;
    warnings?: boolean;
  };
  allowQueries?: boolean;
}

interface VivaeServer {
  use(path: string, method: Method | Method[], middleware: Middleware): void;
  use(path: string, middleware: Middleware): void;
  use(method: Method | Method[], middleware: Middleware): void;
  use(middleware: Middleware): void;

  listen(port: number, callback?: () => void): void;
}

declare function vivae(config?: VivaeConfig): VivaeServer;

export = vivae;
