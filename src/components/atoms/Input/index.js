import React from "react"
import { View, TextInput } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import TextRegularSmall from "atoms/TextRegularSmall"

const InputContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.grey};
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  padding-bottom: 7px;
  padding-left: 20px;
`

const StyledTextInput = styled(TextInput)`
  font-size: ${({ theme }) => theme.boldBigger};
  font-family: "fira-sans-bold";
`

const Unit = styled(TextRegularSmall)`
  color: ${({ theme }) => theme.grey};
  width: 20px;
  align-self: flex-end;
  margin-left: 8px;
`

const Input = ({ style, onChange, number, unit, ...rest }) => (
  <InputContainer style={style}>
    <StyledTextInput onChangeText={onChange} value={String(number)} {...rest} />
    <Unit>{unit}</Unit>
  </InputContainer>
)

Input.propTypes = {
  style: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string
}

export default Input
