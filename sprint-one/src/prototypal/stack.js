var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new instance var using Object.create to create instances of my class
  // create items var
  // create storage empty object var

  // return new instance var

  let newInstance = Object.create(stackMethods);

  newInstance.items = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {
  // create push function
  push: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },
  // create pop function
  pop: function() {
    if (this.items <= 0) {
      return undefined;
    }
    this.items--;
    return this.storage[this.items];
  },
  // create size function
  size: function() {
    return this.items;
  }
};


