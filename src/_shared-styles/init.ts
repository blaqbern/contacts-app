import { setupPage, normalize } from 'csstips'
import { cssRaw, cssRule, style, forceRenderStyles } from 'typestyle'

import { Color } from './colors'
import { fontFamily } from './typography'

const googleFontsFamily = fontFamily.replace(/ /g, '+')

export function initializeStyles() {
  cssRaw(`
    @import url('https://fonts.googleapis.com/css?family=${googleFontsFamily}:200,700');
  `)
  normalize()
  setupPage('#root')

  cssRule('body', {
    fontFamily: `"${fontFamily.replace(/\+/g, ' ')}", sans-serif`,
    fontWeight: 200,
    color: Color.TEXT,
    background: Color.VOID,
    fontSize: 16,
    lineHeight: 1.3,
  })

  forceRenderStyles()
}
