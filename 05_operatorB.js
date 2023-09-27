console.log(`Part 01==>`);
function greaterNumber(n1,n2){
    var result = n1>n2 ? n1 : n2;
    console.log(`${result} is greater in between ${n1} and ${n2}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);


console.log(`Part 02==>`);
function isEvenOrOddNum(n1){
    var result = n1%2==0 ? "Even" : "Odd";
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`Given number 29 is: ${result}`);
var result = isEvenOrOddNum(44);
console.log(`Given number 44 is: ${result}`);
var result = isEvenOrOddNum(0);
console.log(`Given number 0 is: ${result}`);
var result = isEvenOrOddNum(101);
console.log(`Given number 101 is: ${result}`);


console.log(`Part 02==>`);
function wordLength(str){
var strLength = str.length;
var result = strLength%2==0 ? "Even" :"Odd";
console.log(`Given string is: "${str}",it's length is ${strLength} and is: "${result}".`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
