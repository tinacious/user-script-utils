/**
 * Creates a new style element with the provided content and appends it to the document.head element.
 * @param {String} css  Stylesheet contents
 * @returns {HTMLStyleElement}
 */
export function addCssStyleSheet(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return style;
}
/**
 * Calls {@link addCssStyleSheet} to embed a style element with the provided stylesheet but does not return the element
 * @param cssCode
 */
export function css(cssCode) {
    addCssStyleSheet(cssCode);
}
