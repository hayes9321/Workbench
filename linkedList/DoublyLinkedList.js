//Building A Doubly Linked List.

/*
  A doubly linked list takes all the funcitonality of a singly-linked list and extends it for bi-directional movement 
  in a list(it a head, and a tail pointer). We can traverse, in other words, a linked list from the first node in the list
  to the last node in the list; and we can traverse from the last node in the list to the first node in the list. 


Operations of a Doubly-linked list
list will consist of two constructors(classes): Node and DoublyList

Node
-val stores value
-next points to the next node in the line
-previous points to the previous node in the list

DoublyList
-length retrieves the number of nodes in a list 
-head assigns a node as the head of the list
-tail assigns the node as the tail of the list
-add(value) adds a node to a list
-searchNodeAt(postion) searches for a node at n-postion in our list.
-remove(position) removes a node from a list. 
*/

//Node class
function Node(value){
  this.val = value;
  this.previous = null;
  this.next = null;
}

//Doubly linked list class
function DoublyList(){
  this.length = 0;
  this.head = null;
  this.tail = null;
}

//Add to an instance of a DoublylinkedList
DoublyList.prototype.add = function(value){
  //add a new instance of a node class
  var node = new Node(value)
  //if there are nodes in the list then the value of head is null
  var currentNode  = this.head; 

  //1st Case: Empty List, no current node 
  if(!currentNode) {
    //assign node as the head of the list
    this.head = node;
    //increment its length 
    this.length++;
  } 
  //2nd Case: Non empty list //There is a current node
  while(currentNode.next){
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this.length++;
  return node;
}

//remove from an instance of a DoublylinkedList
DoublyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var length = this.length;
  var count = 1;
  var message = {failure: 'Failure: non-existent node in this list.'};
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  // 1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

    // 2nd use-case: the first node is removed
    if (position === 1) {
      this.head = currentNode.next;

      // 2nd use-case: there is a second node
      if (!this.head) {
        this.head.previous = null;
      // 2nd use-case: there is no second node
      } else {
        this.tail = null;
      }

  // 3rd use-case: the last node is removed
  } else if (position === this.length) {
    this.tail = this.tail.previous;
    this.tail.next = null;
  // 4th use-case: a middle node is removed
  } else {
    while (count < position) {
            currentNode = currentNode.next;
            count++;
    }

    beforeNodeToDelete = currentNode.previous;
    nodeToDelete = currentNode;
    afterNodeToDelete = currentNode.next;

    beforeNodeToDelete.next = afterNodeToDelete;
    afterNodeToDelete.previous = beforeNodeToDelete;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
  }

  this.length--;

  return message.success;
};

//remove from an instance of a DoublyLinkedList
DoublyList.prototype.searchNodeAt = function(value){
  var currentNode = this.head;
  var length = this.length;
  var count = 1;
  var message = {failure: 'Failure: non-existent node in this list.'};
  //1st Case: invalid position
  if(length === 0 || position < 1 || postion > length){
    throw new Error(message.failure);
  }
  //2nd Case: a valid posiiton
  while(count < postion){
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
};

















