var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

console.log("-------------------------------------");

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

console.log("-------------------------------------");

object2.value = 20;
console.log(object2.value);
console.log(object1.value);