var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new instance var as an empty object
  // create items var set to 0
  // create starting index set to 0

  // use extend and use new instance and queueMethods as parameters
  // return new instance

  let newInstance = {
    items: 0,
    startingIndex: 0,
    storage: {},
  };

  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {
  // create enqueue function
  enqueue: function(value) {
    this.storage[this.items + this.startingIndex] = value;
    this.items++;
  },
  // create dequeue function
  dequeue: function() {
    if (this.items <= 0) {
      return undefined;
    } else {
      this.items--;
      let targetItem = this.storage[this.startingIndex];
      this.startingIndex++;
      return targetItem;
    }
  },
  // create size function
  size: function() {
    return this.items;
  }
};


