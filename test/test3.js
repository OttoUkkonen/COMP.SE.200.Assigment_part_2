import chai from "chai"
import file from "../src/add.js"
//var chai = require("chai")
//var file = require ("../src/add")
//testing branch
const expect = chai.expect

describe("test1", () => {
    it("adds positive number to positive number", () =>{
        expect(file(6,6)).to.equal(12)
    });
    it("adds positive number to positive number", () =>{
        expect(file(5,-10)).to.equal(-5)
    });
   })