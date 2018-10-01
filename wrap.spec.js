const { expect } = require("chai")
const wrap = require("./wrap")

describe("Wrap", function() {
  it("should be a function", function() {
    console.log("wrap", wrap)
    expect(typeof wrap).to.equal("function")
  })
  it("should take two arguments", function() {})
  it("should return a string", function() {})
  it("should break every n characters", function() {})
  it("should break at the column number provided", function() {})
})
