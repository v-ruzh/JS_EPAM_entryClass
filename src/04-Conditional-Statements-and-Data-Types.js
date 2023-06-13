/* Perform addition of various types (string + boolean, string + number, number + boolean)
Perform multiplication of various types (string * boolean, string * number, number * boolean)
Divide different types (string / boolean, string / number, number / Boolean)
Perform explicit conversion (number, string, boolean) */

let str = "1"
let bool = true
let num = 2

console.log(`Performing addition of various types...\nA string that equals "1" plus boolean that equals "true" results with "` + (str + bool)+`"\nA string that equals "1" plus number that equals "2" results with "` + (str+num) + `"\nA number that equals "2" plus boolean that equals "true" results with "`+(num+bool)+`"`)

console.log(`\n\nPerforming multiplication of various types...\nA string that equals "1" multiplied by boolean that equals "true" results with "` + (str * bool)+`"\nA string that equals "1" multiplied by number that equals "2" results with "` + (str*num) + `"\nA number that equals "2" multiplied by boolean that equals "true" results with "`+(num*bool)+`"`)

console.log(`\n\nDividing various types...\nA string that equals "1" divided by boolean that equals "true" results with "` + (str/bool)+`"\nA string that equals "1" divided by number that equals "2" results with "` + (str/num) + `"\nA number that equals "2" divided by boolean that equals "true" results with "`+(num/bool)+`"`)

console.log(`\n\nPerforming explicit conversion of all types above to integer type and adding it to each other:\n"str("1")+bool(true)+num(2)" equals "` + (Number(str)+Number(bool)+num)+`"`)