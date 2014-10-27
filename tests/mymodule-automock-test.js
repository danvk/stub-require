var stubRequire = require('../stubrequire')([
  './big-complex-module'
]);
var mymodule = stubRequire('./mymodule');

var assert = require('assert');


describe('MyModule', function() {
  it('should return undefined', function() {
    var m = mymodule();
    assert.equal(undefined, m.num);
    assert.equal(undefined, m.cfoo);
  });
});
