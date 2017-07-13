function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"])/.exec(program))
        expr = {type: "value", value: match[1]};
    else if (match = /^\d+\b/.exec(program))
        expr = {type: "value", value: Number(match[0])};
    else if (match = /^[^\s(),"]+/.exec(program))
        expr = {type: "word", name: match[0]};
    else
        throw new SyntaxError("Unexpected Syntax: " + program);

    return parseApply(expr, program.slice(match[0].length));
}

// Question 3 - Comments.
function skipSpace(string) {
    let regExp = /^(\s|#.*)*/;
    let results = regExp.exec(string);
    return string.slice(results[0].length);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(")
        return {expr: expr, rest: program};
    program = skipSpace(program.slice(1));
    expr = {type: "apply", operator: expr, args: []};
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",")
            program = skipSpace(program.slice(1));
        else if (program[0] != ")")
            throw new SyntaxError("Expected ',' or ')'");
    }
    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let result = parseExpression(program);
    if (skipSpace(result.rest).length > 0)
        throw new SyntaxError("Unexpected text after program");
    return result.expr;
}

function evaluate(expr, env) {
    switch(expr.type) {
        case "value":
            return expr.value;

        case "word":
            if (expr.name in env)
                return env[expr.name];
            else
                throw new ReferenceError("Undefined variable: " +
                    expr.name);
        case "apply":
            if (expr.operator.type == "word" &&
                expr.operator.name in specialForms)
                return specialForms[expr.operator.name](expr.args,
                    env);
            var op = evaluate(expr.operator, env);
            if (typeof op != "function")
                throw new TypeError("Applying a non-function.");
            return op.apply(null, expr.args.map(function(arg) {
                return evaluate(arg, env);
            }));
    }
}

var specialForms = Object.create(null);

specialForms["if"] = function(args, env) {
    if (args.length != 3)
        throw new SyntaxError("Bad number of args to if");

    if (evaluate(args[0], env) !== false)
        return evaluate(args[1], env);
    else
        return evaluate(args[2], env);
};

specialForms["while"] = function(args, env) {
    if (args.length != 2)
        throw new SyntaxError("Bad number of args to while");

    while (evaluate(args[0], env) !== false)
        evaluate(args[1], env);

    // Since undefined does not exist in Egg, we return false,
    // for lack of a meaningful result.
    return false;
};

specialForms["do"] = function(args, env) {
    var value = false;
    args.forEach(function(arg) {
        value = evaluate(arg, env);
    });
    return value;
};

specialForms["define"] = function(args, env) {
    if (args.length != 2 || args[0].type != "word")
        throw new SyntaxError("Bad use of define");
    var value = evaluate(args[1], env);
    env[args[0].name] = value;
    return value;
};

specialForms["fun"] = function(args, env) {
    if (!args.length)
        throw new SyntaxError("Functions need a body");
    function name(expr) {
        if (expr.type != "word")
            throw new SyntaxError("Arg names must be words");
        return expr.name;
    }
    var argNames = args.slice(0, args.length - 1).map(name);
    var body = args[args.length - 1];

    return function() {
        if (arguments.length != argNames.length)
            throw new TypeError("Wrong number of arguments");
        var localEnv = Object.create(env);
        for (var i = 0; i < arguments.length; i++)
            localEnv[argNames[i]] = arguments[i];
        return evaluate(body, localEnv);
    };
};

// Question 4 - Fixing Scope
specialForms["set"] = function(args, env) {
    if (args.length != 2)
        throw new SyntaxError("Bad number of args in set");
    if (args[0].type != "word")
        throw new SyntaxError("Bad type in set");
    let argName = args[0].name;
    let argValue = evaluate(args[1], env);
    for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {
        if (Object.prototype.hasOwnProperty.call(scope, argName)) {
            scope[argName] = argValue;
            return argValue;
        }
    }
    throw new ReferenceError("Setting undefined variable " + argName);
};

var topEnv = Object.create(null);

topEnv["true"] = true;
topEnv["false"] = false;

["+", "-", "*", "/", "==", "<", ">"].forEach(function(op) {
    topEnv[op] = new Function("a, b", "return a " + op + " b;");
});

topEnv["print"] = function(value) {
    console.log(value);
    return value;
};

// Excercise 1 - Arrays - Add support for arrays to Egg by adding the following three functions to the top scope:
// array(...) to construct an array containing the argument values, length(array) to get an array’s length,
// and element(array, n) to fetch the nth element from an array.
topEnv["array"] = function () {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
      arr[i] = arguments[i];
    }
    return arr;
};
topEnv["length"] = function (arr) {
    return arr.length;
};
topEnv["element"] = function (arr, n) {
  return arr[n];
};

function run() {
    var env = Object.create(topEnv);
    var program = Array.prototype.slice
        .call(arguments, 0).join("\n");
    return evaluate(parse(program), env);
}

run("do(define(total, 0),",
    "   define(count, 1),",
    "   while(<(count, 11),",
    "         do(define(total, +(total, count)),",
    "            define(count, +(count, 1)))),",
    "   print(total))");

run("do(define(plusOne, fun(a, +(a, 1))),",
    "   print(plusOne(10)))");

run("do(define(pow, fun(base, exp,",
    "     if(==(exp, 0),",
    "        1,",
    "        *(base, pow(base, -(exp, 1)))))),",
    "   print(pow(2, 10)))");

// Test case for Question 1 - Arrays.
run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");

// Test case for Question 3 - Comments.
console.log(parse("# hello\nx"));

// Test case for Question 4 - Fixing Scope.
run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
run("set(quux, true)");