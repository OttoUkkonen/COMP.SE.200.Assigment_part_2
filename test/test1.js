var chai = require("chai")
var file = require ("../src/add")
const expect = chai.expect

describe("file", () => {
    it("adds positive number to positive number", () =>{
        expect(createMathOperation(3,6)).to.equal(9)
    });
   })