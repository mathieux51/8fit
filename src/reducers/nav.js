import RootNavigator from "../components/RootNavigator"

const initialNavState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams("Home")
)

function nav(state = initialNavState, action) {
  let nextState
  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}

export default nav
