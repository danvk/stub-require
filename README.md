stubrequire
===========

Automatically create stubbed-out versions of node.js modules, ala Jest's autoMock.

Usage:

```javascript
// BigComplexModule.js
module.exports = {
  foo: function() { return 42; }
};

// foo.js
module.exports = function() {
  return require('./BigComplexModule').foo();
};

// foo-test.js
var stubRequire = require('stubrequire')(['BigComplexModule']),
    foo = stubRequire('./foo');

foo();  // returns undefined, not 42.
```

stubrequire will mock out both methods and classes, i.e. if a module exports
`module.foo`, then `new module.foo()` will return an object with the same
methods as the original, but all stubbed out.

Installation

```
npm install --save-dev stubrequire
```
