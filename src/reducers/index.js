import { combineReducers } from "redux"
import nav from "./nav"
import user from "./user"

const rootReducer = combineReducers({
  nav,
  user
})

export default rootReducer
