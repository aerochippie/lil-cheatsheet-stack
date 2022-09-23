/**
 * Similiar to destrucuring objects,
 * The order in which we write variable names, directly 
 * cooresponds to to the order of the elements in the array
 */

const numbers = [0,1,2,3,4,5,6,7,8,9];

/**
 * destructuring the array like so:
 */
const [a,b,d] = numbers;

/**
 * variable a b d coorespond to the index 0 1 2 in the array
 */

console.log(a,b,d); // 0,1,2

/**
 * we can use commas , to "jump over" index items like so
 * every comma act as one index
 */

const [a,b,,,,f] = numbers;
console.log(a,b,f); // This will log 0 1 5

/**
 * ANOTHER EXAMPLE
 * 
 */

const games = [`God of War`, `Nier Automata`, `Valorant`, `Cyberpunk 2077`];
const [game1,game2] = games;
console.log(game1,game2);

/**
 * Using the REST parameter
 */

const[game1,game2, ...rest] = games;
console.log(game1,game2,rest);
console.log(game1, game2);
console.log(rest);