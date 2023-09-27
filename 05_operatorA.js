console.log(`============Part 1==============`);
function squareOfWordLength(strWord){
    var lengthOfStr = strWord.length;
    var result = lengthOfStr**2;
    console.log(`Length of given string is: ${lengthOfStr}.`);
    return result
}
var result = squareOfWordLength("JavaScript");
console.log(`Given string is "JavaScript" and it's length square is ${result}.`);
console.log(`==================================================================`);
var result = squareOfWordLength("Google Chrome");
console.log(`Given string is "Google Chrome" and it's length square is ${result}.`);
console.log(`==================================================================`);
var result = squareOfWordLength("Developer Smart");
console.log(`Given string is "Developer Smart" and it's length square is ${result}.`);
console.log(`=======================Part 2===============================`);
function operator(){
    var givenStr = "I am React Developer";
    var lengthOfStr = givenStr.length;
    var words = givenStr.split(" ");
    var numOfWords=words.length;
    var resultDivide = lengthOfStr/numOfWords;
    var resultMulti = lengthOfStr*numOfWords;
    console.log(`Given string is: "${givenStr}".`);
    console.log(`Given string having length ${lengthOfStr} and Number of words ${numOfWords} and it's division is: ${resultDivide}.`); 
    console.log(`Given string having length ${lengthOfStr} and Number of words ${numOfWords} and it's multiplication is: ${resultMulti}.`);
}
operator();




