# fpTransducers

## Things the transduce method does:

1. Wrap the reducer function. By wrapping, the methods init, result & steps defined to make it compatible with transducer protocol.
2. transforming function is then invoked with this new wrapped function resulting in new transforming function (complies with transducer protocol)
3. Start transducing by applying reduction on this new function from 2, initializer value you passed & data.

 
 - The new function in step 2 has step method. This step method is called with the initial value/accumulator & each item from your data set.
- Some reduction happens and reduction is done. For this value it is tested if the reduction is completed; if yes result if returned. If no, step is called with new accumulated value and a data point until reduced.

