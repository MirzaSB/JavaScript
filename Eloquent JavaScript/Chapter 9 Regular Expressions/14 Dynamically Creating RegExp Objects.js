var name = "harry";
var text = "Harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

var name2 = "dea+hl[]rd";
var text2 = "This dea+hlrd[] guy is super annoying.";
var escaped = name2.replace(/[^\w\s]/g, "\\$&");
var regexp2 = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text2.replace(regexp2, "_$1_"));