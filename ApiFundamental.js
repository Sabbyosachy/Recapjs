// 1.Json use 
// JSON.stringify can make the javascript file to json string 
// JSON.parse can make json string to normal javascript file

/* const student = {
    name: 'susan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const A = JSON.stringify(student);
console.log(A); */

// 2.fetch 
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)); */


//3.Object keys and valus is use Object.keys/values()
// const student = {
//     name: 'susan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }

// const keys = Object.keys(student);
// console.log(keys);

const number = [10, 20, 30, 40];
number.forEach(num => console.log(num));