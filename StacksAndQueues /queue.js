//Queue first in last out.
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

var line = new Queue();

line.dequeue();
line.enqueue(1);
line.enqueue(2);
line.enqueue(3);
line.enqueue(4);
console.log(line);
line.dequeue();
console.log(line);
line.enqueue(5);
console.log(line.size());