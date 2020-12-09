const assert = require('assert');
const Journey = require('../models/journey.js');

describe('Journey', function() {

  let journey1;

  beforeEach(function() {
    journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
  });

  xit('should have a start location', function() {
    const actual = journey1.startLocation;
    assert.strictEqual(actual, 'linlithgow');
  });

  xit('should have a end location', function() {
    const actual = journey1.endLocation;
    assert.strictEqual(actual, 'stirling');
  });

  xit('should have a mode of transport', function() {
    const actual = journey1.transport;
    assert.strictEqual(actual, 'train');
  });

  xit('should have a distance', function() {
    const actual = journey1.distance;
    assert.strictEqual(actual, 30);
  });

});
