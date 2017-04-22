(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O'), grid = new Grid()) {
    this.player1 = player1;
    this.player2 = player2;
    this.grid = grid;
    this.currentMoveIndex;
  }

  Game.prototype.startGame = function() {
    this.player1.currentTurn = true;
  };

  Game.prototype.makeMove = function(move) {
    if (this._isValidMove(move) === true) {
      this._storeMove(this.player1, move);
      this._markChosenMovePosition(this.currentMoveIndex, this.player1.symbol);
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

  exports.Game = Game;
})(this);
