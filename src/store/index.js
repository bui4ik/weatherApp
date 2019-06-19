import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware as useRouterMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

const history = createBrowserHistory()
const routerMiddleware = useRouterMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
  ...rootReducer,
  router: connectRouter(history),
})

const initialState = {}
const enhancers = []
const middleware = [routerMiddleware, sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
  const { createLogger } = require('redux-logger')
  const logger = createLogger()

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middleware.push(logger)
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(reducer, initialState, composedEnhancers)

sagaMiddleware.run(rootSaga)

export { history }

export default store
