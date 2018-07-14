import React from "react"
import Toggle from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<Toggle />", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(
          <Toggle
            leftTitle="FT"
            rightTitle="CM"
            onPress={() => {}}
            selected={"CM"}
          />
        )
      )
    ).toMatchSnapshot()
  })
})
