function transparentWrapping(f) {
    console.log(arguments.length);
    return function() {
        return f.apply(null, arguments);
    };
}

console.log(transparentWrapping("test", 1,2));