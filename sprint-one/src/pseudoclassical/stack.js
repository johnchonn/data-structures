var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use keyword "this" to create items and storage vars inside Stack function
  this.items = 0;
  this.storage = {};
};

// create push function
Stack.prototype.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

// create pop function
Stack.prototype.pop = function() {
  if (this.items <= 0) {
    return undefined;
  } else {
    this.items--;
    return this.storage[this.items];
  }
};

// create size function
Stack.prototype.size = function() {
  return this.items;
};

// return using keyword "new"
let pseudoclassical = new Stack();

