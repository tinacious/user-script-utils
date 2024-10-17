/**
 * Waits the provided milliseconds for an element to appear or returns null. Supports callbacks and promises.
 *
 * Example callback usage:
 *
 *    waitForElements('.social-media-links__link', 3000, (links) => {
 *      links.forEach((link) => {
 *        console.log('found link', link.innerText)
 *      })
 *    })
 *
 * Example promise usage:
 *
 *    const links = await waitForElements('.social-media-links__link') || []
 *    links.forEach((link) => {
 *      console.log('found link', link.innerText)
 *    })
 *
 * @param selector  Selector to pass to document.querySelector()
 * @param timeout   Max time to wait, in millis
 * @param cb        Callback to execute after the element is found. Argument is the found element
 * @returns         Promise<NodeListOf<Element> | null> | void
 */
export const waitForElements = (
  selector: string,
  timeout: number = 5000,
  cb: () => void | undefined,
) => {
  const promise = new Promise<NodeListOf<Element> | null>((resolve) => {
    let time = 0

    const interval = 100

    const intervalId = setInterval(() => {
      if (time >= timeout) {
        clearInterval(intervalId)
        return resolve(null)
      }

      time += interval

      const result = document.querySelectorAll(selector)
      if (result) {
        clearInterval(intervalId)
        return resolve(result)
      }
    }, interval)
  })

  return cb ? promise.then(cb) : promise
}
