class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create items var and storage var using "this" inside the construction
  constructor() {
    this.items = 0;
    this.storage = {};
  }

  // create push function
  push(value) {
    this.storage[this.items] = value;
    this.items++;
  }

  // creation pop function
  pop() {
    if (this.items <= 0) {
      return undefined;
    } else {
      this.items--;
      return this.storage[this.items];
    }
  }

  // create size function
  size() {
    return this.items;
  }
}

let es6Class = new Stack();