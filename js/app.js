"use strict";
(function(){
  angular
  .module('schelling', [
    'game',
    'nav',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ])
  .config([
    '$urlRouterProvider',
    ReRouterFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'js/game/welcome.html',
      controller: 'welcomeCrtl',
      controllerAs: 'welcomeVM'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/game/about.html',
      controller: 'aboutCrtl',
      controllerAs: 'aboutVM'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'js/game/game.html',
      controller: 'gameCrtl',
      controllerAs: 'gameVM'
    })
  }

  function ReRouterFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome')
  }
}())
