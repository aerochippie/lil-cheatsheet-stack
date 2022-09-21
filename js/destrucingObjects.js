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

const petName = myPet.name;
const petColor = myPet.color;
const petSpecies = myPet.species;

const petDescription = `His name is ${petName},
                        the fur is ${petColor} 
                        and he is a ${petSpecies}`;

console.log(petDescription);

/**
 * DONE BY DESTRUCTURING THE PROPERTIES
 */

 const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

const {petname, petcolor, petspecies} = myPet;

const petDescription = `His name is ${petname},
                        the fur is ${petcolor} 
                        and he is a ${petspecies}`;

console.log(petDescription);


/**
 * Comparision of normal variable assignment vs destructuring
 */
 const myPet ={
    name: "bobo",
    color:"white",
    species:"rabbit",
};

 const petName = myPet.name;
 const petColor = myPet.color;
 const petSpecies = myPet.species;

 /**
  * normal variable assignemnt
  * vs.
  * destructuring
  */

 const {petname, petcolor, petspecies} = myPet;


