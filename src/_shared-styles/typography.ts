import { style } from 'typestyle'

import { Color } from './colors'

export const h1 = style({
  fontWeight: 400,
  color: Color.TEXT_2,
  fontSize: '1.5rem',
})

export const h3 = style({
  color: Color.TEXT_3,
  fontSize: '1.2rem',
})

export const link = style({
  color: Color.ACCENT,
  fontSize: '1rem',
  cursor: 'pointer',
  $nest: {
    '&:hover': { color: Color.ACCENT_LIGHT },
  },
})
