describe('Game', function() {
  var game = new Game();

  function PlayerDouble() {
    this.currentTurn = false;
    this.movesMade = [];
  }

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

      function GridDouble() {
        this.structure = resetGrid();
      }

      var game = new Game(player1 = new PlayerDouble('X'), player2 = new PlayerDouble('O'), grid = new GridDouble() );

      it("sets the current turn to player 1", function() {
        game.startGame();
        expect(game.player1.currentTurn).toEqual(true);
        expect(game.player2.currentTurn).toEqual(false);
      });
    });
  });

  describe('When making a move', function() {

    beforeEach(function() {
      game.player1.movesMade = [];
      game.grid.structure = resetGrid();
      });

    it("it associates that move with the specific player", function() {
      game.makeMove('M2');
      expect(game.player1.movesMade).toEqual(['M2']);
    });

    describe('Edge cases', function() {

      it("throws error if make an invalid move request", function() {
        expect(function() {game.makeMove('X2')}).toThrow("Invalid Move");
      });

      it("makes valid move unavailable to be selected more than once", function() {
        game.makeMove('M2');
        expect(function() {game.makeMove('M2')}).toThrow("Invalid Move");
      });
    });

    describe('Winning combination rules', function() {

      it("exist", function() {
        expect(game.winningCombinationRules).toEqual([['L1', 'M2', 'M3'], ['L2', 'M2', 'R3'], ['L3', 'M3', 'R3'], ['L1', 'L2', 'L3'], ['M1', 'M2', 'M3'], ['R1', 'R2', 'R3'], ['L1', 'M2', 'R3'], ['L3', 'M2', 'R1']]);
      });
    });
  });
});
