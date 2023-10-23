//Snake case: Variable naming convention
class Employee{
    constructor(emp_id, emp_name, emp_dept,emp_salary,  emp_company ){
            this.emp_id = emp_id;
            this.emp_name = emp_name;
            this.emp_dept = emp_dept;
            this.emp_salary = emp_salary;
            this.emp_company =emp_company;
    }
}

const emp_anil = new Employee(22,'Anil', 'IT', 50000,'TCS');
const emp_radha = new Employee(23,'Radha', 'HR', 74000,'Wipro');
const emp_rishi = new Employee(55,'Rishi', 'Finance', 47000,'TCS');
const emp_sonali = new Employee(66,'Sonali', 'Finance', 45000,'Infy');
const emp_monika = new Employee(77,'Monika', 'IT', 40000,'Wipro');
const emp_viny = new Employee(88,'Vinayak', 'IT', 75000,'TCS');
const emp_mahi = new Employee(99,'Mahesh', 'HR', 85000,'Infy');


const arrayEmployee =[emp_anil,emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`=======================step 1=====================================`);
arrayEmployee.forEach( (employee)=>{
    if (employee.emp_company == 'TCS') {
        console.log(`Employee Name:${employee.emp_name}  Company Name: ${employee.emp_company}`); 
    }
})
console.log(`=======================step 2======================================`);
arrayEmployee.forEach((employee)=>{
    if (employee.emp_dept=="Finance") {
        console.log(`Employee Name:${employee.emp_name}  Department Name: ${employee.emp_name}`);
    }
})

console.log(`=======================step 3======================================`);
arrayEmployee.forEach((employee)=>{
    if (employee.emp_name.startsWith("R")) {
        console.log(employee);
    }
})

console.log(`=======================step 4=====================================`);
arrayEmployee.forEach((employee)=>{
    if (employee.emp_salary>75000) {
        console.log(`Employee Name : ${employee.emp_name} Company : ${employee.emp_company} Salary : ${employee.emp_salary}`);
    }
})

console.log(`=======================step 5=====================================`);
arrayEmployee.forEach((employee)=>{
    if (employee.emp_salary>= 50000 && employee.emp_dept=="IT") {
        console.log(employee);
    }
})

console.log(`=======================step 6=====================================`);
arrayEmployee.forEach((employee)=>{
    if (employee.emp_company=='Infy') {
        console.log(employee);
    }
})