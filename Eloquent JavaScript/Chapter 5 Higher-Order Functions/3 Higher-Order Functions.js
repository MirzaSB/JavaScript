//Functions that can create new functions.
function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function greaterThanXLessThanY(x,y) {
    return function(a) {
        return (a > x && a < y );
    };
}

var greaterThan5ButLessThan10 = greaterThanXLessThanY(5, 10);
console.log(greaterThan5ButLessThan10(4));

console.log("------------------------");

//Functions that change other functions.
function noisy(f) {
    return function(arg) {
        console.log("calling with  " + arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}

noisy(Boolean)(0);

console.log("------------------------");

//Functions that build new types of control flow.
function unless(test, then) {
    if(!test) then();
}
function repeat(times, body) {
    for(var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});

