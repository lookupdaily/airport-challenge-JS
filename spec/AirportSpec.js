'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it ('can keep track of planes', function(){
    expect(airport.planes()).toEqual([])
  });

  it ('can land a plane', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane])
  });
});