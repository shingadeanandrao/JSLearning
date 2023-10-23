console.log(`1.Arrow function with no argument and no return value.`);
let arrowFun = ()=> {

    console.log(`"Good Morning, Today is Wednesday"`);

}

arrowFun();

console.log(`2.Arrow function with arguments and no return value.`);
let multiply = (n1,n2,n3=1)=>{
     var result = n1*n2*n3;
    console.log(`Multiplication=> ${result}`);

}
multiply(5,5,2);
multiply(10,4);

console.log(`3.Arrow function with arguments and return value.`);

let add = (n1,n2,n3,n4,n5)=>{
    return n1+n2+n3+n4+n5;
}
var result=add(100,100,200,349,756);
console.log(`Addition of 5 arguments: ${result}`);

var str =add("I am ","learning ","ES6 ","features ","in depth")
console.log(`Addition of 5 string arguments: "${str}"`);




