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

  // describe('Calls game model', function() {
  //
  //   it("when starting a new game", function() {
  //     var startGame = spyOn(gameController.game, 'startGame').and.callThrough();
  //     var resetGame = spyOn(gameController, '_resetGame').and.callThrough();
  //     gameController.startNewGame();
  //     expect(resetGame).toHaveBeenCalled();
  //     expect(startGame).toHaveBeenCalled();
  //   });
  // });

  // describe('Functionality', function() {
  //
  //   it("receives a new game model when starting a new game", function() {
  //     var resetGame = spyOn(gameController, '_resetGame').and.callThrough();
  //     gameController.startNewGame();
  //     expect(resetGame).toHaveBeenCalled();
  //   });
  // });
});
