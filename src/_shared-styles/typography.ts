import { style } from 'typestyle'

import { Color } from './colors'

export const fontFamily = 'IBM Plex Sans'

export const h1 = style({
  fontWeight: 700,
  color: Color.TEXT_2,
  fontSize: '2rem',
})

export const h3 = style({
  color: Color.TEXT_3,
  fontSize: '1.4rem',
})

export const link = style({
  color: Color.ACCENT,
  fontSize: '1rem',
  cursor: 'pointer',
  $nest: {
    '&:hover': { color: Color.ACCENT_LIGHT },
  },
})
