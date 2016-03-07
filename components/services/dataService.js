var app = angular.module('homeApp');
app.service('dataService', function () {

  var taskList = [{
    name: 'Task1',
    desc: 'Task 1 is a task',
    state: 1
  },{
    name: 'Task2',
    desc: 'Task 2 is underway!',
    state: 2
  },{
    name: 'Task3',
    desc: 'This is another new task',
    state: 1
  },{
    name: 'Task4',
    desc: 'This one is already finished',
    state: 3
  }]

  this.getTasks = function () {
    return taskList;
  }

  this.advTask = function(name) {
    for (var i = 0; i < taskList.length; i++) {
      if (name === taskList[i].name) {
        taskList[i].state = taskList[i].state + 1
        if (taskList[i].state >= 4) {
          taskList.splice(i,1);
        }
      }
    }
  }

  this.delTask = function(name) {
    for (var i = 0; i < taskList.length; i++) {
      if (name === taskList[i].name) {
          taskList.splice(i,1);
      }
    }
  }

  this.newTask = function(name,desc) {
    var task = {
      name: name,
      desc: desc,
      state: 1
    };
    taskList.push(task);
  }

})
