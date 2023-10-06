console.log(`===================Even Positioned Values in  Given Array===============`);
var sum = 0;
let arrayNumber = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNumber.length; index++) {
    sum = sum + arrayNumber[index]
    if(index%2==0){
console.log(`Even positioned Value: ${arrayNumber[index]}`);
    }
}
console.log(`========================================================================`);
console.log(`Sum of array elements is:${sum}`);