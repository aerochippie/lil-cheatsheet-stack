/**
 * In some cases, you can destructure the object in a function argument itself.
 * Example 1:
 */

 function feedRabbit(food){
    const {typeFood, amountFood, timer} = food;
    console.log(`Food to feed: ${typeFood}
                 Amount of food: ${amountFood}
                 Feed at ${timer} o'clock`)
}

const rabbitFood ={
    typeFood: `Pellets`,
    amountFood: `30g`,
    timer: new Date().toLocaleString()
}

feedRabbit(rabbitFood);

/**
 * DESTRUCTURING:
 * we get rid of the 'food' paramtereter and we dont have to declare it inside the function,
 * instead we destructure the params directly from the 'rabbitFood' object
 */

function feedRabbit({typeFood, amountFood,timer}){
    console.log(`Food to feed: ${typeFood}
    Amount of food: ${amountFood}
    Feed at ${timer} o'clock`)
}

const rabbitFood = {
    typeFood: `Pellets`,
    amountFood: `30g`,
    timer: new Date().toLocaleString()
}

feedRabbit(rabbitFood);


/**
 * WE can destructure the objects inside array functions like so:
 */

 const rabbits = [ 
    {
        name:`lollie`,
        weight: 3.4,
        color: `black with white spots`
    },
    {
        name: `bobo`,
        weight: 2.5,
        color:`albino`

    },
    {
        name: `jackie`,
        weight: 4,
        color:`brown`
    }
];

const fatRabbits = rabbits.filter((currentItem) =>{
    if(currentItem.weight>=3){
        console.log(`These guys are chonkers: ${currentItem.name}, ${currentItem.weight}`);
    }
}
)

/**
 * DESTRUCTURING
 */

 const rabbits = [ 
    {
        name:`lollie`,
        weight: 3.4,
        color: `black with white spots`
    },
    {
        name: `bobo`,
        weight: 2.5,
        color:`albino`

    },
    {
        name: `jackie`,
        weight: 4,
        color:`brown`
    }
];

const fatRabbits = rabbits.filter(({weight, name}) =>{
    if(weight >= 3){
        console.log(`These guys are chonkers: ${name}, ${weight}`)
    }

});