import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { State } from '@store'
import { cleanupMiddleware } from './middleware/cleanup-data'
import { contacts as rootReducer } from './reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export function configureStore<State>() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk, cleanupMiddleware)
    )
  )

  if ((module as any).hot) (module as any).hot.accept('./reducer', () =>
    store.replaceReducer(require('./reducer').contacts)
  )
  return store
}
