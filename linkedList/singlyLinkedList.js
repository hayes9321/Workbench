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

Big O Notation:
Space complexity: O(n).

Run Time(Time Complexity):
Access: O(n);
Search: O(n);
Insertion: O(1);
Deletion: O(1);
*******************************************************************************/










