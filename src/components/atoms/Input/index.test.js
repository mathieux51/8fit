import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { wrappeWithThemeProvider } from "src/testHelpers"
import Input from "./"

describe("<Input />", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(
          <Input
            autoFocus
            keyboardType="numeric"
            number={30}
            onChange={() => {}}
          />
        )
      )
    ).toMatchSnapshot()
  })
})
