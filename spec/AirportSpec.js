'use strict';

describe('Airport', function() {
  var airport;
  beforeEach(function() {
    airport = new airport();
  });
  it ('can keep track of planes', function(){
    expect(airport.planes()).not.toBeUndefined()
  });
});