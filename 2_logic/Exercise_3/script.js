// Methos in arrays

let num1 = [1,2,3,4,5];
num1.push(2,3)
console.log(num1);  //add to the end

let num2 = [1,2,3,4,5,6,7];
num2.pop();
console.log(num2);  //take from the end

let num3 = [7,6,5,4,3,2,1];
num3.shift();
console.log(num3);   //take from the start

let num4 = [5,4,3,2,1];
num4.unshift(8,7);
console.log(num4);  //add to the start


let num5 = [9,6,10,4,5,3,7,8,2,1];
num5.sort((a, b) => a - b);
console.log(num5);  //focus on this example

let num6 = [9,6,4,5,3,7,8,2,1];
num6.sort();
console.log(num6);


let num7 = [15,8,25,30,7];
let result = '';

num7.forEach ( size =>{ result += size* 2 + ','})
console.log(result);


let num8 = [15,8,25,30,7];
let result8 = [];

num8.forEach ( size =>  result8.push(size*2))
console.log(result8.toString());



let studentsNames = []
let studentsLastName = []


Elvis Masache 
Erika Masache 


Fruit Prices total to pay

