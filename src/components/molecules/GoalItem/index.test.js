import React from "react"
import GoalItem from "./"
import { shallow } from "enzyme"
import { wrappeWithThemeProvider } from "src/testHelpers"

describe("<GoalItem />", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        wrappeWithThemeProvider(
          <GoalItem
            title="Lose weight"
            description="Burn fat & get lean"
            onPress={() => {}}
          />
        )
      )
    ).toMatchSnapshot()
  })
})
