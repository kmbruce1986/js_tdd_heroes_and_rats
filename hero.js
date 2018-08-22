const Hero = function(name, health, food, phrase){
  this.name = name;
  this.health = health;
  this.food = food;
  this.phrase = phrase;
  this.tasks = [];
};

Hero.prototype.eatFood = function(food){
  if (food.foodName === this.food) {
    extraValue = 1.5 * food.replenishmentValue;
    this.health += extraValue
  }
  else {
    this.health += food.replenishmentValue
  }
};

Hero.prototype.countNumberOfTasks = function(){
  return this.tasks.length
};

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
};


Hero.prototype.sortTasksByReward = function(){
  function sortfunction(a, b){
    return (a - b);
  };
  return this.tasks.sort(sortfunction);


}

module.exports = Hero;
