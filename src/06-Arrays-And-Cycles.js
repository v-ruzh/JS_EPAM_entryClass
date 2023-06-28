// node 06-Arrays-And-Cycles.js

//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movies = ["The Avengers","Guardians of the Galaxy", "Donnie Darko", "The Lighthouse", "Drive"]
movies.forEach(movie => console.log(movie))


//Given an array of car manufacturers, convert the array to a string and back to an array

const cars = ["Bocar", " DeLorean", " Alpine", " Artega", " Bugatti"]
console.log(cars + " is an " + typeof(cars))
let carStr = cars.toString()
console.log(carStr +" is a " +typeof(carStr))
let carArrAgain = carStr.split(" ")
console.log(carArrAgain + " is an " + typeof(carArrAgain))

//Given an array of the names of your friends, add the words hello to each element of the array

const names = ["Nina", "Lida", "Masha", "Sasha"]
names.forEach(name => console.log("Hello, "+ name + "!" ))


//Convert numeric array to Boolean

let nums = [1,2,0,1,1]
for (let i in nums) {
     nums[i] = !!nums[i]
}
console.log(nums)

//or, an option with map

let nums2 = [1,2,0,1,1]
const booleanNums2 = nums2.map((number) => (!!number))
console.log("Same thing, but using map: "+ booleanNums2)


//Sort the array [1,6,7,8,3,4,5,6] in descending order
//Filter array [1,6,7,8,3,4,5,6] by value> 3

const sortNfilter =  [1,6,7,8,3,4,5,6]
sortNfilter.sort()
sortNfilter.reverse()
console.log(sortNfilter)
const filtered = sortNfilter.filter(n => n === 3)
console.log(filtered)


//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function searchNum (arr, num) {
   bool = arr.includes(num)
     if (bool == true) {
        console.log("Number " + num + " was found in the given array.")
    } else {
        console.log("Number "+ num + " was not found in the given array.")
    }
}
searchNum([1,2,3,4,5,0], 6)

//Implement a loop that will print the number 'a' until it is less than 10

for (let a = 15; a >= 10; a--) {
    console.log(a);
}


//Implement a loop that prints prime numbers to the console

function prime() {
    let isPrime = true
    for (let num = 0; num < 16; num++) {
    if (num == 0 || num == 1){
       continue;
        } else {
            for (var i = 2; i < num; i++) {
                if (num%i == 0){
                isPrime = false;
                continue;
                } 
            } 
        } 
    if (isPrime == false) {
    isPrime = true;
    continue;
        } else {
            console.log(num + " is a prime number")
            continue;
        } 
    }
  
}
prime()


//Implement a loop that prints odd numbers to the console 
for (let num = 0; num < 15; num++ ) {
    if (num%2 != 0) {
        console.log(num);
    } else {
        continue;
    }
}