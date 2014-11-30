function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'.");
};

var killerRabbit = new Rabbit("killer");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth);

var blackRabbit = new Rabbit("black");
console.log(blackRabbit.teeth);

console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1,2].toString());

console.log(Object.prototype.toString.call([1,2]));