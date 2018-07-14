import React, { Component } from "react"
import { View, ImageBackground } from "react-native"
import styled from "styled-components"
import { NavigationActions } from "react-navigation"
import PropTypes from "prop-types"
import images from "src/assets/img"
import TextBoldBigger from "atoms/TextBoldBigger"
import TextMedium from "atoms/TextMedium"
import Button from "atoms/Button"

const BackgroundGrain = styled(ImageBackground)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`

const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const StyledTextBoldBigger = styled(TextBoldBigger)`
  margin-top: 50px;
`

const TextContainer = styled(View)`
  flex-direction: row;
`

const StyledTextMedium = styled(TextMedium)`
  margin: 10px 0;
`

const StyledButton = styled(Button)`
  margin-top: 30px;
  background: ${props => props.theme.green};
`

class Success extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object.isRequired
  }

  handleOnPress = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: "Home"
      })
    )
  }

  render() {
    const { user } = this.props
    return (
      <BackgroundGrain source={images.backgroundGrain}>
        <Container>
          <StyledTextBoldBigger>Success</StyledTextBoldBigger>
          <TextContainer>
            <StyledTextMedium>Goal: </StyledTextMedium>
            <StyledTextMedium>
              {user.goal.split("_").join(" ")}
            </StyledTextMedium>
          </TextContainer>
          <TextContainer>
            <StyledTextMedium>Age: </StyledTextMedium>
            <StyledTextMedium>{user.age}</StyledTextMedium>
          </TextContainer>
          <TextContainer>
            <StyledTextMedium>Height: </StyledTextMedium>
            <StyledTextMedium>
              {user.heightUnit === "CM"
                ? `${user.height} cm`
                : `${user.feet} ft ${user.inches} "`}
            </StyledTextMedium>
          </TextContainer>
          <StyledButton title="Home" onPress={this.handleOnPress} />
        </Container>
      </BackgroundGrain>
    )
  }
}

export default Success
