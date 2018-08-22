import { style } from 'typestyle'

export const contactList = style({
  $debugName: 'contactList',
  $nest: {
    '> * + *': { marginTop: 12 },
  }
})
