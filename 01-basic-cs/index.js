'use strict'

const _ = require('lodash') // https://lodash.com/docs/4.17.4
const assert = require('assert')

const database = require('./database.json')

const getSumOfTop3 = () =>
  _([])
    .concat(...database.map((el) => el.hats))
    .groupBy('id')
    .map((cases, id) => ({
      id,
      count: cases.length
    }))
    .orderBy('count', 'desc')
    .take(3)
    .sumBy('count')

const total = getSumOfTop3()

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`)

console.log('Success!')

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: O(n*m) with n = number of users, m = max number of hats that one user has bought
 *   - space complexity: O(n*m) because the lodash iterative function have keep a copy of all the bought hats before grouping and mapping
 */
