# Vivae

**Bring your HTTP server to life.**

Vivae is a lightweight, dependency-free Node.js framework built to help you quickly create and manage HTTP servers using a custom routing engine, middleware, and plugin system designed for minimal code, control, and your server's architecture.

View the [docs](https://github.com/sudo-njr/vivae/blob/main/docs/index.md).

## Why is it unique?

- Plugin Creation
- Built in Static Serving
- TypeScript, CommonJS and ESM support
- Built in wildcard routing system
- Minimal, dependency-free runtime

And guess what? It's packaged smaller than 20kb!

## Performance

Vivae has a lower memory usage in basic server benchmarks.

- Vivae v1.1.0: ~31.55 MB RSS
- Express v5.1.0: ~43.45 MB
- Koa v3.0.0: ~43.71 MB

Tracked using Node's `process.memoryUsage()` for basic server initializations.

## Installation

```
npm install vivae
```

## Usage Example

ESM:

```javascript
import vivae from "vivae";

const app = vivae();
const port = 3000;

app.use("/", "GET", (vobj) => {
  vobj.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

If you're using CommonJS, simply use `require` instead of `import`:

```javascript
const vivae = require("vivae");
```

## License

[MIT](https://github.com/sudo-njr/vivae/blob/main/LICENSE)
