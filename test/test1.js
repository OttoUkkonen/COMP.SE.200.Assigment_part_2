import chai from "chai"
import file from "../src/add.js"
//var chai = require("chai")
//var file = require ("../src/add")
//testing branch
const expect = chai.expect

describe("test1", () => {
    it("adds positive number to positive number", () =>{
        expect(file(3,6)).to.equal(9)
    });
    it("adds positive number to positive number", () =>{
        expect(file(3,-5)).to.equal(-2)
    });
   })