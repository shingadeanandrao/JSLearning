console.log(`============Step 1===========`);
var square = function(num){
    var sqr = num**2;
console.log(`Square of ${num} is ${sqr}.`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`============Step 2===========`);
console.log(`Tyepe of variable is ${typeof square}.`);

console.log(`============Step 3===========`);
var area = function(l,w){
    var a = l*w;
    console.log(`Area of Rectangle is ${a}.`);
}
area(499,917);

console.log(`============Step 4===========`);
var swapValues=function(v1,v2){
console.log(`Before swapping: ${v1} ${v2}`);
var temp=v2;
v2=v1;
v1=temp;
console.log(`After swapping: ${v1} ${v2}`);
}
swapValues('Mahi','Raina');
swapValues(55,77);


console.log(`============Step 5===========`);
var strOps = function(){
    var str= 'JS the most popular language of Internet';
    var strlength= str.length;
    console.log(`A.Total characters available in string are:${strlength}`);
    console.log(`B. Character at index 6 is:${str.charAt(6)}`);
    console.log(`C. Character at index 11 is:${str.charAt(11)}`);
    console.log(`D. Last character in string is:"${str.charAt(strlength-1)}"`);
    console.log(`E. Character at  first index is:"${str.charAt(0)}"`);
    console.log(`F. Character at  3rd last index is:"${str.charAt(strlength-1)}"`);
    var words= str.split(" ");
    var wordLength=words.length;
    console.log(`G.Number of words in string are ${wordLength} and it's square is: ${wordLength**2}`);
    
}
strOps();
