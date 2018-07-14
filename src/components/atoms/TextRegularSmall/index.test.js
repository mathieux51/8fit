import React from "react"
import TextRegularSmall from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<TextRegularSmall />", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(<TextRegularSmall>test</TextRegularSmall>)
      )
    ).toMatchSnapshot()
  })
})
