import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { cleanupMiddleware } from './middleware/cleanup-data'
import { contacts as rootReducer } from './reducer'

export function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, cleanupMiddleware)
  )

  if ((module as any).hot) (module as any).hot.accept('./reducer', () =>
    store.replaceReducer(require('./reducer').contacts)
  )
  return store
}
