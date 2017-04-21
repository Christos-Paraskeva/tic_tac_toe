(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O'), grid = new Grid()) {
    this.player1 = player1;
    this.player2 = player2;
    this.grid = grid;
  }

  Game.prototype.startGame = function() {
    this.player1.currentTurn = true;
  };

  exports.Game = Game;
})(this);
