console.log(/[0123456789]/.test("in 1992"));

console.log(/[0-9]/.test("in 1992"));

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));

console.log(dateTime.test("30-jan-2003 15:20"));

var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));

console.log(notBinary.test("1100100010200110"));