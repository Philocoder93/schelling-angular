"use strict";
(function(){
  angular
  .module('game')
  .controller('gameCrtl',[
    "$interval",
    gameCrtlFunction
  ])

  function gameCrtlFunction($interval) {

    this.generateBoard = function(size){
      let out = []
      for (let i=0;i<size;i++) {
        out.push(new Array(size))
        let die = Math.random().toString().split("")
        for (let j=0;j<size;j++) {
          if (die.length < 5) {
            die = Math.random().toString().split("")
          }
          if (die.join("")<0.425) {
            out[i][j] = "red"
          }
          else if (die.join("")<0.85) {
            out[i][j] = "blue"
          }
          else {
            out[i][j] = "white"
          }
          die.splice(2,1)
        }
      }
      return out
    }

    this.shuffleArray = function(array) {
      let out = []
      let length = array.length
      for (var i=0;i<length;i++) {
        let randomInteger = Math.floor(Math.random()*array.length)
        out.push(array.splice(randomInteger,1)[0]);
      }
      return out
    }
    // this shuffle method is based on code found here:
    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    this.generatePath = function(size) {
      let out = []
      for (let i=0;i<size;i++) {
        for (let j=0;j<size;j++) {
          out.push([i,j])
        }
      }
      return out
    }

    this.board = this.generateBoard(50)
    this.path = this.shuffleArray(this.generatePath(50))

    this.traverseBoard = function(Board, Path){
      let unsatisfied = []
      let openWhites = []
      for(let i=0;i<Path.length;i++){
        let x = Path[i][0]
        let y = Path[i][1]
        if (Board[x][y] == "blue") {
          if (this.checkForSatisfaction(Board, x, y, "red")) {
            unsatisfied.push([x,y])
          }
        }
        else if (Board[x][y] == "red") {
          if (this.checkForSatisfaction(Board, x, y, "blue")) {
            unsatisfied.push([x,y])
          }
        }
        else if (Board[x][y] == "white") {
          openWhites.push([x,y])
        }
      }
      console.log('firing')
      this.switch(Board, unsatisfied, openWhites)
    }

    this.switch = function(Board, unsatisfied, openWhites) {
      var longer = []
      var shorter = []
      if (unsatisfied.length > openWhites.length) {
        longer = unsatisfied
        shorter = openWhites
      }
      else {
        longer = openWhites
        shorter = unsatisfied
      }
      shorter = this.shuffleArray(shorter)
      longer = this.shuffleArray(longer)
      for (let i=0;i<shorter.length;i++) {
        var thirdShell = Board[longer[i][0]][longer[i][1]]
        Board[longer[i][0]][longer[i][1]] = Board[shorter[i][0]][shorter[i][1]]
        Board[shorter[i][0]][shorter[i][1]] = thirdShell
      }
    }

    this.checkForSatisfaction = function(Board, x, y, Color) {
      var adjacent = 0
      function checkCell(Board, x, y, Color) {
        try {
          if (Board[x][y] == Color) {
            adjacent ++
          }
        }
        catch (e) {}
      }
      checkCell(Board, x+1, y+1, Color)
      checkCell(Board, x+1, y, Color)
      checkCell(Board, x+1, y-1, Color)
      checkCell(Board, x, y-1, Color)
      checkCell(Board, x-1, y-1, Color)
      checkCell(Board, x-1, y, Color)
      checkCell(Board, x-1, y+1, Color)
      checkCell(Board, x, y+1, Color)
      if (adjacent >= 3) {
        return true
      }
      else {
        return false
      }
    }
    this.aThousandRuns = function() {
      var that = this
      $interval(function() {that.traverseBoard(that.board, that.path)}, 300, 1000)
    }
    this.newBoard = function() {
      this.board = this.generateBoard(50)
      this.path = this.shuffleArray(this.generatePath(50))
    }
  }
}())
