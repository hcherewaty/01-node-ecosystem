'use strict';

//require faker
const faker = require('faker');
//require module for test
const arithmetic = require('../lib/arithmetic.js');

//assign faker variables
let randomNumber = faker.random.number();
let randomNumberTwo = faker.random.number();
// let randomNumberThree = faker.random.number();

describe('Add function', () => {
  it('adds two numbers', () => {
    let sum = arithmetic.add(randomNumber, randomNumberTwo);
    let expectedVal = randomNumber + randomNumberTwo;
    expect(sum).toEqual(expectedVal);
  });
  it('does not take strings as parameters', () => {
    let sum = arithmetic.add('meow', 'woof');
    expect(sum).toBeNull();
  });
});

describe('Subtract function', () => {
  it('subtracts two numbers', () => {
    let minus = arithmetic.subtract(randomNumber, randomNumberTwo);
    let expectedVal = randomNumber - randomNumberTwo;
    expect(minus).toEqual(expectedVal);
  });
  it('does not take strings as parameters', () => {
    let minus = arithmetic.subtract('meow', 'woof');
    expect(minus).toBeNull();
  });
});

describe('Multiply function', () => {
  it('multiples two numbers', () => {
    let mult = arithmetic.multiply(randomNumber, randomNumberTwo);
    let expectedVal = randomNumber * randomNumberTwo;
    expect(mult).toEqual(expectedVal);
  });
  it('does not take strings as parameters', () => {
    let mult = arithmetic.multiply('woof', 'meow');
    expect(mult).toBeNull();
  });
});

describe('Divide function', () => {
  it('divides two numbers', () => {
    let div = arithmetic.divide(randomNumber, randomNumberTwo);
    let expectedVal = randomNumber / randomNumberTwo;
    expect(div).toEqual(expectedVal);
  });
  it('does not accept string as parameters', () => {
    let div = arithmetic.divide('woof', 'meow');
    expect(div).toBeNull();
  });
});
