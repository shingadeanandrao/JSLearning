console.log(`==============================================Part 01===========================================================`);
class Car {
    company
    color
    model
    engineCapacity
    transmission

    constructor(company,color,model,engineCapacity,transmission){
        this.company = company;
        this.color = color;
        this.model  =model;
        this.engineCapacity = engineCapacity;
        this.transmission = transmission;
    }
}

const carTata = new Car('Tata','White','Nexon','1500cc','Automatic');
//console.log(`Car Details==> Company Name:${carTata.company}   Car Color:${carTata.color}    Car Model:${carTata.model}    Engine Capacity:${carTata.engineCapacity}     Transmission System:${carTata.transmission}`);
const carSuzuki = new Car('Suzuki','Gray','Swift','1250cc','Manual');
//console.log(`Car Details==> Company Name:${carSuzuki.company}  Car Color:${carSuzuki.color}    Car Model:${carSuzuki.model}    Engine Capacity:${carSuzuki.engineCapacity}     Transmission System:${carSuzuki.transmission}`);
const carToyota = new Car('Toyota','Black','Legender','3000cc','Manual');
//console.log(`Car Details==> Company Name:${carToyota.company}   Car Color:${carToyota.color}    Car Model:${carToyota.model}    Engine Capacity:${carToyota.engineCapacity}     Transmission System:${carToyota.transmission}`);
const carHonda = new Car('Honda','Maroon','Honda City','1500cc','Automatic');
//console.log(`Car Details==> Company Name:${carHonda.company}   Car Color:${carHonda.color}   Car Model:${carHonda.model}  Engine Capacity:${carHonda.engineCapacity}   Transmission System:${carHonda.transmission}`);
const carChevrolet = new Car('Chevrolet','Off White','Cruze','2000cc','Manual');
//console.log(`Car Details==> Company Name:${carChevrolet.company}   Car Color:${carChevrolet.color}    Car Model:${carChevrolet.model}   Engine Capacity:${carChevrolet.engineCapacity}   Transmission System:${carChevrolet.transmission}`);

const carDetails = [carTata,carSuzuki,carToyota,carHonda,carChevrolet];
console.log(`==============================================Part 01===========================================================`);
for (const key of carDetails) {
 console.log(`Vehicle details: Company Name:${key.company}   Car Color:${key.color}  Car Model:${key.model}   Engine Capacity:${key.engineCapacity}  Transmission System:${key.transmission}`);

}

console.log(`==============================================Part 02===========================================================`);
class College{
    name
    location
    educationField
    establishment
    constructor(name,location,educationField,establishment){
        this.name=name;
        this.location=location;
        this.educationField=educationField;
        this.establishment=establishment;
    }
    display(){
        console.log(`College Details==> College Name:${this.name}  Location:${this.location}  Education Field:${this.educationField}   Establishment Year:${this.establishment}`);
    }
}

const college1= new College('College of Engineering','Shivajinagar','Engineering','1854');
college1.display();
const college2= new College('Symboisis Institute','Lavale','Management','1971');
college2.display();
const college3= new College('S P College','Tilak road','Graduation','1916');
college3.display();
const college4= new College('Vishwakarma Institute of Technology','Bibwewadi','Engineering','1983');
college4.display();

console.log(`==============================================Part 03===========================================================`);

function traverseObject(objectCollege){
    for (const key in objectCollege) {
        console.log(`${key} : ${ objectCollege[key]}`);
        }
        console.log(`*****************************************`);
    }
    traverseObject(college1);
    traverseObject(college2);
    traverseObject(college3);
    traverseObject(college4);
