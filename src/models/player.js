(function(exports) {

  function Player(symbol) {
    this.symbol = symbol;
    this.currentTurn = false;
    this.movesMade = [];
  }

  exports.Player = Player;
})(this);
