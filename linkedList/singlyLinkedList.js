//Creating a singly linked list

/*
	To create a linked list the first step is to define
	a node object that will point to the next node. 

	For the linked list it should have a ponter to point to the node 
	of the linked list, It should have methods for
	adding and removing nodes from the list. 
*/

/*First, create object that has one property head(a pointer)
to create add elements, willuse a push method in prototype
of the object
*/

//class
function LinkedList(){
	this.head = null;
}

/*
	Push method will take value and will create a node object.
	if there is no head, then node will be the value of head.
	If there is a head, go through the linked list chain to read
	the tail(tail is defined as where the next node is === null)	
*/

LinkedList.prototype.push = function(val){
	var node = {
		value: val,
		next: null
	}
	if(!this.head){
		this.head = node;
	}
	else{
		current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
}

//Next add remove class.

//Create an instance of a linked list and add values.
var singlyLinkedList = new LinkedList();

singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
singlyLinkedList.push(5);

console.log(singlyLinkedList.head.next.next.next);
 

//check the values by traversing LinkedList
// console.log(singlyLinkedList.head);
// console.log(singlyLinkedList.head.next);
// console.log(singlyLinkedList.head.next.next);
// console.log(singlyLinkedList.head.next.next.next);


