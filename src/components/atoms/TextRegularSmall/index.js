import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.regularSmall};
  font-family: "fira-sans-regular";
`

const TextRegularSmall = props => (
  <StyledText style={props.style}>{props.children}</StyledText>
)

TextRegularSmall.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string
}

export default TextRegularSmall
