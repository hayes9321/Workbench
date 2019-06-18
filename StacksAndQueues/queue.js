/**
* Writing a queue with prototypal methods
*/
function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}

Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};

Queue.prototype.dequeue = function() {
  var oldestIndex = this.oldestIndex;
  var newestIndex = this.newestIndex;
  var deletedData;

  if (oldestIndex !== newestIndex) {
    deletedData = this.storage[oldestIndex];
    delete this.storage[oldestIndex];
    this.oldestIndex++;

    return deletedData;
  }
};

/*******************************************************************************/

/**
*  Another way to write a queue using a factory function.
**/
function createQueue() {
  const queue = [];

  return {
    enqueue : function(x) {
      queue.unshift(x)
    },
    dequeue : function() {
      if (queue.length === 0) {
        return undefined
      }
      return queue.pop()
    },
    peek : function() {
      if (queue.length === 0) {
        return undefined
      }
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty: function() {
      return queue.length === 0
    }
  }

}

exports.createQueue = createQueue;
