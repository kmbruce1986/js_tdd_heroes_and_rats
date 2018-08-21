const assert = require("assert");
const Hero = require("../hero.js")

let hero;

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Mario", 10, "Pizza", "It's a-me, Mario!")
  });
  it("should have a name", function(){
    const actual = hero.name;
    assert.deepStrictEqual(actual, "Mario");
  });

  it("should have a health rating", function(){
    const actual = hero.health;
    assert.deepStrictEqual(actual, 10);
  });
  
  xit("should have a favourite food")
  xit("should have a phrase")
  xit("should have a collection of tasks")
})
