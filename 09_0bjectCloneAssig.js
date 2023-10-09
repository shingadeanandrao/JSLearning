
console.log(`1.Object bankSbi  with literals created:==>`);
const bankSbi = {
    accountName : 'Raju Verma',
    accountNumber : "07131011000317",
    branch : "Hadapsar,Pune",
    IFSC : "SBIN000028"
}

console.log(bankSbi);
console.log(`======================================================================`);
console.log(`2.Object bankLocation created:==>`);
const bankLocation = {
    street : "Solapur Road",
    city : " Pune",
    pin : "411018"
}
console.log(bankLocation);
console.log(`======================================================================`);
console.log(`3.1. bankSbi object cloned to SBIDetails object==>`);
const SBIDetails = Object.assign(bankSbi);
console.log(SBIDetails);
console.log(`Account Name: ${SBIDetails.accountName}`);
console.log(`Account Number: ${SBIDetails.accountNumber}`);
console.log(`Branch: ${SBIDetails.branch}`);
console.log(`IFSC Code: ${SBIDetails.IFSC}`);

console.log(`======================================================================`);
console.log(`3.2. bankLocation object cloned to branchLocation object==>`);
const branchLocation = Object.assign(bankLocation);
console.log(branchLocation);
console.log(`Street Name: ${bankLocation.street}`);
console.log(`City Name: ${bankLocation.city}`);
console.log(`Pincode: ${bankLocation.pin}`);

console.log(`======================================================================`);
console.log(`4.Object bankSbi  with literals created:==>`);
const rateOfInterest={
    homeLoanInterest : "7.5%",
    personalLoanInterest : "15.99%",
    dueInterest : "4%"
}
console.log(rateOfInterest);
console.log(`======================================================================`);
console.log(`5. Merged three objects into sbiDetails==>`);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`======================================================================`);
console.log(`6. Traversing of merged object sbiDetails==>`);

for (const key in sbiDetails) {
   console.log(`${key} :${sbiDetails[key]}`);
        
    }


 
