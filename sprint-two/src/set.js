var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //takes in a STRING, and adds it to the set
  //only if it is not already found in the set
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  //returns a boolean saying whether or not the item is contained in the set
  return this.storage.includes(item);

};

setPrototype.remove = function(item) {
  //removes the STRING from the set, if present.
  if (this.contains(item)) {
    this.storage.splice(this.storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//a set is a data structure that contains only unique value, in no particular order
//