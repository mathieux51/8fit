import React from "react"
import { TouchableOpacity } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import TextMedium from "atoms/TextMedium"

const ButtonContainer = styled(TouchableOpacity)`
  background: ${({ theme, active = true, inverted = false }) =>
    active ? (inverted ? theme.white : theme.black) : theme.grey};
  border-radius: 30px;
  padding: 15px;
  min-width: 100px;
`

const StyledText = styled(TextMedium)`
  align-self: center;
  font-size: ${({ theme }) => theme.medium};
  color: ${({ theme, inverted = false }) =>
    inverted ? theme.black : theme.white};
`

const Button = props => (
  <ButtonContainer
    style={props.style}
    onPress={props.onPress}
    active={props.active}
    inverted={props.inverted}
  >
    <StyledText inverted={props.inverted}>{props.title}</StyledText>
  </ButtonContainer>
)

Button.propTypes = {
  style: PropTypes.array,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  inverted: PropTypes.bool
}

export default Button
