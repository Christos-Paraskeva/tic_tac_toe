describe('Player', function() {
  var player = new Player();

  it("exists", function() {
    expect(player).toBeDefined();
  });

  it("player1 is initialized with 'X'", function() {
    var player = new Player('X');
    expect(player.symbol).toEqual('X');
  });
});
