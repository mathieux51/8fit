import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.bold};
  font-family: "fira-sans-bold";
`

const TextBold = props => (
  <StyledText style={props.style}>{props.children}</StyledText>
)

TextBold.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string.isRequired
}

export default TextBold
