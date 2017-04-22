(function(exports) {

  function GameController(game = new Game()) {
    this.game = game;
  }

  GameController.prototype.startNewGame = function() {
    this.game.startGame();
    console.log(this.game.playerOne.currentTurn)

    this._resetGame();
    console.log(this.game.playerOne.currentTurn)
  };

  GameController.prototype._resetGame = function() {
    this.game = new Game();
  };

  exports.GameController = GameController;
})(this);
