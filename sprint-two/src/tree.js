
//  .children property
//  .addChild()
// .contains()

//tree instance => {value: "some value", childern: []}
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  //console.log(newTree);
  return newTree;
};


var treeMethods = {};

// Constant time
treeMethods.addChild = function(value) {
  // push current parameter value into newTree.children
  //console.log('add child ran with: ', value);
  this.children.push(Tree(value));
};


// Quadratic time
treeMethods.contains = function(target) {
  // if tree's value equals target
  //   return true
  // else if children's length is greater than 0
  //   iterate over children array
  // return this.children.some(this.contains(target));
  //     create a var that stores the current child.contains(target)
  //     if (that var)
  //        return true
  //  return false

  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      let hasTarget = this.children[i].contains(target);

      if (hasTarget) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//newTree.addChild("dog") => newTree.children //["dog"]

