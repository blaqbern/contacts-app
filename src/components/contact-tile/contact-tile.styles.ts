import { style } from 'typestyle'
import { color } from 'csx'

import { Color } from '@styles'

const borderColor = color(Color.ACCENT_DARK).fade(.4)
export const contactTile = style({
  display: 'flex',
  padding: 10,
  background: Color.WHITE,
  border: `1px solid ${borderColor}`,
  borderRadius: 2,
  $nest: {
    '.details': {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      flex: 3,
    },
    '.actions': {
      flex: 1,
      $nest: {
        '> * + *': { marginTop: 5 }
      }
    },
  },
})
