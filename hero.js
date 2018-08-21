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
// 
// Hero.prototype.addTask = function(task){
//   this.tasks.push(task)
// };
//
// Hero.prototype.sortTasksByDifficulty = function(task){
//   array_of_tasks = this.tasks.sort();
//   return array_of_tasks
// }

module.exports = Hero;
