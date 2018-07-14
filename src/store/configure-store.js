import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import reduxLogger from "redux-logger"
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers"
import rootReducer from "../reducers"

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const middlewares = [thunkMiddleware, reactNavigationMiddleware, reduxLogger]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const configureStore = function(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore
