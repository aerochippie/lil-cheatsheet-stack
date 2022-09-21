/**
 * Object with data to stringify
 */

const data = {
    name: 'Bobo',
    species:'rabbit',
    color: 'white',
    id: 1
}
/**
 * Converts JS data to JSON
 */
const dataJSON = JSON.stringify(data);

/**
 * Logs data to console
 */
console.log(dataJSON);

/**
 * Json to convert to JS data
 */

const data2JSON = '{name: "Bobo", species:"rabbit"; color: "white", id: 1}';

/**
 * Converts JSON to JS data
 */
const data2 = JSON.parse(data2JSON);

/**
 * Logs data to console
 */
console.log(data2);