const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // the calculator should show the total
  it('should update the calculator with the total', function(){
  let total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(total.getAttribute('value')).to.eventually.equal('7')
  });

  // the calculator should return the result of calcaulations
  it('should update the calculator with the total of a calculation', function(){
  let total = element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(total.getAttribute('value')).to.eventually.equal('1')
});

  // the calculator should be able to chain operations also should return minus integers when required
  it('should be able to chain operations', function(){
  let total = element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(total.getAttribute('value')).to.eventually.equal('-3')
  })

  //the calculator can handle large numbers
  it('should be able to handle large numbers', function(){
  let total = element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(total.getAttribute('value')).to.eventually.equal('4000')
  })

  //the calculator should handle dividing by 0
  it('should be able to handle dividing by 0', function(){
  let total = element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(total.getAttribute('value')).to.eventually.equal('Infinity')
})

})
