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
DoublyList.prototype.remove = function(postion){
	var currentNode = this.head;
	var length = this.length;
	var count = 0;
	var beforeNodeToDelete = null;
	var nodeToDelete = null;
	var deleteNode = null;
	//1st Case: invalid position
	if(positon < 0 || positon > length){
		throw new Error(message.failure);
	}
	//2nd Case: The first node is removed
	if(postion === 1){
		this.head = currentNode.next;
		deleteNode = currentNode;
		currentNode = null;
		this.length--;

		return deleteNode;
	}
	//3rd Case: anyother node is removed
	while (count < postion){
		beforeNodeToDelete = nodeToDelete;

		nodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;

}

//remove from an instance of a DoublyLinkedList
DoublyList.prototype.searchNodeAt = function(value){
	//1st Case
	//2nd Case
	//3rd Case
}

















