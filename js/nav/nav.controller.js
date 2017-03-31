"use strict";
(function(){
  angular
  .module('nav')
  .controller('navCrtl',[
    '$state',
    navCrtlFunction
  ])

  function navCrtlFunction($state) {
    this.update = function(){
      var state = $state
      this.state = state
    }
    this.update();
    this.hello = function(){
      console.log('hello from the nav')
    }
  }
}())
