import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.medium};
  font-family: "fira-sans-medium";
`

const TextMedium = props => (
  <StyledText style={props.style}>{props.children}</StyledText>
)

TextMedium.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string.isRequired
}

export default TextMedium
