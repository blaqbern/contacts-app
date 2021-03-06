import { style } from 'typestyle'
import { viewHeight } from 'csx'

import { Color } from '@styles'

export const container = style({
  minHeight: viewHeight(100),
  background: Color.BACKGROUND,
  paddingTop: 40,
  paddingBottom: 40,
})

export const app = style({
  $debugName: 'app',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  maxWidth: 1000,
  $nest: {
    '> div': {
      width: `calc(50% - 15px)`,
    },
  },
})
