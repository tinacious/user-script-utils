/**
 * Waits the provided milliseconds for an element to appear or returns null. Supports callbacks and promises.
 *
 * @param selector  Selector to pass to document.querySelector()
 * @param timeout   Max time to wait, in millis
 * @param cb        Callback to execute after the element is found. Argument is the found element
 * @document ./wait-for-element-example.md
 */
export const waitForElement = (
  selector: string,
  timeout: number = 5000,
  cb: () => void | undefined,
) => {
  const promise = new Promise<Element | null>((resolve) => {
    let time = 0

    const interval = 100

    const intervalId = setInterval(() => {
      if (time >= timeout) {
        clearInterval(intervalId)
        return resolve(null)
      }

      time += interval

      const result = document.querySelector(selector)
      if (result) {
        clearInterval(intervalId)
        return resolve(result)
      }
    }, interval)
  })

  return cb ? promise.then(cb) : promise
}
