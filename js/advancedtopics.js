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
console.log(add5(2));