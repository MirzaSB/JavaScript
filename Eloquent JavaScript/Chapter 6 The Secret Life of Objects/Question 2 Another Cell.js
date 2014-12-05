/**
 *
 Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in
 the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given
 width and height, even if the inner cell would naturally be smaller.

 // Your code here.

 var sc = new StretchCell(new TextCell("abc"), 1, 2);
 console.log(sc.minWidth());
 // → 3
 console.log(sc.minHeight());
 // → 2
 console.log(sc.draw(3, 2));
 // → ["abc", "   "]

 You’ll have to store all three constructor arguments in the instance object. The minWidth and minHeight methods should
 call through to the corresponding methods in the inner cell but ensure that no number less than the given size is
 returned (possibly using Math.max).

 Don’t forget to add a draw method that simply forwards the call to the inner cell.

 */

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

//Create the new constructor for "StretchCell".
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

//Define the minWidth function for StretchCell.
StretchCell.prototype.minWidth = function() {
    //Use the Math.max function to make sure that minWidth does not exceed the given width.
    return Math.max(this.inner.minWidth(), this.width);
};

//Define the minHeight function for StretchCell.
StretchCell.prototype.minHeight = function() {
    //Use the Math.max function to make sure that minHeight does not exceed the given height.
    return Math.max(this.inner.minHeight(), this.height);
};

//Define the draw function for StretchCell.
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}

//Create a new StretchCell.
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log("Input: " + "(new TextCell('abc'), 1, 2);");
//Execute the first test vector.
console.log("minWidth: " + sc.minWidth());
//Execute the second test vector.
console.log("minHeight: " +  sc.minHeight());
//Execute the third test vector.
console.log("draw:");
console.log(sc.draw(3, 2));