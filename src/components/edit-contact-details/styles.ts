import { style } from 'typestyle'

import { addMarginBetween } from '@styles'

export const detailsStyles = {
  ...addMarginBetween(20),
  '.details': addMarginBetween(8),
  '.buttonPanel': addMarginBetween(10, { inlineElements: true }),
}

export const editDetails = style({
  $debugName: 'editDetails',
  $nest: { ...detailsStyles },
})
