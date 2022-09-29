/**
 * Parents and Children!
 * Use this whenever you have a generic class and want to create a child
 * class of that generic one, while still maintaining its features and behaviour
 * 
 */



/**
 * This will be our generic parent class
 */

 class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;

    }

    describe(){
        console.log(`I am ${this.name} and i am ${this.age} years old`)
    }
};


class Programmer extends Person{

    constructor(_name, _age, _experience){
        /**
         * super calls the constructor from our generic Person class
         */
        super(_name, _age);

        this.experience= _experience;  // custom behaviour of the child class
    }

    /**
     * only Programmers will have acces to this method
     */
    code(){
        console.log(`${this.name} is coding...`)
    };
};

/**
 * Lets create some instances
 */

 let person1 = new Person("Olga", 26);
 let programmer1 = new Programmer("Fredrik", 24, 2)
 
 console.log(person1);
 console.log(programmer1);
 programmer1.code();
 



/**
 * Say we have a function
 * This will require a bunch of programmers to develop something
 * 
 * So a normal Person (generic class) wont be able to be passed in to this array
 * coz we expect prgrammers not a generic person so lets create a child class programmer
 */


//We can create programmers array here after creating the Programmer class

const programmers = [

    new Programmer("Jake", 30, 5),
    new Programmer("Millie", 42, 10)

];

// This function stuff comes after we have created Programmer class too
// This will loop through all the programmers in the array
function developSoftware(programmers){

    for (let programmer of programmers){
        programmer.code();
    }

};

developSoftware(programmers);

