import { style } from 'typestyle'

import { Color } from '@styles'

const topBottomPadding = 25
const outsidePadding = 40
const insidePadding = outsidePadding / 2

export const app = style({
  $debugName: 'app',
  display: 'flex',
  background: Color.BACKGROUND,
  justifyContent: 'center',
  $nest: {
    '.twoThirds': {
      flex: 3,
      paddingTop: topBottomPadding,
      paddingBotom: topBottomPadding,
      paddingRight: outsidePadding,
      paddingLeft: insidePadding,
    },
    '.oneThird': {
      flex: 2,
      paddingTop: topBottomPadding,
      paddingBotom: topBottomPadding,
      paddingLeft: outsidePadding,
      paddingRight: insidePadding,
    },
  },
})
