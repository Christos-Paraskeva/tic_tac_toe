describe('Player', function() {
  var player = new Player();

  it("exists", function() {
    expect(player).toBeDefined();
  });

  it("player can be initialized with 'X'", function() {
    var player = new Player('X');
    expect(player.symbol).toEqual('X');
  });

  it("player can be initialized with 'O'", function() {
    var player = new Player('O');
    expect(player.symbol).toEqual('O');
  });

  it("is initialized with currentTurn variable", function(){
    expect(player.currentTurn).toBeDefined();
  });

  it("currentTurn is set to false by default", function(){
    expect(player.currentTurn).toEqual(false);
  });
});
