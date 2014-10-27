function ComplexClass() {
  console.log('Instantiating a really complex class.');
}

ComplexClass.prototype.foo = function() {
  console.log('Making a really Complex Class foo');
  return 10;
};


module.exports = {
  'complexfoo': function() {
    console.log('Doing something really slow and complex.');
    return 42;
  },
  'ComplexClass': ComplexClass
};
