const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("Given Array:",arrayNumbers);
const arrayAddTen = arrayNumbers.map((currentValue)=>{
    return currentValue + 10;
})
console.log("1.Add 10 to each Element:",arrayAddTen);

const arrayCube = arrayNumbers.map((currentValue)=>{
    return Math.pow(currentValue,3);
})
console.log("2.Cub eof each Element:", arrayCube);

const newArray = arrayNumbers.map( (currentValue, index )=> {

    return currentValue + index;

});

console.log("3.Add index to each element:", newArray);

