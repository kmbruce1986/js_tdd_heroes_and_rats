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

  it("should have a favourite food", function(){
    const actual = hero.food;
    assert.deepStrictEqual(actual, "Pizza");
  });
  xit("should have a phrase")
  xit("should have a collection of tasks")
})
