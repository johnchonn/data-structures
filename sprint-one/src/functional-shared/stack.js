var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a new instance object var
  // create a items var to set 0 inside new instance object
  // create a storage object inside new instance object

  let newInstance = {
    items: 0,
    storage: {},
  };

  // use _.extend to copy stackMethods's data onto newInstance object
  // return newInstance
  _.extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {
  // create push function
  // use keyword this to access storage and create a key using items and set its value to value parameter
  // increment the items by 1
  push: function (value) {
    this.storage[this.items] = value;
    this.items++;
  },
  // create pop function
  // if the current items value is less than or equal to 0
  // return undefined
  // otherwise
  // decrement items by 1
  // return the value where the current value of items is at in storage
  pop: function () {
    if (this.items <= 0) {
      return undefined;
    } else {
      this.items--;
      return this.storage[this.items];
    }
  },
  // create size function
  // return the items using keyword this
  size: function() {
    return this.items;
  }
};


