describe('GameController', function() {

  function GameDouble() {
  }

  GameDouble.prototype = {
    startGame: function() {
    }
  };

  beforeEach(function() {
    gameController = new GameController(game = GameDouble());
  });

  it("exists", function() {
    expect(gameController).toBeDefined();
  });

  describe('When initialized', function() {

    it("receives a game model", function() {
      expect(gameController.game instanceof Game).toBe(true);
    });
  });

  describe('Calls game model', function() {

    it("when starting a new game", function() {
      var startGame = spyOn(gameController.game, 'startGame').and.callThrough();
      gameController.startNewGame();
      expect(startGame).toHaveBeenCalled();
    });
  });
});
