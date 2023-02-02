//  Length, Concat, UpperCase, LowerCase, Includes, indexOf
/*
let myName = "Shohidul Arifin Likhon";

console.log(myName.length);

let firstName = "Shohidul";
let lastName = "Arifin";
let fullName = firstName.concat(lastName);

console.log(fullName);

let myString = "Bangladesh is a beautiful country";
let upperCase = myString.toUpperCase();
console.log(upperCase);


let newString = "THIS IS A BEAUTIFUL HOUSE";

let lowerCase = newString.toLowerCase();
console.log(lowerCase)
let lyrics = "tumi bondhu kala pakhi";

let doesExist = lyrics.includes("pakhi");
console.log(doesExist);
let findIndex = lyrics.indexOf("bondhu");
console.log(findIndex);
*/

// Split , slice, sub-string, join
let string = "tumi bondhu kala pakhi, ami jeno ki";
let arr = ["this is array 1", "this is array2"]
let split = string.split(" ");
console.log(split);
let slice = string.slice(0,4);
console.log(slice)
let subString = string.substring(0,4);
console.log(subString);

let joinString = arr.join(":");
console.log(joinString);
