# User Script Utils

These snippets can be used in user script managers that support ES modules.

## Usage

Scripts can be imported like this:

```js
import { css } from './dist/add-css-stylesheet.js'

css`
  body {
    background-color: deeppink;
  }
`
```

### Scripts

#### CSS

Some CSS-related scripts are available:

##### addCssStyleSheet(string)

Returns the created style element.

```js
import { addCssStyleSheet } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.3'

addCssStyleSheet(`
  body {
    font-family: courier, monospace;
  }
`)
```

##### css(string)

Syntactic sugar implementation of [addCssStyleSheet](#addcssstylesheetstring) that doesn't return the style element.

```js
import { css } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.4'

css`
  body {
    background-color: deeppink;
  }
`
```

- `addCssStyleSheet(styleSheetCode)`
- ``css`styleSheetCode```


## Development

Install the dependencies:

    npm install

Run the dev server with file watcher:

    npm run dev

This will run the `index.html` file which supports hot reloading.

To test the static file, use a tool like [static-server](https://github.com/tinacious/static-server) to serve the root directory and open the `static.html` file.

The above-mentioned links are provided here for convenience with the default ports:

- http://localhost:29252 – hot reloading
- http://localhost:29252/static.html - static


### Adding new utils

1. Create a new util
2. Export it as a named export
3. Add it to the `main.ts` barrel file so that it can be available from the root module
4. Add it to the `vite.config.js` file so that it can be available as its own module
