console.log(new Date());

console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1425180117));

function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return new Date(Number(match[3]), Number(match[2] - 1, Number(match[1])));
}

console.log(findDate("30-1-2003"));