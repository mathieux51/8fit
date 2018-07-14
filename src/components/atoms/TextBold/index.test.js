import React from "react"
import TextBold from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextBold />", () => {
  it("renders correctly", () => {
    expect(
      shallow(wrappeWithThemeProvider(<TextBold>test</TextBold>))
    ).toMatchSnapshot()
  })
})
