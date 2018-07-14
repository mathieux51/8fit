import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import Button from "atoms/Button"

const ToggleContainer = styled(View)`
  display: flex;
  flex-direction: row;
  border: 1px solid ${props => props.theme.black};
  border-radius: 30px;
`

const StyledButton = styled(Button)`
  padding: 10px;
`

const LeftButton = StyledButton.extend`
  border-right-width: 0px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 0;
`
const RightButton = StyledButton.extend`
  border-left-width: 0px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 0;
  border-top-right-radius: 30px;
`

const Toggle = props => (
  <ToggleContainer style={props.style}>
    <LeftButton
      onPress={evt => props.onPress(evt, props.leftTitle)}
      title={props.leftTitle}
      inverted={props.selected !== props.leftTitle}
    />
    <RightButton
      onPress={evt => props.onPress(evt, props.rightTitle)}
      title={props.rightTitle}
      inverted={props.selected !== props.rightTitle}
    />
  </ToggleContainer>
)

Toggle.propTypes = {
  style: PropTypes.array,
  onPress: PropTypes.func.isRequired,
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string.isRequired,
  selected: PropTypes.string
}

export default Toggle
