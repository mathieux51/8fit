import React from "react"
import TextMedium from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextMedium />", () => {
  it("renders correctly", () => {
    expect(
      shallow(wrappeWithThemeProvider(<TextMedium>test</TextMedium>))
    ).toMatchSnapshot()
  })
})
