describe('GameController', function() {
  var gameController = new GameController();

  it("exists", function() {
    expect(gameController).toBeDefined();
  });

  describe('When initialized', function() {

    it("receives a game model", function() {
      expect(gameController.game instanceof Game).toBe(true);
    });
  });
});
