const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`1.Total Elements Available in array : ${arrayNumbers.length}`);
console.log(`2.First Elements of array: ${arrayNumbers[0]} and last element : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`3.Third last element of Array: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`4.Even Elements in array:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if(arrayNumbers[index]%2==0){
        var array = arrayNumbers[index];
        console.log(array);} 
}

console.log(`5.Odd Elements in array:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if(arrayNumbers[index]%2==1){
        var array = arrayNumbers[index];
        console.log(array);} 
}
console.log(`========================================================================`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==0){
       console.log(`Even positioned Value: ${arrayNumbers[index]}`);
       sum = sum + arrayNumbers[index]
    }
}
console.log(`6.Sum of Even positioned array elements is:${sum}`);

console.log(`========================================================================`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==1){
       console.log(`Odd positioned Value: ${arrayNumbers[index]}`);
       sum = sum + arrayNumbers[index]
    }
}
console.log(`7.Sum of Odd positioned array elements is:${sum}`);

console.log(`========================================================================`);
var result = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    result= result + arrayNumbers[index];
}
console.log(`8.Sum of array elements is:${result}`);
console.log(`========================================================================`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5==0) {
        console.log(`9.Number which is multiple of 5:${arrayNumbers[index]}`);
    }
    
}
console.log(`========================================================================`);
var result = arrayNumbers.includes(115);
console.log(`10. Is 115 Available in Array: ${result}`);
console.log(`========================================================================`);
var result = arrayNumbers.includes(23);
console.log(`11. Is 23 Available in Array: ${result}`);
console.log(`========================================================================`);
arrayNumbers.splice(3,0,55,66);
console.log(`12.Added 55,66 before index 3:`);
console.log(arrayNumbers);
console.log(`========================================================================`);
arrayNumbers.splice(4,3);
console.log(`13.Deleted 3 elements from index 4:`);
console.log(arrayNumbers);