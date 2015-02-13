/**
 * Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers and in the other
 * 50 percent raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function
 * and just keeps trying until a call succeeds, returning the result. Make sure you handle only the exceptions you are
 * trying to handle.
 */

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a,b) {
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a,b){
    //Declare a result variable.
    var result;
    //Loop...
    while(true) {
        //Try block to catch exceptions.
        try {
            //Run the primitive function.
            result = primitiveMultiply(a,b);
            //Break the loop if no exceptions are found.
            break;
        } catch (e) {
            //Look for the specific exception and rethrow it.
            if (!e instanceof MultiplicatorUnitFailure) {
                throw e
            }
        }
    }
    //Return the final multiplied value.
    return result;
}

//Test vectors.
console.log(reliableMultiply(8,8));
console.log(reliableMultiply("a",8));
console.log(reliableMultiply(12,24));
console.log(reliableMultiply(1.2,0.5));
console.log(reliableMultiply(0,24));
console.log(reliableMultiply(-5.5,-2.5));
console.log(reliableMultiply(-5.5,3.2));