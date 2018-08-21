const Hero = function(name, health, food, phrase){
  this.name = name;
  this.health = health;
  this.food = food;
  this.phrase = phrase;
  this.tasks = [];
};

Hero.prototype.eatFood = function(food){
  this.health += food.replishmentValue
};


module.exports = Hero;
