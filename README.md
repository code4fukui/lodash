# Lodash

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

The [Lodash](https://lodash.com/) library exported as a [UMD](https://github.com/umdjs/umd) module.

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash's modular methods are great for:

*   Iterating arrays, objects, & strings
*   Manipulating & testing values
*   Creating composite functions

## Installation

### Browser

Include the script directly in your HTML:

```html
<script src="lodash.js"></script>
```

You can also use a CDN or download a specific build:

*   **CDN:** [jsDelivr](https://www.jsdelivr.com/projects/lodash) [
![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/lodash/badge)
](https://www.jsdelivr.com/package/npm/lodash)
*   **Core build:** [core.js](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/core.js) (~4 kB gzipped)
*   **Full build:** [lodash.js](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/lodash.js) (~24 kB gzipped)

Review the [build differences](https://github.com/lodash/lodash/wiki/build-differences) to pick the one that’s right for you.

### Node.js

Install Lodash using npm:

```shell
npm install lodash
```

Then, import it into your project:

```js
// Load the full build.
const _ = require('lodash');

// Load the core build for a smaller footprint.
const _ = require('lodash/core');

// Load the FP build for immutable, auto-curried, iteratee-first methods.
const fp = require('lodash/fp');

// Load method categories.
const array = require('lodash/array');
const object = require('lodash/fp/object');

// Cherry-pick individual methods for smaller browserify/rollup/webpack bundles.
const at = require('lodash/at');
const curryN = require('lodash/fp/curryN');
```

For native ES module support, check out [lodash-es](https://www.npmjs.com/package/lodash-es).

## Module Formats

Lodash is available in a [variety of builds](https://lodash.com/custom-builds) and module formats to suit your needs:

*   [lodash](https://www.npmjs.com/package/lodash) & [per-method packages](https://www.npmjs.com/search?q=keywords:lodash-modularized)
*   [lodash-es](https://www.npmjs.com/package/lodash-es), [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash), & [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)
*   [lodash/fp](https://github.com/lodash/lodash/tree/npm/fp)
*   [lodash-amd](https://www.npmjs.com/package/lodash-amd)

## Documentation

For a comprehensive list of methods and examples, see the [official documentation](https://lodash.com/docs).

## License

Released under the [MIT license](LICENSE).