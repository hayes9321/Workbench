
//Create a Stack class Obj.
function Stack() {
    this.length = 0;
    this.storage = {};
}

//push method that adds to the top of stack
Stack.prototype.push = function(value) {
    //Increase the length of our storage
    var length = ++this.length;
    //Assigns length as a key of storage
    //Assigns value as the value of the key
    this.storage[length] = value;
};

//pop method removes from the top of stack
Stack.prototype.pop = function() {
    var length = this.length
    var deletedData;

    //Only allow pop method if there is data in storage.
    if (length) {
        //Assignind deletedData to most recently added to stack
        deletedData = this.storage[length];

        //Delete the key value pair
        delete this.storage[length];

        //decrement the length count(removing it from top)
        this.length--;

        return deletedData;
    }
};

var stack = new Stack();

stack.push(1)
stack.push(3)
stack.push(6)
stack.push(9)//top level length = 4

console.log(stack);

stack.pop();//removing top([length @ 4]: value)

console.log(stack);


/*******************************************************************************/

/**
* Another way to implement a stack using a factory function
*/
function createStack() {
  const stack = []

  return {
    push(x) {
      stack.push(x)
    },
    pop() {
      if (stack.length === 0) {
        return undefined
      }
      return stack.pop()
    },
    peek() {
      if (stack.length === 0) {
        return undefined
      }
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length
    },
    isEmpty() {
      return stack.length === 0
    }
  }
}

const lowerBodyStack = createStack()

lowerBodyStack.push('underwear')
lowerBodyStack.push('socks')
lowerBodyStack.push('pants')
lowerBodyStack.push('shoes')

lowerBodyStack.pop()
lowerBodyStack.pop()
console.log(lowerBodyStack.peek())
console.log(lowerBodyStack.length)

exports.createStack = createStack
