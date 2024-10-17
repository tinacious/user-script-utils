Example callback usage:

```js
import { waitForElements } from 'https://esm.sh/gh/tinacious/user-script-utils@0.1.0'

waitForElements('.social-media-links__link', 3000, (links) => {
  links.forEach((link) => {
    console.log('found link', link.innerText)
  })
})
```

Example promise usage:

```js
import { waitForElements } from 'https://esm.sh/gh/tinacious/user-script-utils@0.1.0'

perform()

async function perform() {
  const links = await waitForElements('.social-media-links__link') || []

  links.forEach((link) => {
    console.log('found link', link.innerText)
  })
}
```
