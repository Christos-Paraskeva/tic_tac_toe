(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O')) {
    this.player1 = player1;
    this.player2 = player2;
  }

  exports.Game = Game;
})(this);
