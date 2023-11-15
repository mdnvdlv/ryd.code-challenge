const fs = require('fs');
const { map, get, find, groupBy } = require('lodash')
const input = require('./input.json')

const antennaIds = [201, 202, 203, 204, 205, 206];
/**
 * npm start to run this file
 */


/**
 * Pure code readability
 *  |
 *  |
 *  V
 */

/**
 * @name groupByBeaconDate
 * Grouping by beaconID and timestamp
 * @returns {Array} 
 */
const groupByBeaconDate = groupBy(input, item => {
  return `${item.BeaconId}_${item.timestamp}`;
});

/**
 * We loop through antennaIDs to find if in our
 * group there are all antenna ids
 * If some antenna ids is missing it returns a default value (-135)
 * @param {Array} groupItems Group of items
 * @return {Array} Array of vectors
 */
const findVectors = (groupItems) => {
  return map(antennaIds, ant => get(find(groupItems, { 'ant_id': ant }), 'dbm_ant', -135))
};

function logVectors() {
  console.time('lodash');

  const result = map(groupByBeaconDate, groupItems => {

    const vector = findVectors(groupItems)
    return {
      beacon: `${groupItems[0].BeaconId}, ${groupItems[0].timestamp}`,
      vector
    }
  });
  console.log('output', result);

  console.timeEnd('lodash');
}
logVectors()

/**
 * more performance maintain readability
 *  |
 *  |
 *  V
 */
const groupByNative = (array, first, second) => {
  return array.reduce((acc, x) => {
    const composedKey = `${x[first]}|${x[second]}`
    if (acc[composedKey]) {
      acc[composedKey].push(x)
    } else {
      acc = { ...acc, [composedKey]: [x] }
    }
    return acc;
  }, {});
};

const groupByBeaconDateP = groupByNative(input, 'BeaconId', 'timestamp')

const getNative = (obj, path, defValue) => {
  if (!path) return undefined
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  return (
    pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj) || defValue
  )
}

const findVectorsP = (groupItems) => {
  return antennaIds.map(ant => getNative(groupItems.find(item => item.ant_id === ant), 'dbm_ant', -135))
};
function logVectorsP() {
  console.time('native');

  const result = Object.values(groupByBeaconDateP).map(groupItems => {

    const vector = findVectorsP(groupItems)
    return {
      beacon: `${groupItems[0].BeaconId}, ${groupItems[0].timestamp}`,
      vector
    }
  })
  console.log('result2', result)
  console.timeEnd('native');


}
logVectorsP()

/**
 * only performance
 * this one would consist in transform all map, filter, reduce in for loop
 * sorry if I decide to not  carrying out this part
 * but I think this should be done  in case of extreme necessity
 */
