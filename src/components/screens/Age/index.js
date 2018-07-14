import React, { PureComponent } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import FormContainer from "screens/FormContainer"
import Input from "atoms/Input"

const StyledInput = styled(Input)`
  margin-top: 26px;
`

class Age extends PureComponent {
  static propTypes = {
    setField: PropTypes.func.isRequired,
    user: PropTypes.shape({
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  }
  handleOnChange = age =>
    this.props.setField({
      age
    })

  render() {
    const { user, ...rest } = this.props
    const ageTest = user.age > 13 && user.age < 125
    return (
      <FormContainer
        lineWidth={"75%"}
        isButtonActive={ageTest}
        nextRouteName="Height"
        question="How old are you?"
        {...rest}
      >
        <StyledInput
          autoFocus
          keyboardType="numeric"
          number={user.age}
          onChange={this.handleOnChange}
        />
      </FormContainer>
    )
  }
}

export default Age
