var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator should be able to add
  it('should be able to add numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3)
  })

  // calculator should be able to subtract
  it('should be able to subtract numbers', function(){
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 2)
  })

  // calculator should be able to divide
  it('should be able to divide numbers', function(){
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5)
  })

  // calculator should be able to multiply
  it('should be able to multiply numbers', function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 25)
  })

});
