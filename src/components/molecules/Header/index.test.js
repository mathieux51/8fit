import React from "react"
import Header from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<Header />", () => {
  it("renders correctly", () => {
    expect(shallow(wrappeWithThemeProvider(<Header />))).toMatchSnapshot()
  })
})
