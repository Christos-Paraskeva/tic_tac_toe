(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O'), grid = new Grid()) {
    this.player1 = player1;
    this.player2 = player2;
    this.grid = grid;
    this.currentMoveIndex;
    this.winningCombinationRules = [['L1', 'M2', 'M3'],
                                    ['L2', 'M2', 'R3'],
                                    ['L3', 'M3', 'R3'],
                                    ['L1', 'L2', 'L3'],
                                    ['M1', 'M2', 'M3'],
                                    ['R1', 'R2', 'R3'],
                                    ['L1', 'M2', 'R3'],
                                    ['L3', 'M2', 'R1']];
  }

  Game.prototype.startGame = function() {
    this.player1.currentTurn = true;
  };

  Game.prototype.makeMove = function(move) {
    if (this._isValidMove(move) === true) {
      this._storeMove(this.player1, move);
      this._markChosenMovePosition(this.currentMoveIndex, this.player1.symbol);
      this._isWinner();
      }
    else {
      throw "Invalid Move";
    }
  };

  Game.prototype._isValidMove = function(move) {
    for (var i=0, iLen=this.grid.structure.length; i<iLen; i++) {
      if (this.grid.structure[i] === move) {
        this.currentMoveIndex = i;
        return true;
      }
    }
  };

  Game.prototype._storeMove = function(currentPlayer, move) {
    currentPlayer.movesMade.push(move);
  };

  Game.prototype._markChosenMovePosition = function(indexPosition, playerSymbol) {
    this.grid.structure.splice(indexPosition, 1, playerSymbol);
  };

  Game.prototype._isWinner = function() {
    for (var i=0, iLen=this.winningCombinationRules.length; i<iLen; i++) {
      if (this.winningCombinationRules[i].sort() === this.player1.movesMade.sort()); {
        console.log('winningcomborules', this.winningCombinationRules[i].sort())
        console.log('movesmade', this.player1.movesMade.sort())
        console.log('true/false',this.winningCombinationRules[i].sort() === this.player1.movesMade.sort())
        this._endGame();
      }
    }
  };

  Game.prototype._endGame = function() {
    // alert("You are the winner!");
  };

  exports.Game = Game;
})(this);
