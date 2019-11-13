function divider() {
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("--------------------------------------");
}

const myArray = [];

const numbers = [1, 2, 3, 5, 7];

console.log(numbers);

console.log("number 5", numbers[3]);
console.log("number 1", numbers[0]);
console.log("length:", numbers.length);
console.log("number 3", numbers[numbers.length - 3]);
divider();

numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);

divider();

const cloudy = true;
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

divider();

for (let i = 0; i < items.length; i++) {
    console.log("value of i", i);
    console.log("item", items[i]);
};

for (let item of items) {
  console.log("item ", item);
};

divider();

const file = (["bundle.js", "*.js.map", ".c9"]);

console.log(file.join(', '));

const fileNames = 'bundle.js", js.map';

console.log(fileNames.split('.'));

divider();

myObject = {};

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3,
};

console.log("Objects", myObject, smallNumbers);
console.log("values in our object", 
    smallNumbers.one, 
    smallNumbers.two, 
    smallNumbers.three, 
    smallNumber['one'],
);

divider();

myObject = {
    five = 5,
    six = 6,
};

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem = 'this is a new item in my object'

console.log("object with new item", myObject);

divider();

console.log(myObject);
items.push(myObject);
console.log(myObject);


