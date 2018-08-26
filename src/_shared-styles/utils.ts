export function addMarginBetween(
  marginSize: number,
  options?: {
    includeNested?: boolean,
    inlineElements?: boolean,
  }
) {
  let selector = '> * + *'
  let margin = 'marginTop'

  if (options) {
    if (options.includeNested) selector = '* + *'
    if (options.inlineElements) margin = 'marginLeft'
  }

  return {
    [selector]: {
      [margin]: marginSize,
    },
  }
}
