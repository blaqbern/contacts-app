import { style } from 'typestyle'

import { Color } from '@styles'

export const input = style({
  $debugName: 'input',
  display: 'flex',
  $nest: {
    'label, input, .value': {
      paddingTop: 3,
      paddingBottom: 3,
    },
    label: { width: '15%' },
    '.value, input': {
      width: '85%',
      paddingLeft: 10,
    },
    '.value': {
      border: '1px solid transparent',
    },
    input: {
      borderRadius: 2,
      border: `1px solid ${Color.LIGHT_GREY}`,
    },
  },
})
