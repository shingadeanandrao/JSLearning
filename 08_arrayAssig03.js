console.log(`=========================1.Removing duplicates by using set===============`);
var arrayNum = [11, 3, 4, 11, 4, 7, 3]
arrayNum = [...new Set(arrayNum)];

console.log(arrayNum);
console.log(`=========================2.Removing duplicates by using for loop===============`);
var newArr =[];
for (let index = 0; index < arrayNum.length; index++) {
    if (newArr.includes[arrayNum[index]]) {
        continue;
    }
    else{
        newArr.push(arrayNum[index])
    }
}
console.log(newArr);
/*
const str = "How are you mate";

let newStr = "";
for (let index = 0; index < str.length; index++) {
    if (str[index]==" ") {
        newStr = str[index-1]+ str[index-1].toUpperCase();
    } else {
        newStr = str[index-1]+ str[index-1];
    }
    
   // if (newStr.charAt(index)==" " ) {
        
    //}
    
}
console.log(newStr);

*/
console.log(`=========================3.Part 2===============`);

const givenStr = "How are you mate ";

/*function convertString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
        
      result += str.charAt(i-1).toUpperCase();
    } else {
      result += str.charAt(i-1);;
    }
  }
  return result;
}
var newStr = convertString(str);

//console.log(`New String: ${newStr}`);

/*

function convertUpper(str) {
    let result1 ="";
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index) == " ") {
            
            result1 += str.charAt(index +1).toUpperCase();
          } else {
            result1 += str.charAt(index+1);;
          }
         
    }
    return result1
}
var  x = convertString(newStr);
console.log(x); 
*/
function convertString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
          
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  var finalStr= (convertString(givenStr));
  var str1 = finalStr.replace(finalStr.charAt(15),"E");
  var str2 =  str1.replace(str1.charAt(14),"t");
  console.log(`1.Final String:==> ${str2}`);

  console.log(`========================Logic 2=======================================`);

  const str = "How are you mate"; // "HoW ArE YoU MatE"

const arrayWord = str.split(' ');

let finalStr = '';

for (const word of arrayWord) {

    let firstChar = word.charAt(0).toUpperCase();

    let lastChar = word.charAt(word.length-1).toUpperCase();

    // Replace word,  first char by firstChar

    // Replace word,  last char by lastChar

    finalStr = finalStr + word;

    console.log(word, firstChar, lastChar );

}

console.log(finalStr);
  