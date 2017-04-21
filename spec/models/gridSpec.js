describe('Grid', function() {
  var grid = new Grid();

  it("exists", function() {
    expect(grid).toBeDefined();
  });

  it("is initialized with a grid structure", function(){
    expect(grid.structure).toEqual(['L1', 'M1', 'R1', 'L2', 'M2', 'R2', 'L3', 'M3', 'R3'])
  });
});
