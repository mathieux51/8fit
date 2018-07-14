import React from "react"
import { View, TouchableOpacity, Image } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import images from "src/assets/img"

const Container = styled(View)`
  height: 80px;
  padding-top: 20px;
  justify-content: center;
  background: ${props => props.theme.white};
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  margin-left: 20px;
`

const StyledImage = styled(Image)`
  height: 20px;
`

const Header = props => (
  <Container style={props.style}>
    <StyledTouchableOpacity onPress={() => props.navigation.goBack()}>
      <StyledImage source={images.icArrowLeft} />
    </StyledTouchableOpacity>
  </Container>
)

Header.propTypes = {
  style: PropTypes.array,
  navigation: PropTypes.object
}

export default Header
