class Animal {
    makeNoise() {
        return "a disturbance";
    }
}

class Cat extends Animal {
    meow() {
        return "Meow.";
    }
}

module.exports = {Animal: Animal, Cat: Cat};