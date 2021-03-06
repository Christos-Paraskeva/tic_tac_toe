(function(exports) {

  function Game(playerOne = new Player('X'), playerTwo = new Player('O'), grid = new Grid(), rule = new Rule()) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.grid = grid;
    this.currentMoveIndex;
    this.winningCombinationRules = rule.winningCombinationRules;
    this.startGame();
  }

  Game.prototype.startGame = function() {
    this.playerOne.currentTurn = true;
  };

  Game.prototype.makeMove = function(move) {

    if (this._isValidMove(move) === true) {
      var whichPlayerMove = this._whichPlayerMove();
      this._storeMove(whichPlayerMove, move);
      this._markChosenMovePosition(this.currentMoveIndex, whichPlayerMove.symbol);
      this._isWinner(whichPlayerMove);
      }
    else {
      throw "Invalid Move";
    }
  };

  Game.prototype.endGame = function () {
    this.playerOne.currentTurn = false; this.playerTwo.currentTurn = false;
  };

  Game.prototype._whichPlayerMove = function () {
    if (this.playerOne.currentTurn === true) {
      this._switchPlayerTurn(1);
      return this.playerOne;
    }
    else if (this.playerTwo.currentTurn === true) {
      this._switchPlayerTurn(2);
      return this.playerTwo;
    }
  };

  Game.prototype._switchPlayerTurn = function(currentPlayer) {
    if (currentPlayer === 1) {
      this.playerOne.currentTurn = false; this.playerTwo.currentTurn = true;
    }
    else {
      this.playerOne.currentTurn = true; this.playerTwo.currentTurn = false;
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

  Game.prototype._isWinner = function(player) {
    for (var i=0, iLen=this.winningCombinationRules.length; i<iLen; i++) {
      if ((this.winningCombinationRules[i].sort().join() === player.movesMade.sort().join()) === true) {
        this._declareWinner(player);
      }
    }
  };

  Game.prototype._declareWinner = function(player) {
    if (player === this.playerOne) {
      alert("Player One is the winner!");
    }
    else {
      alert("Player Two is the winner!");
    }

    this.endGame();
  };

  exports.Game = Game;
})(this);
