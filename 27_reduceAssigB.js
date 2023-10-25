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

 

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

console.log(`1.Employees of Wipro Company`);
const wiproEmps=arrayEmps.filter( (object)=>{
        return object.emp_company == 'Wipro';
})

console.table(wiproEmps);


console.log(`2.Employees from IT or HR Department`);
const itHREmps=arrayEmps.filter( (object)=>{
        return object.emp_dept == 'IT' || object.emp_dept == 'HR';
})
console.table(itHREmps);

console.log(`3.Employees whose emp_id is greater than 50`);
const emps=arrayEmps.filter( (object)=>{
        return object.emp_id >50;
})
console.table(emps);

console.log(`4.Employees whose name start with "A" or "V" or "M"`);
const empsNames=arrayEmps.filter( (object)=>{
        return object.emp_name.startsWith("A") || object.emp_name.startsWith("V") || object.emp_name.startsWith("M");
})
console.table(empsNames);

console.log(`5.Average salary of employees`);

const sumSalary = arrayEmps.reduce( (runningTotal, element)=>{
    return runningTotal + element.emp_salary;
}, 0);
console.log(`Total Salary: ${sumSalary}`);
console.log("Avg Salary:",(sumSalary)/(arrayEmps.length));

console.log(`6.Average salary of IT Dept Employee`);

const itSalary = arrayEmps.filter( (element)=>{
    return element.emp_dept == 'IT';
});
const itSum = itSalary.reduce((runningTotal,object)=>{
        return runningTotal + object.emp_salary;
},0);
console.log(`Total Salary: ${itSum}`);
console.log("Avg Salary:",(itSum)/(itSalary.length));