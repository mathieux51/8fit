import React from "react"
import { Provider, connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import configureStore from "store/configure-store"
import { reduxifyNavigator } from "react-navigation-redux-helpers"
import RootNavigator from "src/components/RootNavigator"
import theme from "src/styles/theme"

const store = configureStore()
const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root")

const mapStateToProps = state => ({
  state: state.nav
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  </Provider>
)

export default Root
