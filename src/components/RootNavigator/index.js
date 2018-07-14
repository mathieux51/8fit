import { createStackNavigator } from "react-navigation"
import Home from "containers/Home"
import Age from "containers/Age"
import Height from "containers/Height"
import Success from "containers/Success"

const RootNavigator = createStackNavigator({
  Home: { screen: Home },
  Age: { screen: Age },
  Height: { screen: Height },
  Success: { screen: Success }
})

export default RootNavigator
