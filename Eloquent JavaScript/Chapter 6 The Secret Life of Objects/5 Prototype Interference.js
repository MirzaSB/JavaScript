function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'.");
};

Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig.");
};

var killerRabbit = new Rabbit("killer");
killerRabbit.dance();

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";

for(var name in map) {
    console.log(name);
}

console.log("nonsense" in map);
console.log("toString" in map);

//Delete the problematic property again.
delete Object.prototype.nonsense;

console.log("nonsense" in map);

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name in map) {
    console.log(name);
}

console.log(map.hiddenNonsense);

console.log(map.hasOwnProperty("toString"));

for(var name in map) {
    if(map.hasOwnProperty(name)) {
        //..this is an own property.
    }
}
