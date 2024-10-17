Example callback usage:

```js
import { delay } from 'https://esm.sh/gh/tinacious/user-script-utils@0.1.0'

delay(3000, () => {
  console.log('3 seconds later!')
})
```

Example promise usage:

```js
import { delay } from 'https://esm.sh/gh/tinacious/user-script-utils@0.1.0'

perform()

async function perform() {
  for (let i = 1; i <= 5; i++) {
    await delay(1000)
    console.log(i)
  }
}
```
