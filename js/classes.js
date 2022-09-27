/**
 * THIS IS PART 1 OF JSON CLASSES, GETTERS AND SETTERS IS UP NEXT
 * 
 * CLASSES
 * A template to create objects. Blueprint for the shape of data.
 * A class contains properties and methods.
 * Properties : Variables inside of class
 * Methods: Functions inside of a class
 */


 class Rectangle{

    /**
     * constructor - setup the object, behaves like normal method or function ,it is run when the object is created
     */

   constructor(_width, _height,_color){
        console.log("The rectangle is being created");
        /**
         * >this< keyword refers to the current object, (the object being created by this class)
         */
        this.width = 5;
        this.height = 5;
        this.color = "blue";
    
}};

/**
 * this is created based of the class 
 * new() keyword will call the constructor method
 */
let myRectangle = new Rectangle();


/**
 * LOG: 
    "width": 5,
    "height": 5,
    "color": "blue"
 */


/**
 * To make custom rectangles, make the constructor accept parameters:
 */

 class Rectangle{

   constructor(_width, _height,_color){

        console.log("The rectangle is being created");

            this.width = _width;
            this.height = _height;
            this.color = _color;
   }
    
}

let myRectangle2 = new Rectangle(3,3,"red");

/**
 * now for the methods
 */

 class Rectangle{

    constructor(_width, _height,_color){
 
         console.log("The rectangle is being created");
 
             this.width = _width;
             this.height = _height;
             this.color = _color;
    }

/**
* the instance method will go under the constructor.
*/

     getArea(){
        return this.width * this.height;
    };
     
let myRectangle2 = new Rectangle(3,3,"red");
console.log(myRectangle2.getArea());


/**
 * lets make another method that will print out description of our rectangle
 */

 class Rectangle{

    constructor(_width, _height,_color){
 
         console.log("The rectangle is being created");
 
             this.width = _width;
             this.height = _height;
             this.color = _color;
    }

    /**
     * the instance method will go under the constructor.
     */

     getArea(){
        return this.width * this.height;
    }
     
     printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} 
                     and i am ${this.color} 
                     my area is ${this.getArea()}`);
     }
    };
    let myRectangle2 = new Rectangle(3,3,"red");
    myRectangle2.printDescription();

    
  