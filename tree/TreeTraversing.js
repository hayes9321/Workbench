/*
  a tree data structure is a data structure that simulates hierarchial data with nodes
  
  depth first search
*/
function Node(data){
  this.data = data;
  this.parent = null;
  this.child = [];
}

function Tree(data){
  //Create a new instance of node
  var node = new Node(data);
  //Assign node to the root of the tree
  this.root = node;
}

//5 Methods of a Tree

//traverseDF(callback)
Tree.prototype.traverseDF = function(callback) {
  //This is a recurse and immediately-invoking function
  (function recurse(currentNode){
    //step 2: iterate once for each child of currentNode, beginning with the 1st child.
    for(var i = 0; length = currentNode.children.length; i < length; i++){
      //step 3: Invoke a recurse with a child of currentNode. the exact child depends on the current 
      // iteration of the for loop.
      recurse(currentNode.children[i]);
    }
    //step 4: Exit for loop once currentNode no longer has any children, we now invoke the callback
    // we passed during the invocation of traverseDF(callback)
    callback(currentNode);
    //step 1: immediately invoke recurse with the root node of a tree as its argument
    //At this moment, currrentnode points to the current node
  })(this.root);
};
//traverseBF(callback)
//contains(data, parent)
//add(child, parent)
//remove(node, parent)

var TreeSearch = new Tree();

TreeSearch.traverseDF();