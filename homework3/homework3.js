/*
Loop through the cats array found here:
https://github.com/cisc3300/f24-lecture-code/blob/main/9-25-lecture/cats.js
a. if the cats adoption status is available add that cat’s name to a result array
b. ccreate a new sentence about your newly adopted cats from your result array via
the join array function.*/

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

const cat = {name:"Pinecone", age:13, type:'Munchkin', cuteness: 9001};

/*a. if the cats adoption status is available add that cat’s name to a result array*/
const resultArray = [];
for (let i = 0; i < cats.length; i++) {
    if (cats[i].adoptionStatus === 'available') {
        resultArray.push(cats[i].name);
    }
}

/*create a new sentence about your newly adopted cats from your result array via
the join array function.*/
const newSentence = resultArray.join(', ');
const message = 'You have adopted ' + newSentence + '!';
console.log(message);

/*Create a variable that sets a value via a ternary operator. Use Math.random() * 10, which
will output a random number from 1 to 10, to set the variable’s value as a string of
“greater than five!” if the output from Math.random() * 10 is greater than 5, and “less than
five!” if the output is less than 5.*/
/*The ternary operator shortens this if/else statement into a single statement:
result = (condition) ? 'something' : 'somethingelse';*/

const randomNumber = Math.random() * 10; //creates a random number between 1 and 10
/*The ternary operator shortens this if/else statement into a single statement:
result = (condition) ? 'something' : 'somethingelse';*/
const result = (randomNumber > 5) ? 'greater than five!' : 'less than five!';
console.log(result);

/*Loop through the values of the cat object found here:
https://github.com/cisc3300/f24-lecture-code/blob/main/9-25-lecture/cats.js. Console.log
the value of each property in the loop.*/
for (const key in cat) {
    if (cat.hasOwnProperty(key)) {
        console.log(cat[key]);
    }
    else {
        console.log("Can't find key in this object");
    }

}

/*Write two if statements, pick the correct comparison operator to have the first if
statement equate an integer of 1 and a string of ‘1’ as true. And pick the correct
comparison operator to have the second equate an integer of 1 and a string of ‘1’ as
false.*/
//== compary value
if (1 == '1') {
    console.log('The first if statement is true');
}

//===strictly compare value and data type
if (1 === '1') {
    console.log('The second if statement is Ture');
}
else {
    console.log('The second if statement is false');
}

/*Using the map function create a new array via the cats array used in question 6. Pass
the map function a callback function that accepts each element of the array as a
parameter. Return the value of the name property of each object in the cats array
concatenated with the string “ is cute!”. The output should be an array of “Charlie is
cute!”, “Lily is cute!”, etc.*/

const CatsMap = cats.map(function(cats) {
    return cats.name + ' is cute!'
})
console.log(CatsMap);

