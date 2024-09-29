/**
 * Creates a new style element with the provided content and appends it to the document.head element.
 * @param {String} css  Stylesheet contents
 * @returns {HTMLStyleElement}
 */
export function addCssStyleSheet(css: string): HTMLStyleElement {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
  return style
}

/**
 * Allows you to pass functions to evaluate values for the CSS.
 * Calls {@link addCssStyleSheet} to embed a style element with the provided stylesheet
 * @param cssCode
 */
export function css(
  strings: string[],
  ...values: unknown[]
): HTMLStyleElement {
  const evaluated = strings.reduce<string[]>((acc, string, i) => {
    acc.push(string)

    if (values[i]) {
      const value = typeof values[i] === 'function' ? values[i]() : values[i].toString()
      acc.push(value)
    }

    return acc
  }, [])

  const rules = evaluated.join('').replace(/ /g, '').split(/\n/)
  const evaluatedCssString = rules.join('\n')

  return addCssStyleSheet(evaluatedCssString)
}
