
const employeeInfo = `{
                        "name" : "Aleix Melon",
                        "id" : "E00245",
                        "role" :["Dev", "DBA"],
                        "age" : 23,
                        "doj" : "11-12-2019",
                        "married" : false,
                        "address" : {
                            "street" : "32, Laham st.",
                            "City" : "Innsbruck",
                            "country" : "Austria"
                        },
                        "referred-by" : "E0012"
                    }`

const employeeObj= JSON.parse(employeeInfo);
console.log(employeeObj);
console.log(`1.Type of json object: ${typeof employeeObj}`);
console.log(`2.Role DEV : ${employeeObj.role[0]}`);
const words = employeeObj.name.split(" ");
console.log(`3.Last name : ${words[1]}`);

const date = employeeObj.doj.split("-");
const dates = new Date( date[2], date[1]-1, date[0]);
console.log(`4.Year of joining: ${dates.getFullYear()}`);
