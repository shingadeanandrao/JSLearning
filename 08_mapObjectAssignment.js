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
const kotak_bank = new Bank('Kotak Bank', 'Kolhapur',456789321, 'KTB0000227', '11%' );
const hdfc_bank = new Bank('HDFC Bank', 'Hydrabad', 11226678893, 'HDFCB0000235', '9.5%' );
const panjab_bank = new Bank('Punjab Bank', 'Ambala',4567893786, 'PNB0000245', '9.75%' );

const map1 = new Map();
map1.set(1234567890, axis_bank);
map1.set(2288991133, sbi_bank);
map1.set(86601519165, icici_bank);
map1.set(456789321, kotak_bank);
map1.set(11226678893, hdfc_bank);
map1.set(4567893786, panjab_bank);

const keys = map1.keys();

for (const key of keys) {
    const bank1 = map1.get(key);
   console.log(`${bank1.bank_name} Details==> ${bank1.bank_name}    ${bank1.account_no}      ${bank1.interest_rate}`);
 }

