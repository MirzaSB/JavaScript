
var dayName = function() {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return function dayName(number) {
        return names[number];
    };
}();

console.log(dayName(3));

(function() {
    function square(x) {return x * x;}
    var hundred = 10;
    console.log(square(100));
})();