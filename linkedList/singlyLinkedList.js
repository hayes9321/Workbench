//Singly linked list

//Create Node Class (accepts a value parameter)
function Node(value){
  this.value = value;
  this.next = null;
}
//Create SinglyList Class
function SinglyList(){
  this.head = null;
  this.length = 0;
}

//Build add method for SinglyList Class (accepts a value parameter)
SinglyList.prototype.add = function(value){
  //create and instance of a new Node with the value parameter
  var node = new Node(value);
  //keep track of the current node
  var currentNode = this.head;

  //Case 1: No current head/ no Nodes present
  if(!currentNode){
    this.head = node;
    this.length++;
    return node;
  }
  /*Case 2: there is a head and Nodes present
  - during each iteration, we evaluate if currentNode.next points to another
    node.(During the first iteration, currentNode is always pointing to
    the head of a list)
  */
  while(currentNode.next){
    //this iterates through the list until it reach the end and the breaks the loop
    currentNode = currentNode.next;
  }
  //once the loop breaks assign node to current.next, 
  currentNode.next = node;
  //increment the length by 1
  this.length++;
  //return node
  return node;
}

//Build remove method for SinglyList Class (accepts a postion parameter)
SinglyList.prototype.remove = function(position){
  var currentNode = this.head;
  var length = this.length;
  var count = 0;
  var message = {failure: 'Failure: non-existent node in this list.'};
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  //Case 1: Invalid Position
  if(position < 0 || position > length){
    throw new Error(message.failure)
  }
  
  //Case 2: The first Node is removed, which is also the head
  if(position === 1){
    //The head is reassigned to currentNode.next
    this.head = currentNode.next;
    //deletedNode points to currentNode
    deletedNode = currentNode;
    //currentNode will be reassigned to null
    currentNode = null;
    //the length will be decremented by -1
    length--;

    //deletedNode will be returned
    return deletedNode;
  }

  //Case 3: Any other Node is removed
  while(count < position){
    //Tracking node before node to be deleted
    beforeNodeToDelete = currentNode;
    //Deleting this node 
    nodeToDelete = currentNode.next;
    //increment until count < position(that we passed as a parameter) then terminate 
    count++;
  }

  //Before deleting nodeToDelete, we must assign its value
  // of next to the next value of beforeNodeToDelete.
  beforeNodeToDelete.next = nodeToDelete.next;
  //Assign deleteNode to NodeToDelete
  deletedNode = nodeToDelete;
  //Set node to delete to null
  nodeToDelete = null;
  //decrement its length by one
  this.length--;
  //return deletedNode
  return deletedNode;
};

//Build Search method for SinglyList Class(accepts a postion parameter)
SinglyList.prototype.search = function(position){ 
  var currentNode = this.head;
  var length = this.length;
  var count = 1;
  var message = {failure: 'Failure: non-existent node in this list.'};
  //Case 1: Invalid postion
  if(length === 0 || position < 1 || position > length){
    throw new Error(message.failure);
  }
  //Case 2: Valid position
  while(count < position){
    //walk down the list until you get to the desired postion
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

var List = new SinglyList();

List.add(2);
List.add(4);
List.add(6);
List.add(8);

List.remove(2);

List.add(4);


console.log(List.head);//node 1
console.log(List.head.next);//node 2
console.log(List.head.next.next); //node 3
console.log(List.head.next.next.next); //node 4
console.log(List.head.next.next.next.next);

console.log("The node at position 2 is " + List.search(1));

/*******************************************************************************
Big O:
Space complexity: O(n).
Run Time(Time Complexity):
Access: O(n);
Search: O(n);
Insertion: O(1);
Deletion: O(1);
*******************************************************************************/