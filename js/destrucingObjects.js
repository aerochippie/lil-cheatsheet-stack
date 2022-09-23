/**
 * Destructuring Objects
 * In curly braces add the properties we want to use from the object,
 * on the right we add the object we want to destructure from
 */

/**
 * This is done using dot notation, makes our code long as we have to write myPet many times
 */
const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

const petDescription = `His name is ${myPet.name},
                        the fur is ${myPet.color} 
                        and he is a ${myPet.species}`;

console.log(petDescription);

/**
 * This is done by assigning properties to variables
 */

 const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

const name = myPet.name;
const color = myPet.color;
const species = myPet.species;

const petDescription = `His name is ${name},
                        the fur is ${color} 
                        and he is a ${species}`;

console.log(petDescription);

/**
 * DONE BY DESTRUCTURING THE PROPERTIES
 */

 const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

const {name, color, species} = myPet;

const petDescription = `His name is ${name},
                        the fur is ${color} 
                        and he is a ${species}`;

console.log(petDescription);


/**
 * Comparision of normal variable assignment vs destructuring
 */
 const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

 const name = myPet.name;
 const color = myPet.color;
 const species = myPet.species;

 /**
  * normal variable assignemnt
  * vs.
  * destructuring
  */

 const {name, color, species} = myPet;

/**
 * BONUS::RENAMING VARIABLES
 */

const {name : petName, color: petColor, species: petSpecies} = myPet;
