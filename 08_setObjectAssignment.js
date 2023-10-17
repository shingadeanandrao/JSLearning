class Bank{
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc =ifsc ;
        this.interest_rate = interest_rate;
    } 
}
const axis_bank = new Bank('Axis Bank', 'Pune', 1234567890, 'AXSB0000225', '10%' );
const sbi_bank = new Bank('SBI Bank', 'Solapur', 2288991133, 'SBIN0000667', '10.5%' );
const icici_bank = new Bank('ICICI Bank', 'Satara', 86601519165, 'ICIC0000866', '9.5%' );
const kotak_bank = new Bank('Kotak Bank', 'Kolhapur',456789321 , 'KTB0000227', '11%' );
const hdfc_bank = new Bank('HDFC Bank', 'Hydrabad', 11226678893 , 'HDFCB0000235', '9.5%' );
const panjab_bank = new Bank('Punjab Bank', 'Ambala',456789321 , 'PNB0000245', '9.75%' );

const set1= new Set();
set1.add(axis_bank);
set1.add(sbi_bank);
set1.add(icici_bank);
set1.add(kotak_bank);
set1.add(hdfc_bank);
set1.add(panjab_bank);

console.log(`=======================Bank Details=======================================================`);
for (const element of set1) {
    console.log(`${element.bank_name} Details==> Bank Name: ${element.bank_name}    Location: ${element.location}` );
}


