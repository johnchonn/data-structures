var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new instance using Object.create to create new instances of my class

  // create items var set to 0
  // create starting index var set to 0
  // create storage empty object var
  // return new instance

  let newInstance = Object.create(queueMethods);

  newInstance.items = 0;
  newInstance.startingIndex = 0;
  newInstance.storage = {};

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


