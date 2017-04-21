describe('Game', function() {
  var game = new Game();

  it("exists", function() {
    expect(game).toBeDefined();
  });

  describe('When initialized', function() {

    it("receives a player 1", function() {
        expect(game.player1 instanceof Player).toBe(true);
    });

    it("receives a player 2", function() {
        expect(game.player2 instanceof Player).toBe(true);
    });

    it("player1 is initialized with 'X'", function() {
      expect(game.player1.symbol).toEqual('X');
    });

    it("player2 is initialized with 'O'", function() {
      expect(game.player2.symbol).toEqual('O');
    });

    it("recieves a grid", function(){
      expect(game.grid instanceof Grid).toBe(true);
    });


    describe('When starting a new game', function() {

      function PlayerDouble() {
        this.currentTurn = false;
        this.movesMade = [];
      }

      var game = new Game(player1 = new PlayerDouble('X'), player2 = new PlayerDouble('O') );

      it("sets the current turn to player 1", function() {
        game.startGame();
        expect(game.player1.currentTurn).toEqual(true);
        expect(game.player2.currentTurn).toEqual(false);
      });
    });
  });

  describe('When making a move', function() {
    // var game = new Game();
    it("it associates that move with the specific player", function() {
      game.makeMove('M2');
      expect(game.player1.movesMade).toEqual(['M2']);
    });

    // it("makes that move unavailable in the grid", function() {
    //     game.makeMove();
    //   expect(game.this.grid).toBeDefined();
    // });
  });
});
