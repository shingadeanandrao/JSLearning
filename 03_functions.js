console.log("====== Function type:function with no arguments and no return type ===== ");

function myPersonalDetails(){
    console.log("Name: AS");
    console.log('city: Pune');
    console.log('PIN CODE: 411028');
    console.log('Is married: NO');
}
myPersonalDetails();

console.log("2.========Function Type:Function with arguments and no return type========" );
console.log("===================Swap==================");
function swap(valueOne,valueTwo){//finction declaration
    console.log("Before swap==>",valueOne,valueTwo);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("After swap==>",valueOne,valueTwo);
}

swap(100,200);//function call/invocation
swap('Virat','Anushka');
swap('Pune','Mumbai');
swap('India','USA');

console.log("3.========Function Type:Function with arguments and return type========" );
function square(num){
    var result= num*num;
    return result;
}
var squareNum=square(10);
console.log("Num is 10 and it's square is:",squareNum);
