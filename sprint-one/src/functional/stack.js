var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // numeric keys...
  // create keys var set to 0 to use as numeric keys inside storage
  let keys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // create a numeric key inside storage using our keys var
    //   increment keys var by 1
    storage[keys] = value;
    keys++;
  };

  someInstance.pop = function() {
    // if keys is less than or equal to 0 return undefined
    if (keys <= 0) {
      return undefined;
    }
    // keys decrements by 1
    //   as it is decrementing, return the value where keys at the current number sits inside storage
    keys--;
    return storage[keys];
  };

  someInstance.size = function() {
    // return keys
    return keys;
  };

  return someInstance;
};
