var example1 = ["person1", "person2", "person3"];
var example2 = ["car1", "car2", "car3"];
var example3 = ["Green", "Red", "Blue"];
var example4 = [23,24, 25,26,27];

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);

var itemArr = example2[2];
console.log(itemArr);

var len = example4.length;
console.log(len);

example1.push("person4");
console.log(example1);

example3.pop();
console.log(example3);

example2.shift();
console.log(example2);
example2.unshift("newcar");
console.log(example2);

delete example4[1];
console.log(example4);

example2.splice(1,1);
console.log(example2);


example2.splice(1,0,"anothercar", "morecar");
console.log(example2);


example4[2]=99;
console.log(example4);


var newarray= example1.concat(example3);
console.log(newarray);


var newarray2= newarray.slice(2,5);
console.log(newarray2)
