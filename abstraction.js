function Creature(size, weight) {
    //When run, this code creates a class Creature and makes an object of that type.
//It receives the parameters from the constructor via the user.

    this.size = size;
    this.weight = weight;

    return "Height: " + size + ", Weight: " + weight;
}

module.exports = Creature;