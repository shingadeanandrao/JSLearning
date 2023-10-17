

function isPrime(num){

    for (let index = 2; index < num; index++) {

        if (num%index==0) {

            return false;

        }
    
    }

    return true;
   
}

function countNumber(arr){
    let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    count++;
  }
}
return count;
}
const array =[11,3,6,10,43,29,50];
const result = countNumber(array)
console.log(`Number of prime elements in array are:${result}`);



