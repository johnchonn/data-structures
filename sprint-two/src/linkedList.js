var LinkedList = function() {
  var list = {};
  list.headKey = null;
  list.tailKey = null;
  list.head = list[String(list.headKey)];
  list.tail = list[String(list.tailKey)];

  // What is the time complexity? Constant time
  list.addToTail = function(value) {
    // Should add a node to the end of the list and update the tail.
    // we are adding to an empty list, this should also update the head.

    //list{1: {value: "dog", next: 2}, 2: {value: "cat", next: 3}, 3: {value: "dog"}, 4: {value: "bird", next: 5}}

    //list is an object, it's keys are numbers, its values are Nodes. Each node has a next property that refers to the key of the next node in the list.

    //if list is empty, set head and tail to 1
    //if it is not empty, increment tail by 1.
    //insert a prop into list, with key of 'tail' and value the result of a call the Node constructor function with the given value
    if (!list.headKey && !list.tailKey) {
      list.headKey = 1;
      list.tailKey = 1;
    } else {
      list.tailKey++;
    }

    list[String(list.tailKey)] = Node(value);
    list.head = list[String(list.headKey)];
    list.tail = list[String(list.tailKey)];
    // console.log('added: ', list.tail.value, ' to tail\n list is now: ', list);

  };

  // What is the time complexity? constant time
  list.removeHead = function() {
    // Input - none, just a call to this method
    // Output - the value of the node that was referenced by head
    //Constraints
    //Edge cases - if the list is empty return undefined?

    //head be a number. That number should correspond to a key in List. list[String(head)] should refer to the first node
    //save the value of that key to a variable (toBeReturned)
    //list[string(head)]
    //delete that property
    //update the head to equal the next item by incrementing
    //return toBeReturned
    // console.log('2B removed: ', list.head);
    let toBeReturned = list.head;
    delete list[String(list.headKey)];
    list.headKey++;
    list.head = list[String(list.headKey)];
    // console.log('\n list is now: ', list);
    return toBeReturned.value;
  };

  // What is the time complexity? Quadatric time
  list.contains = function(target) {
    //target should be a value
    //Input - a value, that should correspond to the value of a node
    //Output - a boolean that refers to whether or not the value was found
    //constraints - ?
    //Edge cases - ?

    //Object.values = [{val: x, next:1}, ...]
    return Object.values(list).some(obj => obj.value === target);
  };
  //console.log(list);
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


//node -> should be {value: 'value', next: 'next item in list'}
/*
 * Complexity: What is the time complexity of the above functions?
overall it is quadratic time
 */
