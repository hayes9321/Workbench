

function SinglyLinkedList(){
	this.head;
}

SinglyLinkedList.prototype.push = function(val) {
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
			current = current.next
		}
		current.next = node;
	}

};