var stubber = require('../stubber');
var BigComplexModule = require('./big-complex-module');

var assert = require('assert');

describe('stubber', function() {
  it('should fully mock big complex module', function() {
    var stub = stubber(BigComplexModule);

    assert.equal(undefined, stub.complexfoo());
    var cc = new stub.ComplexClass();
    assert.equal(undefined, cc.foo());
  });

  it('should mock a module with a circular dependency', function() {
    var stub = stubber(require('underscore'));
    assert.equal(undefined, stub.keys());
    assert.equal(undefined, stub.map());
  });
});
