'use strict';

/*

    implement a transducer map function rather then from a library
*/

const { transduce } = require('transducers-js');
const { compose, filter } = require('ramda');

const isEven = n => n % 2 === 0;
const addToArray = (acc, a) => {
  acc.push(a);
  return acc;
};

function add1(n) {
  return n + 1;
}

function map(step) {
  return function mapperHelper(reducer) {
    return {
      '@@transducer/init': () => reducer['@@transducer/init'](),
      '@@transducer/result': function mapperResult(a) {
        return reducer['@@transducer/result'](a);
      },
      '@@transducer/step': function mapperStep(acc, val) {
        let newVal = step(val);
        return reducer['@@transducer/step'](acc, newVal);
      }
    };
  };
}

const filtering = function(reducer) {
  let x = filter(isEven);
  const y = x(reducer);
  return y;
};

const xf = compose(
  map(add1),
  filtering
);

let y = transduce(xf, addToArray, [], [1, 2, 3, 4]);
console.log(y);
