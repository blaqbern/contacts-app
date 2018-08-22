import { setupPage, normalize } from 'csstips'
import { cssRaw, cssRule, style, forceRenderStyles } from 'typestyle'

import { Color } from './colors'

export function initializeStyles() {
  cssRaw(`
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:200,400');
  `)
  normalize()
  setupPage('#root')

  cssRule('body', {
    fontFamily: '"Fira Sans", sans-serif',
    fontWeight: 200,
    color: Color.TEXT,
    background: Color.VOID,
    fontSize: 16,
    lineHeight: 1.3,
  })

  forceRenderStyles()
}
