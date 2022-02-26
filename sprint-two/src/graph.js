




// [{"4": {edges: [5]}, "5":{edges: [4]}]

// Instantiate a new graph
var Graph = function() {
  // create instance of a new graph
  this.nodes = [];
  console.log(this);
};

// Add a node to the graph, passing in the node's value.
// constant time
Graph.prototype.addNode = function(node) {
  //Input - the node's value
  //Output - a property with key of 'node' and a value of an object that contains an array
  //constraints - ?
  //edge cases - ?

  //this[node] =

  // create a new node empty object
  // create a value key inside new node and store parameter node as a value
  // create edges key inside new node and store an empty array as its value
  // push the new node object into the nodes array
  let newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// linear time
Graph.prototype.contains = function(node) {
  // iterate over the nodes array
  //   if the current element equals the paramter node
  //    return true
  //   otherwise
  //    return false
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
// quadratic
Graph.prototype.removeNode = function(node) {
  // iterate over the nodes array
  //   if the value inside nodes array is the paramter node
  //    iterate into the edges array
  //     create a var that stores the current node inside edges array
  //       delete that var
  //    use splice on this.nodes starting at the index and removing 1 element
  // console.log('before: ', this);
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      for (let j = 0; j < this.nodes[i].edges.length; j++) {
        let target = this.nodes[i].edges[j];
        this.removeEdge(node, target);
      }
      this.nodes.splice(i, 1);
    }
  }
};

//we can use has node to find all the instances where the node to be removed has edges
//then use remove node on all those


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// quadratic time
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterate over the nodes array
  //   if the current node value equals the fromNode
  //     and also if the current node inside edges has toNode
  //      return true
  //     otherwise
  //       return false

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
// linear time
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate through the nodes array
  //   find fromNode
  //     push toNode into fromNode's edges array

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
// linear time
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate through the nodes array
  //   find fromNode
  //    find index of toNode from fromNode's edges array
  //    do splice to delete it
  // console.log('before: ', this);
  // this.nodes[i].edges.splice(this.nodes[i].edges.indexOf(toNode), 1);
  var indexNode1 = 0;
  var indexNode2 = 0;

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      indexNode1 = i;
    } else if (this.nodes[i].value === toNode) {
      indexNode2 = i;
    }
  }

  this.nodes[indexNode1].edges.splice(this.nodes[indexNode1].edges.indexOf(toNode), 1);
  this.nodes[indexNode2].edges.splice(this.nodes[indexNode2].edges.indexOf(fromNode), 1);
  // console.log('after: ', this);
};

// [{value: 4, edges: [5]}, {value: 5, edges: [4]}, {value: 5, edges: [7]}, ...]

// fromNode--toNode

// Pass in a callback which will be executed on each node of the graph.
// quadratic time
Graph.prototype.forEachNode = function(cb) {
  // iterate over the nodes array
  //   use cb and pass the current node value as a parameter

  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




