

const arrayRollNumbers = [113, 45,56,11,32,45,109,799,56,45];
console.log("1. Given Array:",arrayRollNumbers);

const revArray = arrayRollNumbers.reverse();
console.log("2.Reversed Array: ", revArray);

const sortArray = arrayRollNumbers.sort();
console.log("3.Sorted without logic: ",sortArray);
console.log(`==>Issue: sorted considering elements as string`);

const arrayAsc = arrayRollNumbers.sort( (a, b) => {

    return a>b ? 1 : -1;

} );

console.log("4.Sorted array by Ascending order",arrayAsc);

console.log(`5.Greatest number from array: ${arrayAsc[arrayAsc.length-1]}`);

console.log(`6.Smallest number from array: ${arrayAsc[0]}`);

const arrayNumber = [...new Set(arrayRollNumbers)];

console.log("7.Array without duplicate elements: ",arrayNumber);
