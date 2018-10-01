const { expect } = require('chai');
const wrap = require('./wrap');

describe('Wrap', function() {
  it('should be a function', function() {
    expect(typeof wrap).to.equal('function');
  });
  xit('should take two arguments', function() {
    expect(wrap.arguments.length.to.equal(2));
  });
  it('should return a string', function() {
    let returnVal = wrap();
    expect(typeof returnVal).to.equal('string');
  });
  it('should break every n characters', function() {
    let returnVal = wrap('Hi there', 3);
    expect(returnVal).to.equal('Hi\nthere');
  });
  it('should break every n characters and account for imperfect scenario', function() {
    let returnVal = wrap('Hi there', 4);
    expect(returnVal).to.equal('Hi\nthere');
  });
});
