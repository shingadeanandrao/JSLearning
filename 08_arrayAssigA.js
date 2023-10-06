const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`1.First and last elements of array are: ${arrayFruits[0]} and ${arrayFruits[arrayFruits.length-1]}`);
arrayFruits.splice(0,0,"Papaya");
console.log(`2.Papaya is added before Banana and Array is:`);
console.log(arrayFruits);
arrayFruits.splice(3,1)
console.log(`3.Deleted Mango:`);
console.log(arrayFruits);
arrayFruits.push("Pineapple");
console.log(`4.Added Pineapple at last:`);
console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`5.Dragon Fruit added before Water Melon:`);
console.log(arrayFruits);
arrayFruits.splice(2,1,"Kiwi");
console.log(`6.Replace Orange by Kiwi`);
console.log(arrayFruits);
console.log('7.Elements of array 1 to 4:',arrayFruits.slice(1,4));
console.log('8.Last Three ElementsP:',arrayFruits.slice(arrayFruits.length-3));