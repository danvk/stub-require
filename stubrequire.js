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
var proxyquire = require('proxyquire');

function makeModuleStub(moduleName) {
  var m = stubber(require(moduleName));
  m['@global'] = true;
  return m;
}

module.exports = function(modulesToStub) {
  var stubs = {};
  modulesToStub.forEach(function(moduleName) {
    stubs[moduleName] = makeModuleStub(moduleName);
  });
  return function(moduleName) {
    return proxyquire(moduleName, stubs);
  };
};
