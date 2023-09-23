
console.log("**********01.Function with no argument and no return type*********");
console.log("=====================Function 1=================");
function hello(){
    console.log("Hi, I am the function with no argument and no return type,Thanks.");
}
hello();

console.log("=====================Function 2=================");
function revise(){
    console.log("Tyeps of primitive datatypes are: Numbers, String and Boolean");
}
revise();
console.log("**********************************************************************************************");
console.log("********02.Function personalDetails with arguments and no return type*********");
function personalDetails(firstName,lastName,collageName){
    console.log("First name is:",firstName);
    console.log("Last name is:",lastName);
    console.log("College name is:",collageName);
}
personalDetails('Anandrao','Shingade','College of Engineering Pandharpur');
console.log("**********************************************************************************************");
console.log("********03.Function swapValues with arguments and no return type*********");
function swapValues(firstNum,secondNum){
    console.log("Before swap==>","First value:",firstNum,"     ", "Second Value",secondNum);
    var temp=firstNum;
    firstNum=secondNum;
    secondNum=temp;
    console.log("After swap==>","First value:",firstNum,"     ","Second Value",secondNum);
}
swapValues('Virat','Anushka');
swapValues(1000,2000);
console.log("**********************************************************************************************");
console.log("********04.Function addThreeValues with arguments and no return type*********");
function addThreeValues(value1,value2,value3){
console.log("First value:",value1);
console.log("Second value:",value2);
console.log("Third value:",value3);
console.log("Addition of above three values is:",value1+value2+value3);
}
addThreeValues(10.23,600,40);
console.log("=================Part B==============");
addThreeValues('Hello ','Good ','Morning ')



