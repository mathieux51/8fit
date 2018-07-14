import { setField } from "./"

describe("actions", () => {
  it("should create an action to set a field", () => {
    const field = { age: 30 }
    const expectedAction = {
      type: "SET_FIELD",
      field
    }
    expect(setField(field)).toEqual(expectedAction)
  })
})
