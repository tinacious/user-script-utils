# 🚧 User Script Utils

These snippets can be used in user script managers that support ES modules.

- [Usage](#usage)
  - [Scripts](#scripts)
    - [CSS](#css)
      - [addCssStyleSheet(string)](#addcssstylesheetstring)
    - [JavaScript](#javascript)
      - [delay](#delay)
      - [waitForElement](#waitforelement)
      - [waitForElements](#waitforelements)
- [Development](#development)
  - [Adding new utils](#adding-new-utils)


## Usage

Scripts can be imported like this:

```js
import { addCssStyleSheet, delay, waitForElement, waitForElements } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'
```

### Scripts

#### CSS

##### addCssStyleSheet(string)

Creates a new style element with the provided content and appends it to the `document.head` element.

```js
import { addCssStyleSheet } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

addCssStyleSheet(`
  body {
    font-family: courier, monospace;
  }
`)
```

#### JavaScript

##### delay

Delay function takes either a callback or returns a promise.

Example callback usage:

```js
import { delay } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

delay(3000, () => {
  console.log('3 seconds later!')
})
```

Example promise usage:

```js
import { delay } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

perform()

async function perform() {
  for (let i = 1; i <= 5; i++) {
    await delay(1000)
    console.log(i)
  }
}
```

##### waitForElement

Waits the provided milliseconds for an element to appear or returns null. Supports callbacks and promises.

Example callback usage:

```js
import { waitForElement } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

waitForElement('.page-layout__title', 3000, (el) => {
  alert(`Found it!: ${el.innerText}`)
})
```

Example promise usage:

```js
import { waitForElement } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

perform()

async function perform() {
  const el = await waitForElement('h1')

  console.log('found page title', el.innerText)
}
```

##### waitForElements

Waits the provided milliseconds for elements to appear or returns null. Supports callbacks and promises.

Example callback usage:

```js
import { waitForElements } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

waitForElements('.social-media-links__link', 3000, (links) => {
  links.forEach((link) => {
    console.log('found link', link.innerText)
  })
})
```

Example promise usage:

```js
import { waitForElements } from 'https://esm.sh/gh/tinacious/user-script-utils@0.0.8'

perform()

async function perform() {
  const links = await waitForElements('.social-media-links__link') || []

  links.forEach((link) => {
    console.log('found link', link.innerText)
  })
}
```

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
