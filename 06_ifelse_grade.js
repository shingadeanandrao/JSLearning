var voteEligible = function(age){
    if (age<=0 || age>130) {
        console.log(`-->Your age is ${age}, it is Invalid Data.`);
    } else {
        if (age>18 ) {
            console.log(`-->Your age is ${age},you are eligible for voting.`);
            
        } else {
            console.log(`-->Your age is ${age},you are not eligible for voting.`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);