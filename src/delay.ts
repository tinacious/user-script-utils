/**
 * Delay function takes either a callback or returns a promise.
 *
 * @param millis    Number of milliseconds to wait (optional, default: 5000)
 * @param cb        Callback to execute after the delay (optional)
 * @document ./delay-example.md
 */
export const delay = (
  millis: number = 5000,
  cb: () => void | undefined,
) => {
  const promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(null)
    }, millis)
  })

  return cb ? promise.then(cb) : promise
}
