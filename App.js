import React, { Component } from "react"
import { Font } from "expo"
import Root from "./src/containers/Root"

class App extends Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      "fira-sans-bold": require("./src/assets/fonts/FiraSans-Bold.ttf"),
      "fira-sans-medium": require("./src/assets/fonts/FiraSans-Medium.ttf"),
      "fira-sans-regular": require("./src/assets/fonts/FiraSans-Regular.ttf")
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    return this.state.fontLoaded && <Root />
  }
}

export default App
