import React from "react"
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import styled from "styled-components";
import configureStore from "../store/configure-store"
// import Scene from "../components/scene"

const store = configureStore()

// const StyledView = styled(View)`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: papayawhip;
// `;

const Root = () => (
  <Provider store={store}>
    <View>
      <Text>Hi</Text>
    </View>
    {/* <Scene /> */}
  </Provider>
)

export default Root
