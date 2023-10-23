class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;

        this.emp_name = emp_name;

        this.emp_dept = emp_dept;

        this.emp_salary = emp_salary;

        this.emp_company = emp_company;

    }

}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

console.log(`=========================step 1==============================`);
const arrayTCS = arrayEmployees.filter((object)=>{
    return object.emp_company=='TCS';
}).forEach((element)=>{
    console.log(`Company Name: ${element.emp_company} Employee Name: ${element.emp_name}`); 
})

console.log(`=========================step 2==============================`);
const arrayWipro = arrayEmployees.filter((object)=>{
    return object.emp_company=='Wipro';
}).map((element)=>{
    return element.emp_salary; 
})

let sum = 0;
for (let index = 0; index < arrayWipro.length; index++) {
    sum = sum + arrayWipro[index];
}
console.log("Average Salary from company Wipro:", (sum) /(arrayWipro.length));

console.log(`=========================step 3==============================`);
const arrayWiproInfy = arrayEmployees.filter((object)=>{
    return object.emp_company=='Wipro' || object.emp_company== "Infy";
}).map((element)=>{
    return element.emp_salary; 
})

let result= 0;
for (let index = 0; index < arrayWiproInfy.length; index++) {
    result = result + arrayWiproInfy[index];
}
console.log("Average Salary from company Wipro or Infy:", (result) /(arrayWiproInfy.length));


