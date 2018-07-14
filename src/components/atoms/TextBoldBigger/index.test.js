import React from "react"
import TextBoldBigger from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextBoldBigger />", () => {
  it("renders correctly", () => {
    expect(
      shallow(wrappeWithThemeProvider(<TextBoldBigger>test</TextBoldBigger>))
    ).toMatchSnapshot()
  })
})
