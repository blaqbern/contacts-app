/**
 * credit: gordonbrander
 *   https://gist.github.com/gordonbrander/2230317
 */
export function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9)
}
