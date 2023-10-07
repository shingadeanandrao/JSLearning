console.log(`1.Object with 5 properties:`);
let professor = {
    name:"Ram",
    subject:"Physics",
    age:32,
    institute:"College of Engineering",
    teachingStyle:"Good"
}
console.log(professor);
console.log(`2.Added nested object:`);

professor.degrees = {
    engineering:"MECH",
    PHD:"Adv Computing",
    Specialization:"Computational Dynamics"
}
console.log(professor);
console.log(`3.Added Array in object:`);
professor.certificates=['Hacker Rank Participation','Certificate in IFE Course','Certificate in Advanced Programming'];
console.log(professor);
console.log(`4.Added Totat Experience in object:`);
professor.totalExperience = "14 years";
console.log(professor);
console.log(`5.Modified Teaching Style to Excellent:`);
professor.teachingStyle = "Excellent";
console.log(professor);
console.log(`6.Added Certificate at the end:`);
professor.certificates.push("Oracle Certified");
console.log(professor);
console.log(`7.Last Element of Array certificates is: ${professor.certificates[professor.certificates.length-1]}`);
console.log(`8.Complete object is : ${professor}`);
console.log(`9.Traversing of Certificates array by for of loop:`);
for (const certificate of professor.certificates) {
    console.log(certificate);
}





