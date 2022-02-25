class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create items var and storage var and starting index var inside constructor using "this"
  constructor() {
    this.items = 0;
    this.startingIndex = 0;
    this.storage = {};
  }

  // create enqueue function
  enqueue(value) {
    this.storage[this.items + this.startingIndex] = value;
    this.items++;
  }

  // create dequeue function
  dequeue() {
    if (this.items <= 0) {
      return undefined;
    } else {
      this.items--;
      let targetItem = this.storage[this.startingIndex];
      this.startingIndex++;
      return targetItem;
    }
  }

  // create size function
  size() {
    return this.items;
  }
}

let es6Queue = new Queue();
