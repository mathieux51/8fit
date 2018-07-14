import React, { Component } from "react"
import { View, ImageBackground, Dimensions, Keyboard } from "react-native"
import styled from "styled-components"
import { NavigationActions } from "react-navigation"
import PropTypes from "prop-types"
import images from "src/assets/img"
import TextBoldBig from "atoms/TextBoldBig"
import Button from "atoms/Button"

const BackgroundGrain = styled(ImageBackground)`
  flex: 1;
`

const Container = styled(View)`
  flex: 1;
  align-items: center;
  height: ${props => props.height || "auto"};
`

const Line = styled(View)`
  width: ${props => props.width || "100%"};
  min-height: 5px;
  background: ${props => props.theme.green};
  align-self: flex-start;
`

const StyledTextBoldBig = styled(TextBoldBig)`
  margin-top: 26px;
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: ${props => props.bottom + 20 || 50};
`

class FormContainer extends Component {
  state = {
    height: 0,
    keyboardHeight: 0
  }
  static propTypes = {
    navigation: PropTypes.object,
    lineWidth: PropTypes.string,
    isButtonActive: PropTypes.bool.isRequired,
    nextRouteName: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    question: PropTypes.string.isRequired
  }
  componentDidMount() {
    this.setState({ height: Dimensions.get("window").height })
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    )
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  _keyboardDidShow = evt =>
    this.setState({
      keyboardHeight:
        Dimensions.get("window").height - evt.endCoordinates.height
    })

  _keyboardDidHide = () =>
    this.setState({ height: Dimensions.get("window").height })

  handleOnPress = () => {
    if (this.props.isButtonActive) {
      this.props.navigation.dispatch(
        NavigationActions.navigate({
          routeName: this.props.nextRouteName
        })
      )
    }
  }

  render() {
    return (
      <BackgroundGrain source={images.backgroundGrain}>
        <Container height={this.state.height}>
          <Line width={this.props.lineWidth} />
          <StyledTextBoldBig>{this.props.question}</StyledTextBoldBig>
          {this.props.children}
          <StyledButton
            active={this.props.isButtonActive}
            title="Continue"
            onPress={this.handleOnPress}
            bottom={this.state.height - this.state.keyboardHeight}
          />
        </Container>
      </BackgroundGrain>
    )
  }
}

export default FormContainer
