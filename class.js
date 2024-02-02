class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Vertebrate extends Animal {
    constructor (name) {
        super (name);
    }
}

class Invertebrate extends Animal {
    constructor (name) {
        super (name);
    }
}

class ColdBlooded extends Vertebrate {
    constructor (name) {
        super (name);
    }
}

class WarmBlooded extends Vertebrate {
    constructor (name) {
        super (name);
    }
}

class Arthropod extends Invertebrate {
    constructor (name) {
        super (name);
    }
}

class Fish extends ColdBlooded {
    constructor (name) {
        super (name);
    }
}

class Amphibia extends ColdBlooded {
    constructor (name) {
        super (name);
    }
}

class Reptiles extends ColdBlooded {
    constructor (name) {
        super (name);
    }
}

class Aves extends WarmBlooded {
    constructor (name) {
        super (name);
    }
}

class Mammals extends WarmBlooded {
    constructor (name) {
        super (name);
    }
}

//Example
const butterfly = new Arthropod ('Butterfly');
const fish = new Fish ('Fish');
const frog = new Amphibia ('Frog');
const tortoise = new Reptiles ('Tortoise');
const bird = new Aves ('Bird');
const cat = new Mammals ('Cat');

//WarmBlooded
console.log('Warm-Blooded Animals:');
const warmBlooded = [bird, cat];
warmBlooded.forEach(animal => console.log(animal.name));

//Vertebrates
console.log('With Backbone:');
const vertebrates = [fish, frog, tortoise, bird, cat];
vertebrates.forEach(animal => console.log(animal.name));

//ColdBlooded
console.log('Cold-Blooded:');
const coldBlooded = [fish, frog, tortoise];
coldBlooded.forEach(animal => console.log(animal.name));

//Invertebrates
console.log('Without Backbone:');
const invertebrates = [butterfly];
invertebrates.forEach(animal => console.log(animal.name));