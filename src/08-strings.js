//node 08-strings.js

// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const pttrn = 'ahb acb aeb aeeb adcb axeb';
let result = pttrn.match(/a.b/g);
console.log(result)

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const expr = '2 + 3 223 2223';
let found = expr.match(/2 \+ 3/g)
console.log(found)
 
// Get the day, month and year of the current date and output it to the console separately

let date = new Date() 
console.log(date.getDate() + `\n` + (date.getMonth() + 1) + `\n` + date.getFullYear())