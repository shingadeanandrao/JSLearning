const array_numbers =[20,11,40,25,37,49,9,90,60,2,19]
console.log("Given array: ",array_numbers);
console.log(`=======================Sum using reduce method===========================`);
const sum = array_numbers.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
console.log("Sum of array elements: ",sum);

console.log(`=======================Sum using traditional method===========================`);
let sum2 = 0;
for (const element of array_numbers) {
    sum2 = sum2 + element;
}
console.log("Sum of array elememts: ", sum2);



console.log(`=======================Sum elements multiple of five===========================`);
const multipleFive = array_numbers.filter((element)=>{
    return element%5==0;
}).reduce((runningTotal, value)=>{
    return runningTotal + value;
})
console.log(`Sum of elements multiple of five:`,multipleFive);