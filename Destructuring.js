// //Array Disturcturing 
/* const numbers = [42, 64];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 64]
const [x, y] = numbers;
console.log(x, y);
 */

/* const student = {
    name: 'susan',
    age: 16,
    hobby: ['cricket', 'football', 'ludu']
}

const [x, y] = student.hobby
console.log(x, y); */

//Object disturcturing 

const student = {
    name: 'susan',
    age: 16,
    hobby: ['cricket', 'football', 'ludu'],
    specification: {
        height: 66,
        weight: 60
    }
}
const { name, age } = student;
console.log(name, age);

const [firstHobby, secondhobby, thirdhobby] = student.hobby;
console.log(firstHobby, secondhobby, thirdhobby);