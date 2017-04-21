(function(exports) {

  function Game(player1 = new Player(), player2 = new Player()) {
    this.player1 = player1;
    this.player2 = player2;
    console.log(this.player1 === this.player1)
  }

  exports.Game = Game;
})(this);
