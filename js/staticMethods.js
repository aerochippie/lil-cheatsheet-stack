
/**
 * Is a method which define on a class, it does not require 
 * an instance of the class to be created in order to be used
 * A lot of static methods are called helper methods
 */

 class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    /**
     * Creating a static method that will 
     * comapre 2 sqaure instances, and let us know if they are equal in width/height
     */

    static equals(a, b){
        return a.width * a.height === b.width * b.height
    }
}

let square1 =  new Square(4);
let square2 =  new Square(4);
/**
 * here we dont have to create an instance like square1.Equals()... intead we just call Square.equals(params)
 */
console.log(Square.equals(square1,square2));


/**
 * A better example of this would be creating a static method that will check is the square is valid,
 * if height === width
 */



 class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b){
        return a.width * a.height === b.width * b.height
    }

    static isValidSquare(width, height) {
        return width === height;
    }
}

let square1 =  new Square(4);
let square2 =  new Square(4);

console.log(Square.equals(square1,square2)); // returns true
console.log(Square.isValidSquare(6,7));  // returns false





/**
 * An example from Moodle: (which is a weird one *shrug*)
 */

 class User{

    constructor(_name){
        this.name = _name
    }

    greetUser(){
        console.log(`Hello ${this.name}`);

    };



    displayTime(){

        console.log(new Date().toLocaleString());
    };
    
    static company = "Acme";
   
    static displayTimeWeirdly(){
        console.log(`12:00`)
    };

    

}

let newUser = new User('Ola Nordmann');

console.log(User.company);

newUser.displayTime();
User.displayTimeWeirdly();
    
    
    