'use strict';

/*
    from transducers-js & ramda js

*/

const { compose, filter, map } = require('ramda');
const { transduce } = require('transducers-js');

const add1 = n => n + 1;
const isEven = n => n % 2 === 0;
const reducer = (acc, a) => {
  acc.push(a);
  return acc;
};

const xf = compose(
  map(add1),
  filter(isEven)
);

const y = transduce(xf, reducer, [], [1, 2, 3, 4]);
console.log(y);
