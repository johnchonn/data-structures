var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create a item var set to 0
  // create a tracker for the starting index
  let items = 0;
  let startingIndex = 0;
  // Implement the methods below

  // line at an amusement park analogy

  // if one person joins the queue, they start at the end, and the first person at the front of the queue leaves
  // process happens, the starting index will constantly change until the queue disappears (no more people in line)
  // the first index will become the next person

  someInstance.enqueue = function(value) {
    // create numeric keys within storage and its value set to the value parameter
    // increment item by 1
    storage[items + startingIndex] = value;
    items++;
  };

  someInstance.dequeue = function() {
    // if items are equal to or less than 0 return undefined
    // decrement items by 1
    // as it is decrementing, return the value where items at the current number sits inside storage
    // increment startingIndex (line moves forward thus first index changes)
    // return the item where startingIndex sits in storage
    if (items <= 0) {
      return undefined;
    } else {
      items--;
      let targetValue = storage[startingIndex];
      startingIndex++;
      return targetValue;
    }
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
