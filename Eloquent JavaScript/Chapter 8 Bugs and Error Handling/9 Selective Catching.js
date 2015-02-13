for(;;) {
    try {
        var dir = promptDirection("Where?");
        console.log("You chose", dir);
        break;
    }
    catch (e) {
        if (e instance of InputError)
            console.log("Not a valid direction. Try again.")
        else
            throw e;
    }
}

function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function promptDirection(question) {
    var result = prompt(question, "");
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}