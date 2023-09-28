console.log(`===============Step 01==========================`);
function maleMarriageEligibility(gender,age,boyName){
    var result = gender=="Male" && age>=21
    ? `Hey ${boyName} you are eligible for marriage,congrats!`
    :`Sorry, ${boyName} you are not eligible, try next year`;
    return result;
}
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log(`1.${result}`);

var result = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`2.${result}`);

console.log(`===============Step 02=======================`);

function femaleMarriageEligibility(gender,age,girlName){
    var result = gender=="Female" && age>=18
    ? `Hey ${girlName} you are eligible for marriage,congrats!`
    :`Sorry, ${girlName} you are not eligible, try next time`;
    return result;
}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(`1.${result}`);

var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`2.${result}`);



