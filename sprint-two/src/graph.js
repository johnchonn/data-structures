



// {{value: 'john', edges: ['kieran', 'jack']}, {value: 'kieran', edges: []}, {value: 'jack', edges: []}}

// node = {value: 'john', edges: ['kieran', 'jack']}

// {"john": {edges: []}, "kieran" : {edges: []}}

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //Input - the node's value
  //Output - a property with key of 'node' and a value of an object that contains an array
  //constraints - ?
  //edge cases - ?

  //this[node] =
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




