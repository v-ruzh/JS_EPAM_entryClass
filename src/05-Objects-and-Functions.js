/*-        Create a car object, add a color property to it with the value equals 'black'
-        Change the color property of the car object to 'green'
-        Add the power property to the car object, which is a function and displays the engine power to the console
*/

let car = {
    color: "black",
        power(){
        console.log(`This car engine has 150HP in it.`)
        }
}

console.log(`This car was ${car.color}, but now it's ${car.color = "green"}`)
car.power()
console.log(`========================================\n`)



//===============================================================================
//-        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
let warehouse = {
   pears: 0,
   apples: 0,  
}

function countFruits(){
    let fruits = warehouse.pears+warehouse.apples
    return fruits
}

warehouse.apples = 7
warehouse.pears = 5
console.log(countFruits())
console.log(`========================================\n`)



//=================================================================================
//-       Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

let names = ["Anna", "Maria", "Angela", "Phoebe"]
function greeting(names) {
    const prompt = require('prompt-sync')();
    let entry = prompt(`What is your name? `);
    let a = 0
    for (let i of names){
        a++
        if (i == entry) {
            console.log(`Hello, ${entry}!`);
            break
        }  else if (a == names.length & i != entry) {
            console.log(`Hello, ${entry}, seems like you're new, would you like to register?`);
            break
        } 
    }
}
greeting(names); 
console.log(`========================================\n`)



//=================================================================================
//-        Write a function for calculating the type of argument and type output to the console

let num2 = 2;
let obj = {name: "someObject", property: "someProperty"};
let string2 = "5"
let bool = true
let ref = string2

function printTypeOf(argument) {
    console.log(typeof argument)
}
printTypeOf(num2);
printTypeOf(obj);
printTypeOf(string2);
printTypeOf(bool);
console.log(`========================================\n`)



//=================================================================================
//-        Write a function that determines whether a number is prime or not
const prompt = require('prompt-sync')();
    let input = prompt(`Enter a number:`);
    let number = Number(input)

    prime(number);

function prime(num) {
    let isPrime = true
    if (num == 0 || num == 1){
        console.log(`${num} is not a prime number.`)
        } else {
       
            for (var i = 2; i < num; i++) {
                if (num%i == 0){
                isPrime = false
                break;
                } 
            } 
        } 
    if (isPrime == false) {
    console.log(`${num} is not a prime number.`);
        } else {
            console.log(`${num} is a prime number.`)
        } 
}