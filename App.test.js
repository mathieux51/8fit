import React from "react"
import App from "./App"
import { shallow } from "enzyme"
// import sinon from "sinon"

describe("<App />", () => {
  it("renders correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
