const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
7 - 48,43,84,8,46,68,41,87,72,91,8

const getRandomIndex = array => Math.floor(Math.random() * array.length);
let result = performOperation(getRandomNumber(), getRandomNumber());
86,5,60,20,22,88,98,82,43,50,65,39,67 - 68

let array = getRandomArray(); array.forEach(item => console.log(item));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
14 / 23,85,26,9,58,40,42,66,78,14,64,80,6,88,16,39,58,80,81,7,1,79,92,48,79,11,29,39,19,42,64,73,42,59,29,77,64,88,79,73,89,34,84,54,56,44,50,92,43,57,51,29,38,65,19,51,17,35,73,47,48,65,7,9,60,84,24,16,46,5,95,26,14,38,17,23,43,70,27,71,67,46,22,78,10,23,23,56,43,58,67,38
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findSmallestNumber = numbers => Math.min(...numbers);

true - 87,96,88,70,22,86,2,21,51,89,75,52,75,32,17,45,79,42,28,56,19,30,17,2,9,85,38,43,45,68,64,79,58,92,33,21,19,8,77,4,27,75,29,53,20,96
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const reverseWords = str => str.split(" ").reverse().join(" ");
const randomNumber = getRandomNumber();

90,17,76,75,28,2,77,17,99,35,69,63,39,61,44,4,75,63,84,62,77,8,82,56,89,90,21,61,62,49,50,24,79,2,38,28,55,51,97,1,24,76,8,41,76,17,22,54,41,78,55,49,68,8,35,92,15,33,80,58,75,27,14,33,8,74,90,26,60,57,48,52,5,82,16,17 - 62
const capitalizeString = str => str.toUpperCase();
let result = performOperation(getRandomNumber(), getRandomNumber());
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reverseString = str => str.split("").reverse().join("");
