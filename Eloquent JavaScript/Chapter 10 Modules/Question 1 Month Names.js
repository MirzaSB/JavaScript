/**
 * Write a simple module similar to the weekDay module that can convert month numbers (zero-based, as
 * in the Date type) to names and can convert names back to numbers. Give it its own namespace since
 * it will need an internal array of month names, and use plain JavaScript, without any module loader system.

 // Your code here.

 console.log(month.name(2));
 // → March
 console.log(month.number("November"));
 // → 10
 */

var month = function () {
    var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    return {
        name: function (number) {
            if (number <= 12) {
                return names[number];
            }
            else {
                console.log("Invalid numeric entry detected. Please check the input and try again.");
                return null;
            }
        },
        number: function (name) {
            if (names.indexOf(name) > -1) {
                return names.indexOf(name);
            }
            else {
                console.log("Invalid month entry detected. Please check the input and try again.");
                return null;
            }
        }
    };
}();

//Execute test vectors.
console.log(month.name(2));
console.log(month.number("November"));

