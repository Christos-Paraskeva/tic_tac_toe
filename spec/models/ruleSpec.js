describe('Rules', function() {

  var rule = new Rule();

  it("exists", function() {
    expect(rule).toBeDefined();
  });

  it("is initialized with an array of correct combinations", function() {
    expect(rule.winningCombinationRules).toEqual(winningCombinationRules());
  });
});
