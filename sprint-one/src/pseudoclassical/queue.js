var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use keyword "this" in order to create variables inside Queue function
  this.items = 0;
  this.startingIndex = 0;
  this.storage = {};
};

// create enqueue function
Queue.prototype.enqueue = function(value) {
  this.storage[this.items + this.startingIndex] = value;
  this.items++;
};

// create dequeue function
Queue.prototype.dequeue = function() {
  if (this.items <= 0) {
    return undefined;
  } else {
    this.items--;
    let targetItem = this.storage[this.startingIndex];
    this.startingIndex++;
    return targetItem;
  }
};

// create size function
Queue.prototype.size = function() {
  return this.items;
};

// return using keyword "new"
// let pseudoclassical = new Queue();