function wrapValue(n) {
    var localVariable = n;
    return function(){ return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return function(number) {
        return number*factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));

function multiplier2(factor) {
    return function(number) {
        return function(number2) {
            return number2 * number * factor;
        };
    };
}

var thrice = multiplier2(2);
console.log(thrice(3)(4));
