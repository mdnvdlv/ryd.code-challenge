const _ = require('lodash/fp');

/**
 * We order results searched words by length
 * @param {Array} filtered ex: [[1,' basti'], [4, bastian]]
 * @return {Array} return sorted array
 */
const sort = filtered => {
  return _.sortBy(el => el[1].length)(filtered)
}

/**
 * We find original object corresponding on ours research
 * @param {Array} initialArry Ours userList
 * @param {Array} sortedArry Result array of searched and sorted words
 * @return {Array} return of originals objects
 */
const merge = (initialArry, sortedArry) => _.map(el =>
  _.find(item => item.arrayId === parseInt(el[0], 10))(initialArry)
)(sortedArry)

/**
 * We find all matches through keys: prename, lastname, companyId
 * then we pass result at sort()
 * finally we get the original objects of ours research by merge()
 * @param {Array} array 
 * @param {String} word
 * @return {Array} Array of filtered and sorted objects
 */
const findAndSort = (array, word) => merge(array, sort(_.reduce((acc, item) => {
  const searchableKeys = [].concat(item.prename, item.lastname, item.companyId)

  _.each(el => {
    const indexEl = el.toLowerCase().indexOf(word.toLowerCase())
    // if no match return
    if (indexEl <= -1) return acc
    const splittedEl = el.split(' ')
    const containSameWord = _.some(splitted => splitted === word)(splittedEl)

    // if no spaces found in match return *
    if (splittedEl.length <= 1 || !containSameWord) return acc.push([item.arrayId, el])

    const newEl = _.find(splitted => splitted === word)(splittedEl)
    // We reach this point if there are spaces inside el and one of word splitted is equal to searched word
    // we push only the equal word that match (this will be useful for sort() function) **
    acc.push([item.arrayId, newEl])

  })(searchableKeys)

  return acc
}, [])(array)))

const filter = (list, searchWords) => _.flatten(_.map(word => {
  if (word.length <= 0) return list
  return findAndSort(list, word.toString())
})(searchWords))

module.exports.filter = filter;

// (*) This comment is related to test at row 64 --> ['hans', 'hans joachim','hans-peter']
// I've try various algo implementation fo space ' ' over  '-' but all return me the same weight of distance
// Algo tried: Dice coefficient / Levenshtein distance

// (**) Here I want a exact match because this "hans joachim" must be above "hanselm joachim"