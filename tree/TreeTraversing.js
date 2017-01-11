/*
  a tree data structure is a data structure that simulates hierarchial data with nodes
  
  depth first search
*/
//this is needed for breadth first search
function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}
 
Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex;
};
 
Queue.prototype.enqueue = function(value) {
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};
 
Queue.prototype.dequeue = function() {
  var oldestIndex = this.oldestIndex;
  var newestIndex = this.newestIndex;
  var deletedData;

  if (oldestIndex !== newestIndex) {
    deletedData = this.storage[oldestIndex];
    delete this.storage[oldestIndex];
    this.oldestIndex++;

    return deletedData;
  }
};

function Node(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data){
  //Create a new instance of node
  var node = new Node(data);
  //Assign node to the root of the tree
  this.root = node;
}

//5 Methods of a Tree

//traverseDF(callback)
//Steps 2(self-terminating), 3(self-invoking), and 4(callback)
Tree.prototype.traverseDF = function(callback) {
  //This is a recurse and immediately-invoking function
  (function recurse(currentNode){
    //step 2: iterate once for each child of currentNode, beginning with the 1st child.
    for(var i = 0; i < currentNode.children.length; i++){
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
/*
  The difference between depth-first search and breadth-first search involves 
  the sequence that nodes of a tree visit. 
*/

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue();

  queue.enqueue(this.root);

  currentTree = queue.dequeue();

  while(currentTree){
    for(var i = 0; i < currentTree.children.length; i++){
      queue.enqueue(currentTree.children[i]);
    }
    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

//contains(data, parent)
Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback)
};

//add(data, toData, traversal)
Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data);
  var parent = null;
  var callback = function(node){
    if(node.data === toData){
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if(parent){
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existing parent')
  }

};
//remove(node, parent)
Tree.prototype.remove = function(data, fromData, traversal) {
  var tree = this;
  var parent = null;
  var childToRemove = null;
  var index;

  var callback = function(){
    if(node.data === fromData){
      parent = node;
    }
  }
  this.contains(callback, traversal);
  if(parent){
    index = findIndex(parent.children, data);

    if (index === undefined) {
      throw Error('node to remove does not exit');
    }
    else{
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('Parent does not exist');
  }

  return childToRemove;
};

function findIndex(arr, data){
  var index;

  for(var i = 0; arr.length; i++){
    if(arr[i].data === data){
      index = i;
    }
  }
  return index;
}

var tree = new Tree('CEO');
 
tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);
tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);

console.log(tree.root.children);
console.log(tree.root.children.children);

