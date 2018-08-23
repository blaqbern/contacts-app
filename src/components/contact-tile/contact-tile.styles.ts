import { style } from 'typestyle'
import { color } from 'csx'

import { Color, link, addMarginBetween } from '@styles'

const borderColor = color(Color.TEXT).fade(.4)
export const contactTile = style({
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  background: Color.WHITE,
  border: `1px solid ${borderColor}`,
  borderRadius: 2,
  $nest: {
    '.left': {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      flex: 5,
      '.editButton': {
        marginTop: 10,
      },
      '.details': addMarginBetween(4, true)
    },
    '.right': {
      flex: 1,
    },
  },
})
