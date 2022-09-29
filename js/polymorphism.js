

class Animal {
    constructor(_name){
        this.name= _name;
    };

    makeSound(){
        console.log("Generic Animal sound");
    };

}

class Dog extends Animal{
    constructor(_name){
        super(_name);
    }

    makeSound(){
        super.makeSound();
        console.log("Woof");
    }
}

const animal1 = new Animal("Generic Animal");
const animal2= new Dog("Doug")

animal1.makeSound();
animal2.makeSound();