var resetGrid = function() {
  return [ 'L1', 'M1', 'R1',
           'L2', 'M2', 'R2',
           'L3', 'M3', 'R3' ];
};

var winningCombinationRules = function() {
  return [['L1', 'M2', 'M3'],
          ['L2', 'M2', 'R3'],
          ['L3', 'M3', 'R3'],
          ['L1', 'L2', 'L3'],
          ['M1', 'M2', 'M3'],
          ['R1', 'R2', 'R3'],
          ['L1', 'M2', 'R3'],
          ['L3', 'M2', 'R1']];
};
