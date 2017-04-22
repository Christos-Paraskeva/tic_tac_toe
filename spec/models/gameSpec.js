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

    it("receives a player one", function() {
        expect(game.playerOne instanceof Player).toBe(true);
    });

    it("receives a player two", function() {
        expect(game.playerTwo instanceof Player).toBe(true);
    });

    it("player one is initialized with 'X'", function() {
      expect(game.playerOne.symbol).toEqual('X');
    });

    it("player one is initialized with 'O'", function() {
      expect(game.playerTwo.symbol).toEqual('O');
    });

    it("recieves a grid", function(){
      expect(game.grid instanceof Grid).toBe(true);
    });


    describe('When starting a new game', function() {

      function GridDouble() {
        this.structure = resetGrid();
      }

      var game = new Game(playerOne = new PlayerDouble('X'), playerTwo = new PlayerDouble('O'), grid = new GridDouble() );

      it("sets the current turn to player one", function() {
        game.startGame();
        expect(game.playerOne.currentTurn).toEqual(true);
        expect(game.playerTwo.currentTurn).toEqual(false);
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
      game.playerOne.movesMade = [];
      game.playerTwo.movesMade = [];
      game.grid.structure = resetGrid();
      game.startGame();
      });

    it("allows player one to make a move", function() {
      game.makeMove('M2');
      expect(game.playerOne.movesMade).toEqual(['M2']);
    });

    it("allows player two to make a move after player1", function() {
      game.makeMove('M2');
      game.makeMove('L3');
      expect(game.playerTwo.movesMade).toEqual(['L3']);
    });

    it("allows both players to make two moves each", function() {
      game.makeMove('M2');
      game.makeMove('L3');
      game.makeMove('M3');
      game.makeMove('R1');
      expect(game.playerOne.movesMade).toEqual(['M2', 'M3']);
      expect(game.playerTwo.movesMade).toEqual(['L3', 'R1']);
    });

    it("associates that move with the specific player", function() {
      game.makeMove('M2');
      expect(game.playerOne.movesMade).toEqual(['M2']);
    });

    it("declares player one as winner when completing a winning combination", function(){
      spyOn(window, 'alert');
      game.makeMove('L1');
      game.makeMove('R2');
      game.makeMove('M2');
      game.makeMove('R1');
      game.makeMove('R3');
      expect(window.alert).toHaveBeenCalledWith('Player One is the winner!');
    });

    it("declares player one as winner when completing a winning combination", function(){
      spyOn(window, 'alert');
      game.makeMove('R2');
      game.makeMove('L1');
      game.makeMove('R1');
      game.makeMove('M2');
      game.makeMove('L2');
      game.makeMove('R3');
      expect(window.alert).toHaveBeenCalledWith('Player Two is the winner!');
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
