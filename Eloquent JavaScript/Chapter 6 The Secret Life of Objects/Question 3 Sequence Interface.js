/**

 Design an interface that abstracts iteration over a collection of values. An object that provides this interface
 represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate
 over the sequence, looking at the element values it is made up of and having some way to find out when the end of
 the sequence is reached.

 When you have specified your interface, try to write a function logFive that takes a sequence object and calls
 console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

 Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface
 you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to
 arguments to its constructor) instead.

 // Your code here.

 logFive(new ArraySeq([1, 2]));
 // → 1
 // → 2
 logFive(new RangeSeq(100, 1000));
 // → 100
 // → 101
 // → 102
 // → 103
 // → 104

 */

//Create the ArraySeq object.
function ArraySeq(arr) {
    this.arr = arr;
    this.currPos = -1;
}

//Implement the has.Next property that checks whether or not it still has elements in the array.
ArraySeq.prototype.hasNext = function() {
    if(this.currPos < this.arr.length-1) {
        //Increment the current position.
        this.currPos++;
        //Return true.
        return true;
    }
    else {
        //Return false if the array limit has been reached.
        return false;
    }
}

//Implement a getter property that gets the current value in the array.
ArraySeq.prototype.getCurrentValue = function() {
    //Return the value at the current position.
    return this.arr[this.currPos];
}

//Create the RangeSeq object.
function RangeSeq(numFrom, numTill) {
    this.numFrom = numFrom;
    this.numTill = numTill;
    this.currPos = numFrom - 1;
}

//Implement a has.Next property that checks whether or not the last number has been reached.
RangeSeq.prototype.hasNext = function() {
    //If the current position is less than the last number in the sequence...
    if(this.currPos <= this.numTill) {
        //Increment the position (and hence the current value as well).
        this.currPos++;
        //Return true.
        return true;
    }
    else {
        //Return false if the current position is bigger than the last number in the sequence.
        return false;
    }
}

//Implement a getter property that will return the current value in the sequence.
RangeSeq.prototype.getCurrentValue = function() {
    return this.currPos;
}

//Create the logFive function.
function logFive(seq) {
    //Create a loop that will go through 5 iterations only.
    for(var i = 0; i < 5; i++) {
        //If the sequence has a new number, print it.
        if(seq.hasNext()) {
            console.log(seq.getCurrentValue());
        }
        else {
            break;
        }
    }
}

//Execute the test vectors.
console.log("Input: " + "new ArraySeq([1,2]);");
logFive(new ArraySeq([1,2]));
console.log();
console.log("Input: " + "new RangeSeq(100,1000);");
logFive(new RangeSeq(100,1000));