/**
 * Problem #2722 - Join Arrays by ID
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

/** Psuedo-Code
 * Input: arr1, arr2 => each array contains an object with an id field that has an integer value
 * Output: new array joinedArray (initialized as empty)
 *  If id in arr1 is equal to id in arr2, merge the two objects into a single object
 *  Should be sorted in ascending order by id
 *  If id in arr1 is not in arr2, add the object from arr1 to joinedArray w/ no modifications
 *  Note: arr2 overrides arr1 if there are duplicate ids
 */

var join = function (arr1, arr2) {
  const joinedMap = new Map();

  // Process arr1
  for (let obj of arr1) {
    joinedMap.set(obj.id, obj);
  }

  // Process arr2, merging or adding as needed
  for (let obj of arr2) {
    if (joinedMap.has(obj.id)) {
      joinedMap.set(obj.id, { ...joinedMap.get(obj.id), ...obj });
    } else {
      joinedMap.set(obj.id, obj);
    }
  }

  // Convert to array and sort
  return Array.from(joinedMap.values()).sort((a, b) => a.id - b.id);
};
