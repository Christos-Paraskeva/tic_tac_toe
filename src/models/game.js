(function(exports) {

  function Game(player1 = new Player('X'), player2 = new Player('O')) {
    this.player1 = player1;
    this.player2 = player2;
    console.log(this.player1 === this.player1)
  }

  exports.Game = Game;
})(this);
