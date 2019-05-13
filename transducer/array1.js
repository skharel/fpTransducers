'use strict';

/*
    using all api from transducers-js

*/

const { comp, filter, map, transduce } = require('transducers-js');

const add1 = n => n + 1;
const isEven = n => n % 2 === 0;
const addToArray = (acc, a) => {
  acc.push(a);
  return acc;
};

const xf = comp(map(add1), filter(isEven));

const y = transduce(xf, addToArray, [], [1, 2, 3, 4]);
console.log(y);
