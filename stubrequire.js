/**
 * Returns a "require" function which stubs out certain modules globally.
 * This is similar to Jest's auto-mock functionality.
 *
 * Usage:
 *
 *   // BigComplexModule.js
 *   module.exports = {
 *     foo: function() { return 42; }
 *   };
 *
 *   // foo.js
 *   module.exports = function() {
 *     return require('./BigComplexModule').foo();
 *   };
 *
 *   // foo-test.js
 *   var stubRequire = require('stubrequire')({
 *     autoStub: ['BigComplexModule']
 *   }),
 *       foo = stubRequire('./foo');
 *
 *   foo();  // returns undefined, not 42.
 */
var stubber = require('./stubber');

function makeModuleStub(moduleName) {
  var m = stubber(module.parent.require(moduleName));
  m['@global'] = true;
  return m;
}

function makeStubRequire(modulesToStub) {
  var stubs = {};
  modulesToStub.forEach(function(moduleName) {
    stubs[moduleName] = makeModuleStub(moduleName);
  });
  var proxyquire = module.parent.require('proxyquire');
  return function(moduleName) {
    return proxyquire(moduleName, stubs);
  };
};

module.exports = makeStubRequire;
