"use strict";
(function(){
  angular
  .module('game')
  .controller('gameCrtl',[
    gameCrtlFunction
  ])

  function gameCrtlFunction() {
    this.generateBoard = function(size){
      let array = []
      for (let i=0;i<size;i++) {
        array.push(new Array(size));
        let die = Math.random().toString().split("").splice(2)
        for (let j=0;j<size;j++) {
          if (die[1]<3) {
            array[i][j] = "red"
          }
          else if (die[1]<6) {
            array[i][j] = "blue"
          }
          else {
            array[i][j] = "white"
          }
          die = die.slice(1)
        }
      }
      return array
    }

    this.shuffleArray = function(array) {
      let out = []
      let length = array.length
      for (var i=0;i<length;i++) {
        let randomInteger = Math.floor(Math.random()*array.length)
        out.push(array.splice(randomInteger,1)[0]);
      }
      console.log(out)
      return out
    }
    // this shuffle method is based on code found here:
    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    this.generatePath = function(size) {
      let array = []
      for (let i=0;i<size;i++) {
        for (let j=0;j<size;j++) {
          array.push([i,j])
        }
      }
      return array
    }

    this.traverseBoard = function(Board, Path){
      
    }



    this.board = this.generate(10)
    this.allWhite = function(array){
      for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
          array[i][j] = "white"
        }
      }
    }
    this.allRed = function(array){
      for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
          array[i][j] = "red"
        }
      }
    }
    this.allBlue = function(array){
      for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
          array[i][j] = "blue"
        }
      }
    }

  }
}())
