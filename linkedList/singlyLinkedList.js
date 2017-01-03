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
//Create Node class
function Node(value){
	this.value = val;
	this.next = null;
}

function SinglyList(){
	this.head = null;
	this.length = 0;
}

/*
	Add method will take value and will create a node object. If there
	is no head present then the value will be assigned as the head.	
*/

LinkedList.prototype.add = function(val){
	var node = new Node();
	var currentNode = this.head;

	//1st case: an empty list
	if(!currentNode){
		this.head = node;
		this.length++;

		return node;
	}
	//2nd case a non-empty list
	while(currentNode.next){
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this.length++;

	return node;

//Next add remove class, includes 3 remove cases.
LinkedList.prototype.remove = function(val){
	var current = this.head;

	//The targeted node is in the head. Replace head with the next node.
	if(current.value == val){
		this.head = current.next;
	}

	//The targeted node is in the middle of a LinkedList, you have to make the node 
	// after your taregted node before the tail will be null.
	else{
		var previous = current;

		//loop through linked list heads
		while(current.next){
			if(current.value == val){
				previous.next = current.next;
				break;
			}
			previous = current;
			current = current.next;
		}

		//The targeted node is in the tail. You just have to remove it from 
		//the tail. Hence next of the node before hte tail will be null
		if(current.value == val){
			previous.next == null;
		}
	}
}

//Create an instance of a linked list and add values.
var singlyLinkedList = new LinkedList();

singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
singlyLinkedList.push(5);

singlyLinkedList.remove(3);
singlyLinkedList.remove(2);

 
//check the values by traversing LinkedList
console.log(singlyLinkedList.head);
console.log(singlyLinkedList.head.next);
console.log(singlyLinkedList.head.next.next);


/*******************************************************************************

Big O:
Space complexity: O(n).

Run Time(Time Complexity):
Access: O(n);
Search: O(n);
Insertion: O(1);
Deletion: O(1);
*******************************************************************************/










