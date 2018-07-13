import React, { PureComponent } from "react"
import { Navigator, View, StyleSheet } from "react-native"
import Main from "../containers/main"
import NavigationBar from "./navigation-bar"

const styles = StyleSheet.create({
  view: { flex: 1 },
  backgroundStyle: { backgroundColor: "#eee" },
  navigator: { flex: 1 }
})

class Scene extends PureComponent {
  renderScene = (route, navigator) => {
    const Component = route.component
    return (
      <View style={styles.view}>
        <NavigationBar
          backgroundStyle={styles.backgroundStyle}
          navigator={navigator}
          route={route}
          title={route.title}
          titleColor="#333"
        />
        <Component navigator={navigator} route={route} {...route.passProps} />
      </View>
    )
  }
  render() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: Main,
          title: "Starter App"
        }}
      />
    )
  }
}

export default Scene
