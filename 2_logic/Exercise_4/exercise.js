let firstSemester = [97, 75, 90, 75];
let secondSemester = [100, 90, 85, 90];
let thirdSemester = [95, 85, 90, 100]
let total = [];
let average = 0;

firstSemester.forEach((element) => {
    (average += element)
})

console.log('first average is:', average/4);



// firstSemester.forEach((element, i) => {
//     let sum = firstSemester[i] + secondSemester[i] + thirdSemester[i];
//     total.push((sum/3).toFixed(2));
   
// });

// let sumOfAverages = total.reduce((acc, curr) => acc + curr, 0);
// average = sumOfAverages / total.length;


// console.log('The global average is', average.toFixed(2));
// console.log('The total is', total.toString());
