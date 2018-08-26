import { style } from 'typestyle'
import { color } from 'csx'

import { Color, addMarginBetween } from '@styles'

const borderColor = color(Color.TEXT).fade(.4)
export const contactTile = style({
  $debugName: 'contactTile',
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  background: Color.WHITE,
  border: `1px solid ${borderColor}`,
  borderRadius: 2,
  $nest: {
    ...addMarginBetween(10, { inlineElements: true }),
    '.left': {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      flex: 5,
    },
    '.right': {
      flex: 1,
    },
  },
})
