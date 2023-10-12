
const personalDetails= {
    name : 'Andy',
    education : 'Graduation',
    occupation : 'Business',
    native : 'USA' 
}
console.log(`1==>`, personalDetails);
console.log(`==================================================================================================================================`);

const collegeDetails ={
    collegeName:'Oxford University',
    degree:" Master in Nanotechnology",
    location :'England',
    contact : '+44 1865 270000'
}
console.log(`2==>`, collegeDetails);

console.log(`===================================================================================================================================`);
const myDetails=Object.assign({},personalDetails,collegeDetails);
console.log(`3==> My Details are: ${myDetails.name}  ${myDetails.education}  ${myDetails.occupation}   ${myDetails.native}   ${myDetails.collegeName}   ${myDetails.degree}   ${myDetails.location}   ${myDetails.contact}`);
console.log(`===================================================================================================================================`);
const friends =['Rony', 'Monty', 'Dany', 'Ram', 'Sita'];
Object.freeze(friends);
console.log(`4==.Freezed array:`, friends);
console.log(`===================================================================================================================================`);
console.log(`5==> Name of friends:`);
for (const index of friends) {
    console.log(`${index}`);
}
console.log(`===================================================================================================================================`);
var str='Codemind Technology';
var reverse ="";
for (let index = str.length-1; index >= 0; index--) {
    if (str.charAt(index)== " ") {
        break;
    }
    else{
        reverse = reverse + str.charAt(index);
    }
    
}
console.log(`6==> Reverse Second word of "${str}" is : ${reverse}`);


