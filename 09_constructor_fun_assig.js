console.log(`=========================================step 1,2 ===============================================`);
function Bank(bankName,location,ifscCode,branchCode){
this.bankName = bankName;
this.location = location;
this.ifscCode = ifscCode;
this.branchCode = branchCode;
}

const sbiBank = new Bank('State Bank Of India','Pune','SBIN0002244',445566);
console.log(`State Bank Details is: ${sbiBank.bankName}     ${sbiBank.location}     ${sbiBank.ifscCode}   ${sbiBank.branchCode}`);

const mahBank = new Bank('Maharashtra Bank','Mhaswad','MAHB0000224',415509);
console.log(`Mah Bank Details is: ${mahBank.bankName}        ${mahBank.location}     ${mahBank.ifscCode}   ${mahBank.branchCode}`);

const axisBank = new Bank('Axis Bank','Delhi','AXBN000123',411028);
console.log(`Axis Bank Details is: ${axisBank.bankName}             ${axisBank.location}        ${axisBank.ifscCode}     ${axisBank.branchCode}`);
const yesBank = new Bank('Yes Bank','Bund Garden','YESB000123',112233);
console.log(`Yes Bank Details is: ${yesBank.bankName}               ${yesBank.location}   ${yesBank.ifscCode}   ${yesBank.branchCode}`);

console.log(`=========================================step 5,6,7 ===============================================`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`5.Opening Time of SBI Bank: ${sbiBank.openTime}   and  Closing Time of SBI Bank:${sbiBank.closeTime}`);
console.log(`6.Bank Name : ${axisBank.bankName}   Closing Time : ${axisBank.closeTime}`);
console.log(`7.Bank Name : ${yesBank.bankName}    Baranch Code: ${yesBank.branchCode}    Opening Time : ${yesBank.openTime}`);
