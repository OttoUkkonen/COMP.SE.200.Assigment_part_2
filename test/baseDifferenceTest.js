import chai from "chai"
import file from "../src/.internal/baseDifference.js"
import { assert } from "chai"

// if using older versions of node
// var chai = require("chai")
// var file = require ("../src/add")


const expect = chai.expect


describe("baseDifferenceTest", () => {
    /*
    def function iteratee (array){
        TODO: Function to iterate trough array
        returns array values one by one
    }
    def function comparator (base_array_value, value_array_value){
        TODO: Function for comparing
        returns boolean
    }
    it("Exluded values is emty, checks if returns original array", () =>{
        expect(file([1,2,3],[],iteratee,comparator)).to.equal([1,2,3]);
    });
    it("Exluded values contains one common value, 
        checks if return array is filtered", () =>{
        expect(file([1,2,3],[2],iteratee,comparator)).to.equal([1,3]);
    });
    it("Exluded values contains multiple common value, 
        checks if return array is filtered", () =>{
        expect(file([1,2,3],[2,3],iteratee,comparator)).to.equal([1]);
    });
    it("Exluded values contains non common value, 
        checks if return array is original", () =>{
        expect(file([1,2,3],[4,5],iteratee,comparator)).to.equal([1,2,3]);
    });
    it("Array is faulty", () =>{
        const pair1 = 5;
        expect(() => file((array, values, iteratee, comparator)
        .to.throw(Error), 'array is faulty'
    });
    it("Values is faulty", () =>{
        const pair1 = 5;
        expect(() => file((array, values, iteratee, comparator)
        .to.throw(Error), 'values is faulty'
    });
    */
})

