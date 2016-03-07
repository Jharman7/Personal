var app = angular.module('homeApp');

app.controller('todoCtrl', function ($scope, $stateParams, dataService) {

  var getTasks = function () {
    $scope.newTasks = [];
    $scope.inProgress = [];
    $scope.completed = [];
    var tasks = dataService.getTasks();
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].state === 1) {
        $scope.newTasks.push(tasks[i]);
      } if (tasks[i].state === 2) {
        $scope.inProgress.push(tasks[i]);
      } if (tasks[i].state === 3) {
        $scope.completed.push(tasks[i]);
      }
    }
  }
  getTasks();

  $scope.advTask = function(name) {
    dataService.advTask(name);
    getTasks();
  }

  $scope.delTask = function(name) {
    dataService.delTask(name);
    getTasks();
  }

  $scope.newTaskSub = function(name,desc) {
    dataService.newTask(name,desc);
    getTasks();
  }

})
