#!/usr/bin/node
// Update of script that implements increment method on object.
let myObject = {
	  type: 'object',
	  value: 12
};
console.log(myObject);

myObject.incr = function () {
	  this.value++;
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
