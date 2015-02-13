var context = null;

function withContext(newContext, body) {
    var oldContext = context;
    context = newContext;
    var result = body();
    context = oldContext;
    return result;
}

function withContext2(newContext, body) {
    var oldContext = context;
    context = newContext;
    try {
        return body();
    } finally {
        context = oldContext;
    }
}

try {
    withContext2(5, function() {
        if (context < 10)
            throw new Error("Not enough context!");
    });
}
catch (e) {
    console.log("Ignoring: " + e);
}

console.log(context);