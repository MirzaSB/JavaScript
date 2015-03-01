console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("' '"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));