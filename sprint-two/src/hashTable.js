

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //this will be an object that contains our storage array, but also methods for working with that array

  //this._storage will contain our limitedarray methods
};

//we use our Hash.prototype.insert method, we give it a string key and a value
//we send key to the hashing function
//the hashing function will return us an index
//we use limitedArray.set, giving it our index and the value
//it will write that to our storage array
//if there is more than one

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //create an array that contains the key value pair
  //  declare a var that will be an array containing the key, then the value
  //use .retrieve to check the if there is any data saved inside of the given index,
  //  if this._storage.retrieve(key) returns anything other than undefined
  //    use .get to access the index at storage, and push our pair to that (.get(index) will return the storage[index] so we will push to that)
  //.get(index).push(pair)
  //  otherwise we can make a new array and push our key value pair to that.

  let pair = [key, value];
  var bucket = this._storage.get(index);
  if (bucket) {
    let containsKey = false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined && bucket[i][0] === key) {
        bucket[i][1] = value;
        containsKey = true;
      }
    }
    if (!containsKey) {
      bucket.push(pair);
    }

  } else {
    this._storage.set(index, []);
    this._storage.get(index).push(pair);
    console.log('the accessed bucket after: ', this._storage.get(index));
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //bucket is an array containing pairs
  //iterate through the bucket to find the pair that contains key[0]
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== undefined && bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //declare bucket, find the bucket in question
  //delete
  var bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== undefined && bucket[i][0] === key) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

