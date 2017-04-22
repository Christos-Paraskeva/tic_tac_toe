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
    var whichPlayerMove = this._whichPlayerMove();

    if (this._isValidMove(move) === true) {
      this._storeMove(whichPlayerMove, move);
      this._markChosenMovePosition(this.currentMoveIndex, this.player1.symbol);
      this._isWinner();
      }
    else {
      throw "Invalid Move";
    }
  };

  Game.prototype._whichPlayerMove = function () {
    if (this.player1.currentTurn === true) {
      this._switchPlayerTurn(1);
      return this.player1;
    }
    else if (this.player2.currentTurn === true) {
      this._switchPlayerTurn(2);
      return this.player2;
    }
  };

  Game.prototype._switchPlayerTurn = function(currentPlayer) {
    if (currentPlayer === 1) {
      this.player1.currentTurn = false; this.player2.currentTurn = true;
    }
    else {
      this.player1.currentTurn = true; this.player2.currentTurn = false;
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
      if ((this.winningCombinationRules[i].sort().join() === this.player1.movesMade.sort().join()) === true) {
        this._endGame();
      }
    }
  };

  Game.prototype._endGame = function() {
    alert("You are the winner!");
  };

  exports.Game = Game;
})(this);
