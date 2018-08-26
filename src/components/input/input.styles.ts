import { style } from 'typestyle'

import { Color } from '@styles'

export const input = style({
  $debugName: 'input',
  display: 'flex',
  $nest: {
    label: {
      width: '15%',
      textAlign: 'right',
    },
    input: {
      background: Color.WHITE,
      borderRadius: 2,
      border: 'none',
    },
  },
})
