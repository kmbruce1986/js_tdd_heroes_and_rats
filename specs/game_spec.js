const assert = require("assert");
const Hero = require("../hero.js")

let hero;

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Mario", 10, "Pizza", "It's a-me, Mario!")
  });
  it("should have a name")
  xit("should have a health rating")
  xit("should have a favourite food")
  xit("should have a phrase")
  xit("should have a collection of tasks")
})
