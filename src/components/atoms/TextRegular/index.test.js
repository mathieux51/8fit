import React from "react"
import TextRegular from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextRegular />", () => {
  it("renders correctly", () => {
    expect(
      shallow(wrappeWithThemeProvider(<TextRegular>test</TextRegular>))
    ).toMatchSnapshot()
  })
})
