'use strict';

// Prep our interface mechanism (module.exports)
module.exports = exports = {};

/**
 * Interface Method: sayHello(name)
 * @param {string} name
 * @returns {string}
 */
exports.sayHello = (...name) => {
  if(name.length !== 1) { 
    return null; 
  }
  if( typeof name[0] !== 'string' ) { 
    return null; 
  }
  return `Hello, ${name[0]}!`;
};


