describe('Grid', function() {
  var grid = new Grid();

  it("exists", function() {
    expect(grid).toBeDefined();
  });

  it("is initialized with a grid structure", function(){
    expect(grid.structure).toEqual(resetGrid());
  });
});
