/**
 * Creates a new style element with the provided content and appends it to the document.head element.
 *
 * @param css  Stylesheet contents
 * @document ./add-css-example.md
 */
export function addCss(css: string): HTMLStyleElement {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
  return style
}

