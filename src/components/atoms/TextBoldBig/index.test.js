import React from "react"
import TextBoldBig from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextBoldBig />", () => {
  it("renders correctly", () => {
    expect(
      shallow(wrappeWithThemeProvider(<TextBoldBig>test</TextBoldBig>))
    ).toMatchSnapshot()
  })
})
