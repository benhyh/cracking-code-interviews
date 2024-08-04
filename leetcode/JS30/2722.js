/**
 * Problem #2722 - Join Arrays by ID
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

/**
 * Plan:
 * 1. Create a map to store the objects from arr1
 * 2. Iterate through arr2
 * 3. If the id is in the map, merge the objects
 * 4. If the id is not in the map, add the object to the map
 * 5. Convert the map to an array and sort
 * 6. Return the array
 */

/**
 * Pattern and concepts:
 * 1. Key-value pairs => Map
 * 2. Merging objects => Spread operator
 * 3. Sorting => Sort
 * 4. Adding to a map => set
 * 5. Checking if a key exists in a map => has
 * 6. Getting a value from a map => get
 */

var join = function (arr1, arr2) {
  // Create a map to store the objects from arr1
  const joinedMap = new Map();

  // Process arr1
  for (let obj of arr1) {
    joinedMap.set(obj.id, obj); // Add to map
  }

  // Process arr2, merging or adding as needed
  for (let obj of arr2) {
    if (joinedMap.has(obj.id)) {
      joinedMap.set(obj.id, { ...joinedMap.get(obj.id), ...obj }); // Merge objects if id exists in map
    } else {
      joinedMap.set(obj.id, obj); // Add to map if id does not exist
    }
  }

  // Convert to array and sort
  return Array.from(joinedMap.values()).sort((a, b) => a.id - b.id);
};

// Test cases
console.log(
  join(
    [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
    [
      { id: 1, age: 30 },
      { id: 2, age: 25 },
    ]
  )
); // [{ id: 1, name: 'John', age: 30 }, { id: 2, name: 'Jane', age: 25 }]
