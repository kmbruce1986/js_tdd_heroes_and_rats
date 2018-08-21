const assert = require("assert");
const Hero = require("../hero.js")
const Task = require("../task.js")

let hero;
let task;

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

  it("should have a phrase", function(){
    const actual = hero.phrase;
    assert.deepStrictEqual(actual, "It's a-me, Mario!");
  });
  it("should have a collection of tasks", function(){
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, []);
  })

  describe("Task", function(){
    beforeEach(function(){
      task = new Task(5, 3, "Coin", true)
    });
    it("should have a difficulty level", function(){
      const actual = task.difficulty;
      assert.deepStrictEqual(actual, 5);
    });
    it("should have an urgency level", function(){
      const actual = task.urgency;
      assert.deepStrictEqual(actual, 3);
    });
    xit("should have a reward", function(){
      const actual = task.reward;
      assert.deepStrictEqual(actual, "Coin");
    });
    xit("should be able to be marked as completed");
  })
});
