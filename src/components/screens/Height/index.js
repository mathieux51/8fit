import React, { PureComponent } from "react"
import { View } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import FormContainer from "screens/FormContainer"
import Input from "atoms/Input"
import Toggle from "atoms/Toggle"

const StyledInput = styled(Input)`
  margin-top: 26px;
`

const StyledToggle = styled(Toggle)`
  margin-top: 26px;
`

const InputContainer = styled(View)`
  margin-top: 26px;
  width: 100%;
  flex-direction: row;
`

const StyledInputWithMargin = StyledInput.extend`
  flex: 1;
  margin: 0 20px;
`

const convertCmToFeetAndInches = cm => {
  const realFeet = (cm * 0.3937) / 12
  const feet = Math.floor(realFeet)
  const inches = Math.round((realFeet - feet) * 12)
  return { feet, inches }
}

const convertFeetAndInchesToCm = (feet, inches) =>
  Math.round((feet * 12) / 0.3937 + inches / 12)

class Height extends PureComponent {
  static propTypes = {
    setField: PropTypes.func.isRequired,
    user: PropTypes.shape({
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  }

  handleOnPress = (evt, heightUnit) => {
    const { setField, user } = this.props
    if (user.heightUnit === "CM")
      setField({
        heightUnit,
        feet: convertCmToFeetAndInches(user.height).feet,
        inches: convertCmToFeetAndInches(user.height).inches
      })
    if (user.heightUnit === "FT")
      setField({
        heightUnit,
        height: convertFeetAndInchesToCm(user.feet, user.inches)
      })
  }

  render() {
    const { user, setField, ...rest } = this.props
    const heightTest = user.height > 125 && user.height < 301
    return (
      <FormContainer
        lineWidth={"100%"}
        isButtonActive={heightTest}
        nextRouteName="Success"
        question="How tall are you?"
        {...rest}
      >
        {user.heightUnit === "FT" ? (
          <InputContainer>
            <StyledInputWithMargin
              autoFocus
              keyboardType="numeric"
              number={user.feet}
              onChange={feet =>
                setField({
                  feet
                })
              }
              unit={user.heightUnit}
            />
            <StyledInputWithMargin
              keyboardType="numeric"
              number={user.inches}
              onChange={inches =>
                setField({
                  inches
                })
              }
              unit={"IN"}
            />
          </InputContainer>
        ) : (
          <StyledInput
            autoFocus
            keyboardType="numeric"
            number={user.height}
            onChange={height =>
              setField({
                height
              })
            }
            unit={user.heightUnit}
          />
        )}
        <StyledToggle
          leftTitle="FT"
          rightTitle="CM"
          onPress={this.handleOnPress}
          selected={user.heightUnit}
        />
      </FormContainer>
    )
  }
}

export default Height
