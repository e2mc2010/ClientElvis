let studentsNames = ["Daniel", "Carlos", "Javier", "Sofia", "Domenica", "Manuel"];
let studentsLastName = ["Andrade", "Gonzalez", "Gomez", "Garcia", "Lopez", "Maza"];
let studentsFullNames = [];
studentsNames.forEach((name, i) => 
    {studentsFullNames.push(`${studentsNames[i]} ${studentsLastName[i]}`) ;
});

console.log(studentsFullNames.join(', '));


let firstName = ["Elvis", "Carlos", "Andres"];
let middleName = ["Edison", "Gabriel", "Leonardo"];
let lastName = ["Garcia", "Andrade", "Soto"];
let completeName = [];
firstName.forEach((first, i) => {
    let middle = middleName[i];
    let last = lastName[i];
    completeName.push(`${first} ${middle} ${last}`);
});

console.log(completeName.join(', '));


let fruitNames = ["apples", "grapes", "watermalon", "strawberry", "mango", "pineapple", "kiwi"]
let fruitPrices = [5.60, 8.00, 5.50, 6.00, 8.50, 6.00, 6.50]
let assignedProduct = []; 
let totalPrice = 0;

fruitNames.forEach((element, i) => {
    assignedProduct.push(`${fruitNames[i]} ${fruitPrices[i]}`)
    totalPrice += fruitPrices[i];
    
});

console.log(assignedProduct);
console.log('Total Price', totalPrice.toFixed(2)); //toFixed is the decimal added

