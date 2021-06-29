# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jan-lab/lotide`

**Require it:**

`const _ = require('@jan-lab/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element in an array
* `middle(array)`: returns the middle element(s) in an array
* `tail(array)`: returns elements in an array except the first element
* `countLettters(string)`: returns the frequency of occurrence of each letter in a string
* `countOnly(allItems, itemsToCount)`: returns the frequncy of occurrencies or a particular item in an array
* `findKey(array)`: returns an object key for a specific value (that is nested in a value object)
* `findKeyByValue((obj, value))`: returns an object key for a specific value
* `flatten(array)`: removes the 'nests' in a nested array and returns all the elements in a single non-nested array.
* `letterPositions(string)`: returns the index positions of each letter in the string
* `map(array, callback)`: performs an action specified in a callback function and returns a new array
* `takeUntil(array, callback)`: returns an array with the elements from the start of the array till a value from a callback function appears. The array does not include the value.
* `without(array1, array2)`: returns the 1st array without the elements included in the 2nd array