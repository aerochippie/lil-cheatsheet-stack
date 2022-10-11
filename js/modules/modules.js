
//a basic way to export:
 export function ourFunction(a){};
 export const name = "Jade";


 //a different way to export:

 export{ourFunction, name}
 function ourFunction(a){};
 const name = "Jade";

 
 //we can then import it to another js file
 import { ourFunction } from "./utility";

 //u can also rename your imports / give them aliases to eliminate duplicate function names

 import {ourFunction as makeObject} from "./utility";

 //u can import all of your exports at once
 import * as Utils from "./utility";

 //how to acces it:
 console.log(Utils.name);
 console.log(Utils.ourFunction);

 //"default exports"
 //you can only have 1 default export per a module
 //

 export default function sayName(){
    console.log("im exportin! B)")
 }

 //to import it:

 import{ default as defaultExport} from "./utility";

 //more commonly used:
  import defaultExport from "./utility"
