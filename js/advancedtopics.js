/**
 * A BLOCK OF CODE
 * The code inside curly braces
 * EXAMPLES:
 */

function myFunction(){
    //here comes the clock of code

}

const value = 1;
if(value === 1){
    //block of code here
}


/**
 * SCOPE
 * Cconcept where code is only accesivle through a region or portion of code
 * 
 * avoids namespace collision : variables with the same name but in different scopes can exist without problems
 * variables inside of a scope cannot be accesed outside of that scope, protecting these variables from being accesed or altered
 * variables inside a block of code will stop existing once the block of code has finished running. A variable created in a if statement
 * will no longer exist once the if statement block of code has finished running
 *
 */

/**
 * GLOBAL scope variables
 * should be avoided, since they can be changed from anywhere in the app
 */

let value = "Hello!";

function displayValue(){
    value = "World" // variable being changed here
    console.log(value);
}

displayValue();

/**
 * LOCAL scope
 * Local scoped variables are only accesible in the block of code they are created in.
 */

function displayValue(){
    let value = "Hello";

}

console.log(value);  // this will throw an error since the variable was created inside a function 
                     // instead we should call console.log inside the function and call the function instead

/**
 * LEXICAL scope
 * refers to the environment where a variable was defined, and how this variable can be accessed by nested functions.
 * It refers to a function being able to acces variables from parent scope.
 * EXAMPLE:
 */

function outsideFunction(){
    const value =  "Hello World";

        function insideFunction(){
            console.log(value) // value from outside function can be accessed inside this nested function
        }
}


/**
 * CLOSURE
 * A combination of a function and lexical environment the function was declared in. 
 * The lexical environment contains any local variables that were in the scope at the time of creation
 */

function makeFunction(x){
    return function (y){
            return x + y;
    }
}

const add5 = makeFunction(5);
console.log(add5(2));  //  (add5()) is a closure

const add10 = makeFunction(10);
console.log(add10(20)); // (add10())  is a closure

/**
 * they have the same function logic, but also their own lexical environments that have
 * different values
 */

/**
 * PASS BY VALUE / PASS BY REFERENCE
 * ----Objects and arrays are passed by a reference,
 * which means that modifying them as arguments in a function
 * can modify the original variable being passed. This is different to primitive variables which are passed by value
 * and fo not alter the original variable.
 * 
 * good video on this topic:
 * https://www.youtube.com/watch?v=-hBJz2PPIVE&ab_channel=WebDevSimplified
 */

/**
 * PASS BY VALUE
 * Primitive types are passed by value in functions. When a primitive type is being passed as an argument to a function
 * is being passed as that value. The original variable outside the function will not be changed at all if the
 * parameter gets modified inside of the function.
 * 
 * ----All function arguments are always passed as value.
 */


/**
 * PASS BY REFERENCE
 */
 const person  = {
    name: "dom",
    age: 30,
    occupation: "developer"
 }

 function passBy (a){
    a.name = "lilla";
    console.log(a)
 }

 passBy(person); // if ran without this lin, name will stay dom, otherwise is changed to lilla.
 console.log(person);


 /**
  * PASS BY VALUE
  */

