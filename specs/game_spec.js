const assert = require("assert");
const Hero = require("../hero.js")
const Task = require("../task.js")
const Food = require("../food.js")

let hero;
let task;
let food;

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
  });
  it("should be able to eat food", function(){
    let food = new Food("Ice Cream", 10)
    hero.eatFood(food);
    const actual = hero.health;
    assert.deepStrictEqual(actual, 20)
  });
  xit("check if favourite food");
  xit("sort tasks by difficulty, urgency or reward");
  xit("view if tasks are complete or incomplete");

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
    it("should have a reward", function(){
      const actual = task.reward;
      assert.deepStrictEqual(actual, "Coin");
    });
    it("should be able to be marked as completed", function(){
      const actual = task.completion;
      assert.deepStrictEqual(actual, true);
    });
  })

  describe("Food", function(){
    beforeEach(function(){
      food = new Food("Ice Cream", 10)
    });
    it("should have a name", function(){
      const actual = food.foodName;
      assert.deepStrictEqual(actual, "Ice Cream");
    });
    it("should have a replenishment value", function(){
      const actual = food.replishmentValue;
      assert.deepStrictEqual(actual, 10);
    });
  });
});
