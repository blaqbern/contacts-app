import { style } from 'typestyle'
import { color } from 'csx'

import { Color } from './colors'

const borderColor = color(Color.ACCENT_DARK).fade(.4)
export const button = style({
  $debugName: 'button',
  padding: 8,
  textAlign: 'center',
  color: Color.TEXT,
  border: `1px solid ${borderColor}`,
  borderRadius: 3,
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      border: '1px solid transparent',
      background: Color.ACCENT,
    },
  },
})
