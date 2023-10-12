// 3! = 1 * 2 * 3 ==> 6

// 3! = 3 * 2 * 1 ==> 6

// 4! = 4 * 3 * 2 * 1 ==> 24

// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

 

function factorial(num){

    let factNum = 1; // 60 

    for (let index = num; index >=1; index--) {

        factNum = factNum * index;

    }

    console.log(`Factorial of ${num} is ${factNum} `);

}

factorial(5);

factorial(7);

factorial(10);

function primeNumber(num){
    var count=0;
    if(num==0 || num == 1)
    {
        console.log(`Number ${num} is not prime and not composite.`);
    }
    else{
        for (let index = 2; index <=num; index++) {
            if(num%index==0){
                count++;
            }
        }
        if (count>1) {
            console.log(`Number ${num} is not prime.`);
        }
        else{
            console.log(`Number ${num} is Prime.`);
        }
    }
}

//primeNumber(11);
primeNumber(12);