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

  //should be able to string numbers together
  it('should be able to chain numbers', function(){
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(8)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 238)
  })

  //should be able to chain calcaulations
  it('should be able to chain calculations', function(){
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5)
  })

  //should be able to clear the total
  it('should be able to clear the total', function(){
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 6)
    assert.equal(calculator.runningTotal, 0)
  })

});
