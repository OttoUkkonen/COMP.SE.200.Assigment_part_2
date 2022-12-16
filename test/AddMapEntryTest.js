import chai, { Assertion, AssertionError } from "chai"
import file from "../src/.internal/addMapEntry.js"
//var chai = require("chai")
//var file = require ("../src/add")
//testing branch
const expect = chai.expect
const map0 = new Map();

describe("addMapEntryTests", () => {
    it("Gives map object and pair, checks if map updates", () =>{
        const pair1 = ['a',1];
        const map1 = file(map0,pair1);
        expect((map1.get('a'))).to.equal(1);
    });
    it("Gives map object and 2 pairs, checks if map has the specific 2 keys", () =>{
        const pair1 = ['a',1];
        const pair2 = ['b',2];
        const map1 = file(map0,pair1);
        const map2 = file(map1,pair2);
        expect(map2).to.have.keys('a','b');
    });
    it("Gives map object and key that already is on map, checks if map updates", () =>{
        const pair1 = ['a',1];
        const pair2 = ['a',2];
        const map1 = file(map0,pair1);
        const map2 = file(map1,pair2);
        expect((map2.get('a'))).to.equal(2);
    });
    it("Only pair param on fucntion call", () =>{
        const pair1 = ['a',1];
        expect(() => file(pair1)).to.throw(TypeError), 'One input'
    });
    it("Only one value inside pair param", () =>{
        const pair1 = ['a'];
        expect(() => file(map0,pair1)).to.throw(Error), 'One value in pair'
    });
    it("Only map param on fucntion call", () =>{
        expect(() => file(map0)).to.throw(TypeError), 'One input'
    });
    it("Map param is not map", () =>{
        const array = [1,2];
        const pair1 = ['a',1];
        expect(() => file(array,pair1)).to.throw(TypeError), 'map is not map object'
    });
    it("Array param is not array", () =>{
        const pair1 = 5;
        expect(() => file(map0,pair1)).to.throw(Error), 'array is not array object'
    });
   })
