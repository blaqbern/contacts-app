import { style } from 'typestyle'
import { color } from 'csx'

import { Color } from './colors'

const borderColor = color(Color.ACCENT_DARK).fade(.4)
export const button = style({
  $debugName: 'button',
  padding: 8,
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: 3,
  color: Color.TEXT,
  border: `1px solid ${borderColor}`,
  $nest: {
    '&:hover': {
      border: '1px solid transparent',
      background: Color.ACCENT,
    },
  },
})

export const buttonAlt = style({
  $debugName: 'buttonAlt',
  padding: 8,
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: 3,
  color: Color.WHITE,
  background: Color.ACCENT_DARK,
  $nest: {
    '&:hover': {
      background: Color.TEXT,
    },
  },
})
