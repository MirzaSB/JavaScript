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

