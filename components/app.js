var app = angular.module('homeApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'components/home/homeView.html'
  }).state('cal',{
    url: '/cal',
    tempalteUrl: 'components/cal/calView.html'
  }).state('todo',{
    url: '/todoList',
    templateUrl: 'components/todo/todoView.html'
  })
})
