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
