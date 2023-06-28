//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal


//with objects and __proto__:
const animal = {
    move: true
}

const cat = {
    meows: true,
__proto__: animal
}

console.log(cat.move)

//with class and constructor:

class Animals  {

    constructor(name, move) {
    this.name = name;
    this.move = move;
    
    }
}

class Cats extends Animals {
    meow() {
        console.log(`${this.name} says meow.`)
    }
}

let newCat = new Cats("Sprinkles", "jumps")
newCat.meow()