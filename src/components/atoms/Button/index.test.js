import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { wrappeWithThemeProvider } from "src/testHelpers"
import Button from "./"

describe("<Button />", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(<Button title="Continue" onPress={() => {}} />)
      )
    ).toMatchSnapshot()
  })

  it("renders correctly with active and inverted props", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(
          <Button
            title="Continue"
            onPress={() => {}}
            active={true}
            inverted={true}
          />
        )
      )
    ).toMatchSnapshot()
  })

  it("Calls onPress when clicked", () => {
    const onPress = sinon.spy()
    const wrapper = shallow(<Button title="Continue" onPress={onPress} />)
    wrapper.first().simulate("press")
    expect(onPress.called).toBeTruthy()
  })
})
