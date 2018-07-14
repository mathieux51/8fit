import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.regular};
  font-family: "fira-sans-regular";
`

const TextRegular = props => (
  <StyledText style={props.style}>{props.children}</StyledText>
)

TextRegular.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string.isRequired
}

export default TextRegular
