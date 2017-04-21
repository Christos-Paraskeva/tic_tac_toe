(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O'), grid = new Grid()) {
    this.player1 = player1;
    this.player2 = player2;
    this.grid = grid;
  }

  Game.prototype.startGame = function() {
    this.player1.currentTurn = true;
  };

  Game.prototype.makeMove = function(move) {
    if (this._isValidMove(move) === true) {
      this.player1.movesMade.push(move);
    }
  };

  Game.prototype._isValidMove = function(move) {

    for (var i=0, iLen=this.grid.structure.length; i<iLen; i++) {
      if (this.grid.structure[i] === move) {
        return true;
      }
    }
  };

  exports.Game = Game;
})(this);
