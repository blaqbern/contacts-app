export function addMarginBetween(marginSize: number, directChildrenOnly?: boolean) {
  return {
    [`${directChildrenOnly ? '> ' : ''}* + *`]: { marginTop: marginSize },
  }
}
