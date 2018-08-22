import { style } from 'typestyle'
import { color } from 'csx'

import { Color } from './colors'

const hoverBorderColor = color(Color.TEXT).fade(.4)
export const button = style({
  padding: 8,
  textAlign: 'center',
  color: Color.TEXT,
  background: Color.ACCENT,
  border: '1px solid transparent',
  borderRadius: 3,
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      border: `1px solid ${hoverBorderColor}`,
    }
  }
})
