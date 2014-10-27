var ComplexStuff = require('./big-complex-module');

module.exports = function() {
  var num = ComplexStuff.complexfoo();
  console.log('ComplexStuff.complexfoo = ', num);

  var c = new ComplexStuff.ComplexClass();
  var cfoo = c.foo();
  console.log('ComplexClass.foo = ', cfoo);

  return {
    num: num,
    cfoo: cfoo
  };
};
