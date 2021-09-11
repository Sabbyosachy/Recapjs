//1. Templete String
/* const info = {
    name: 'susan',
    age: 16,
    location: 'sylhet',
    phone: '0176283356'
}
const About = `Name:${info.name} Age:${info.age} Location:${info.location} Phone:${info.phone}`;
console.log(About); */

// 2.Arrow function 

/* const A = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(A(10, 10)); */

//3.speread operator it use to clone array and push  value in array

let num = [10, 12, 15, 20];
const currentNumber = [...num, 100, 200];
console.log(currentNumber);