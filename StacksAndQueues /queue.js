//Queue first in last out.
function Node(value){
  this.value = value;
  this.next = null;
}

function Queue(){
  this.first = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  var node = new Node(value);

  if(!this.first){
    this.first = node;
  }
  else{
    var n = this.first;
    while(n.next){
      n = n.next;
    }
    n.next = node;
  }
  this.length += 1;
  return node;
}

Queue.prototype.dequeue = function(){
  var temp = this.first;
  this.first = this.first.next;
  this.length -=1;
  return temp;
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);

queue.dequeue();
console.log(queue);