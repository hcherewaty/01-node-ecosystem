'use strict';

//Require Faker
const faker = require('faker');

//Require module for test
const greeting = require('../lib/greet.js');

//assign Faker variables

let randomNameOne = faker.name.firstName;
let randomNameTwo = faker.name.firstName;
let randomNumber = faker.random.number;

describe('Greeting', () => {
  it('requires one parameter', () => {
    let message = greeting.sayHello();
    expect(message).toBeNull();
  });

  it('does not allow more than 1 name', () => {
    let message = greeting.sayHello(randomNameOne, randomNameTwo);
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = greeting.sayHello(randomNumber);
    expect(message).toBeNull();
  });

  it('passes when given a word', () => {
    let message = greeting.sayHello('World');
    let expectedOutput = 'Hello, World!';
    expect(message).toEqual(expectedOutput);
  });
});