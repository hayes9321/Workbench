//Stack FILO first in last out
function Node(value){
  this.value = value;
  this.previous = 0;
}

function Stack(){
  this.top = null;
  this.length = 0;
}


Stack.prototype.push = function(value){
  var node = new Node(value);

  node.previous = this.top;
  this.top = node;
  this.length += 1;
  return this.top;
};

Stack.prototype.pop = function(){
  var temp = this.top;
  this.top = this.top.previous;
  this.length -= 1;
  return temp;
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);

stack.pop();
console.log(stack);
