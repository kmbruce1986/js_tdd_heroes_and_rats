const Task = function(difficulty, urgency, reward, completion){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = completion;
};

module.exports = Task;
