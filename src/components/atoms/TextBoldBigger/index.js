import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.boldBigger};
  font-family: "fira-sans-bold";
`

const TextBoldBigger = props => (
  <StyledText style={props.style}>{props.children}</StyledText>
)

TextBoldBigger.propTypes = {
  style: PropTypes.array,
  children: PropTypes.string.isRequired
}

export default TextBoldBigger
