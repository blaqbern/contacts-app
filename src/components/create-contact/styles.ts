import { style } from 'typestyle'

import { Color, addMarginBetween } from '@styles'
import { h3, buttonAlt } from '@styles'

export const createContact = style({
  $debugName: 'createContact',
  position: 'sticky',
  top: 55,
  ...addMarginBetween(25),
  $nest: {
    [`.${h3}`]: {
      paddingBottom: 8,
      borderBottom: `1px solid ${Color.TEXT}`,
    },
    [`.${buttonAlt}`]: {
      maxWidth: 120,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    '> .inputs': addMarginBetween(8),
  },
})
