function numberToString(n, base) {
    var result = "", sign = "";
    if(n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String (n % base) + result;
       // n /= base;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));