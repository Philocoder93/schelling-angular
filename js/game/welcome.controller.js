"use strict";
(function(){
  angular
  .module('game')
  .controller('welcomeCrtl',[
    welcomeCrtlFunction
  ])

  function welcomeCrtlFunction() {
    this.hello = function(){
      console.log('hey there')
    }
  }
}())
