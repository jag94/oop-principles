function Animal(size, weight) {
    this.Size = size || "unknown";
    this.Weight = weight || "unknown";
}

Animal.prototype.getStats = function () {
    return "Size: " + this.Size + ", Weight:" + this.Weight;
}

function Cat(size, weight, breed) {
    Animal.call(this, size, weight);

    this.Breed = breed || "unknown";
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var kitten = new Cat(1, 15, "calico");

console.log(kitten.getStats());
console.log(kitten instanceof Cat); // true = kitten is a Cat
console.log(kitten instanceof Animal); // true = kitten is an Animal