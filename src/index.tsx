import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './components/app'
import { configureStore } from './redux'

const renderApp = (component: typeof App) =>
  render(
    <AppContainer>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  )

renderApp(App)

if ((module as any).hot) {
  (module as any).hot.accept('./components/app', () => renderApp(App))
}
