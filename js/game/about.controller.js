"use strict";
(function(){
  angular
  .module('game')
  .controller('aboutCrtl',[
    aboutCrtlFunction
  ])

  function aboutCrtlFunction() {
    this.hello = function(){
      console.log('hey there')
    }
  }
}())
