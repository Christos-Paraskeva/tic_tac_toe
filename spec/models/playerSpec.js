describe('Player', function() {
  var player = new Player();

  it("exists", function() {
    expect(player).toBeDefined();
  });

  it("player1 can be initialized with 'X'", function() {
    var player = new Player('X');
    expect(player.symbol).toEqual('X');
  });

  it("player can be initialized with 'O'", function() {
    var player = new Player('O');
    expect(player.symbol).toEqual('O');
  });
});
