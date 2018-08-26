import { style } from 'typestyle'

import { detailsStyles } from '@components/edit-contact-details/edit-contact-details.styles'

export const detailsReadonly = style({
  $debugName: 'detailsReadonly',
  $nest: { ...detailsStyles }
})
