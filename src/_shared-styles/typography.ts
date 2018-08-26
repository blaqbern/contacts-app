import { style } from 'typestyle'

import { Color } from './colors'

export const fontFamily = 'IBM Plex Sans'
export const weights = [200, 400, 700] // make sure any weights listed here are available from google fonts for the selected family, or you'll get no fonts at all!

export const h1 = style({
  $debugName: 'h1',
  fontWeight: 700,
  color: Color.TEXT,
  fontSize: '2rem',
})

export const h3 = style({
  $debugName: 'h3',
  color: Color.TEXT,
  fontWeight: 400,
  fontSize: '1.4rem',
})

const linkBaseStyles = {
  fontSize: '1rem',
  fontWeight: 400,
  cursor: 'pointer',
}

export const link = style({
  $debugName: 'link',
  ...linkBaseStyles,
  color: Color.ACCENT_DARK,
  $nest: {
    '&:hover': { color: Color.ACCENT },
  },
})

export const linkAlt = style({
  $debugName: 'linkAlt',
  ...linkBaseStyles,
  color: Color.TEXT,
  $nest: {
    '&:hover': { color: Color.TEXT_2 },
  },
})
