(function(exports) {

  function GameController(game = new Game()) {
    this.game = game;
  }

  GameController.prototype.startNewGame = function() {
    gameController.game.startGame();
  };

  exports.GameController = GameController;
})(this);
