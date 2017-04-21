describe('Game', function() {
  var game = new Game();

  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("receives a player 1", function() {
      expect(game.player1 instanceof Player).toBe(true);
  });

  it("receives a player 2", function() {
      expect(game.player2 instanceof Player).toBe(true);
  });

  it("player1 is initialized with 'X'", function() {
    expect(game.player1.symbol).toEqual('X');
  });

  it("player1 is initialized with 'X'", function() {
    expect(game.player2.symbol).toEqual('O');
  });
});
