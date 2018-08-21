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
  it("check if favourite food", function(){
    let food = new Food("Pizza", 20)
    hero.eatFood(food);
    const actual = hero.health;
    assert.deepStrictEqual(actual, 40)
  });
  it("sort tasks by difficulty", function(){
    let task1 = new Task(10, 5, "Star", true)
    let task2 = new Task(6, 1, "Coin", false)
    let task3 = new Task(3, 8, "Life", true)
    const actual = hero.sortTasksByDifficulty(task);
    assert.deepStrictEqual(actual, [task1, task2, task3])
  });
  xit("sort tasks by urgency");
  xit("sort tasks by reward");
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
      const actual = food.replenishmentValue;
      assert.deepStrictEqual(actual, 10);
    });
  });
});
