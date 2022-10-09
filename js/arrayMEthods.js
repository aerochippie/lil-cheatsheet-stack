/**
 * ARRAY METHODS
 * 
 * MAP,
 * FILTER
 * REDUCE
 * 
 * Array methods are usable only on arrays, will not work on other data types unless converted to an array.
 * Arrays and objects are passed by reference. All of the array methods return a new array that contains the 
 * changes that happened.This prevents our original arrays from being mutated.
 * 
 * 
 */

const array = [5,6,7,8];
const newArray = array.map(>code here<);

/**
 * ! IF you need to loop through an array and dont need to return anythinguse forEach method instead.
 * 
 * 
 * CALLBACK FUNCTIONS
 * Each time our array methods loop, it runs a callback function.
 * This can either be:
 *      an anonymous function(more common)
 *      a separate named function
 */

/**
 * Anonymous fucntion
 */


/**
 * with function keyword
 */
const values = [10, 20, 30,40, 50];
const newValues = values.map(function(element, index, array) {
    //modify and return element here
});

/**
 * arrow function
 */

 const values = [10, 20, 30,40, 50];
 const newValues = values.map((element, index, array) =>{
    //modify and return values here
 });

 /**
  * SEPARATE CALLBACK FUNCTION
  */

  const values = [10, 20, 30,40, 50];
  function callbackFunction(element, index, array){
    //modify and return here
  }

  const newValues = values.map(callbackFunction);


  /**
   * .MAP()
   * Loops through an array and returns a new array that contains the exact same number of elements
   * as the original array.Ideal for cases when you need to perform an action on each element
   * and have a result for each element.
   * If you arent using the returned array from a map then you should be using foreach or for of loop
   * 
   * EXAMPLE:
   */

   const rabbits= [
    {
        name: "Louie",
        color: "Black"
    },
    {
        name: "Bobo",
        color: "Albino"
    },
    {
        name: "Merri",
        color: "Wild Spotted"
    }
  ];
 
  const newRabbits = rabbits.map((rabbit) => {
    return rabbit.color + ", " + rabbit.name;
  });
 
  console.log(newRabbits);

  /**
   * some funsies:
   */

   const triangles = [
    {
        length: 10,
        height: 20,
        width: 30
    },
    {
        length: 20,
        height: 10,
        width: 10
    },
    {
        length: 30,
        height: 20,
        width: 20
    }
  ];
   const areas = triangles.map((triangle) =>
    triangle.length * triangle.height * triangle.width
   );
 
   console.log(areas);


   /**
    *   .FILTER()
    * Loops through an array and filters out items which are then returned as a new array.
    * Return true will keep the new array, returning false will remove from the new array.
    */

