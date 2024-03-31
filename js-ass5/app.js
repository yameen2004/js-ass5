// Q 1

var multiDimensionalArray = [
    ["Yameen", "Ahmed", "Raza"],
    ["Yaseen", "Ali", "Mehmood"]
];

document.write(` <h3> MultiDimensionalArray --> </h3> <br> ${multiDimensionalArray}`)

// Q 2

var multiMatrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

document.write(` <h3> MultiMatrix --> </h3> <br> ${multiMatrix}`)

// Q 3

document.write(` <h3> Counting --> </h3>`);

for (var i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}

// Q 4

var table = +(prompt("Enter the table number :"));
var length = +(prompt("Enter the number of length in table:"));


document.write(` <h3> Multiplication table of ${table} length ${length} : </h3> <br> `);

for (var i = 1; i <= length; i++) {
    document.write(`${table} * ${i} = ${table * i} <br>`);
}

// Q 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3> Fruits --> </h3>");
document.write(`${fruits} <br> <br>`);

for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br> `);

}


// Q 6

// A) Counting: 1 to 15

document.write(` <h3> Counting: </h3> <br>`);

for (var i = 1; i <= 15; i++) {
    document.write(i);
}

// B) Reverse counting: 10 to 1

document.write(` <h3> Reverse Counting: </h3> <br>`);

for (var i = 10; i >= 1; i--) {
    document.write(i);
}

// C)  Even numbers: 0 to 20

document.write(` <h3> Even numbers: </h3> <br>`);

for (var i = 0; i <= 20; i += 2) {
    document.write(i);
}

// D) Odd numbers: 1 to 19

document.write(` <h3> Odd numbers: </h3> <br>`);

for (var i = 1; i <= 19; i += 2) {
    document.write(i);
}

// E) Series: 2k to 20k

document.write(` <h3> Series: </h3> <br>`);

for (var i = 1; i <= 10; i++) {
    document.write(i * 2 + "k" + "<br>");
}

// Q 7

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("Enter item to search:");

var found = false;
for (var i = 0; i < bakery.length; i++) {
    if (bakery[i] === user) {
        found = true;
        break;
    }
}

if (found) {
    alert(`Yes, '${user}' is found in our bakery.`);
} else {
    alert(`No, '${user}' is not found in oue bakery.`);
    alert(`Only this items are available :  ${bakery}`)
}

// Q 8

var largestNumber = [24, 53, 78, 91, 12];
document.write(` <h3>Largest Array items : </h3> ${largestNumber} <br> `)

var largest = largestNumber[0];

for (var i = 1; i < largestNumber.length; i++) {
    if (largestNumber[i] > largest) {
        largest = largestNumber[i];
    }
}

document.write(`The largest number in the array is: <b> ${largest} </b> <br>`);

// Q 9

var smallestNumber = [24, 53, 78, 91, 12];
document.write(` <h3>Smallest Array items : </h3> ${smallestNumber} <br> `)

var smallest = smallestNumber[0];

for (var i = 1; i < smallestNumber.length; i++) {
    if (smallestNumber[i] < smallest) {
        smallest = smallestNumber[i];
    }
}

document.write(`The smallest number in the array is: <b> ${smallest} </b> <br>`);

// Q 10

document.write(` <h3> Multiplt to 5 : </h3> `);

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
}