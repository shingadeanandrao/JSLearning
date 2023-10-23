const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("Given Array:",arrayNumbers);
const arrayGtFifty = arrayNumbers.filter((element)=>{
   return element>50;
})
console.log("1.Elements Greater than Fifty in Array:",arrayGtFifty);



const arrayEven = arrayNumbers.filter((element)=>{
    return element%2==0;
 })
 console.log("2.Even Elements in Array:",arrayEven);



 const arrayOdd = arrayNumbers.filter((element)=>{
    return element%2!=0;
 })
 console.log("3.Odd Elements in Array :",arrayOdd);



 const arrayMultiple = arrayNumbers.filter((element)=>{
    return element%5==0;
 })
 console.log("4.Elements Multiple of 5:",arrayMultiple);


 const arrayBetween = arrayNumbers.filter((element)=>{
    return element>20 && element<50;
 })
 console.log("5.Elements Between 20 and 50:",arrayBetween);
