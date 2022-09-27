class Square{

    /**
     * square is the same lenghts on all sides, so we only use 1 property for this here
     */
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }


    /**
     * Looks and acts as a function here
     */
    get area (){
        return this.width * this.height;
    }

/**
 * Math.sqrt means just math square root, we take 25 and take
 * a sqrt of it to convert into width, height of the rectangle
 * 
 * with setters you can reassign values to instance property(constructor object)
 * 
 */
    set area (area){
        this.width = Math.sqrt(area);
    }


};

let square1 = new Square(5);
/**
 * this will convert this number (25) into the width and height for the properties
 */
square1.area = 25

console.log(square1.width, square1.height);
