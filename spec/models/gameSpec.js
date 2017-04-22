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

  describe('Winning combination rules', function() {

    it("exists", function(){
      expect(game.winningCombinationRules).toBeDefined();
    });

    it("contains the correct winning combinations", function() {
      expect(game.winningCombinationRules).toEqual(winningCombinationRules());
    });
  });

  describe('When making a move', function() {

    beforeEach(function() {
      game.player1.movesMade = [];
      game.player2.movesMade = [];
      game.grid.structure = resetGrid();
      game.startGame();
      });

    it("allows player1 to make a move", function() {
      game.makeMove('M2');
      expect(game.player1.movesMade).toEqual(['M2']);
    });

    it("allows player2 to make a move after player1", function() {
      game.makeMove('M2');
      game.makeMove('L3');
      expect(game.player2.movesMade).toEqual(['L3']);
    });

    it("allows both players to make two moves each", function() {
      game.makeMove('M2');
      game.makeMove('L3');
      game.makeMove('M3');
      game.makeMove('R1');
      expect(game.player1.movesMade).toEqual(['M2', 'M3']);
      expect(game.player2.movesMade).toEqual(['L3', 'R1']);
    });

    it("associates that move with the specific player", function() {
      game.makeMove('M2');
      expect(game.player1.movesMade).toEqual(['M2']);
    });

    it("declares winner if player completes a winning combination after a move", function(){
      spyOn(window, 'alert');
      game.makeMove('L1');
      game.makeMove('R2');
      game.makeMove('M2');
      game.makeMove('R1');
      game.makeMove('R3');
      expect(window.alert).toHaveBeenCalledWith('You are the winner!');
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
  });
});
