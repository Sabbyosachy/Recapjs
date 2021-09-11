//1.Map() method use to make a array from a array of object 

/* const prouct = [
    { name: 'laptop', price: 2300, color: 'black' },
    { name: 'phone', price: 1300, color: 'white' },
    { name: 'Tv', price: 4500, color: 'black' },
    { name: 'Watch', price: 1000, color: 'orange' }
]
const brands = prouct.map(proucts => proucts.name);
console.log(brands);

const Price = prouct.map(Products => Products.price);
console.log(Price); */

//2.foreach don't need to return anything 

/* const prouct = [
    { name: 'laptop', price: 2300, color: 'black' },
    { name: 'phone', price: 1300, color: 'white' },
    { name: 'Tv', price: 4500, color: 'black' },
    { name: 'Watch', price: 1000, color: 'orange' }
]
prouct.forEach(Products => console.log(Products));
prouct.forEach(Products => console.log(Products.price)); */

// 3.Filter() return a array it work in condition includes() also use

const prouct = [
    { name: 'laptop', price: 2300, color: 'black' },
    { name: 'phone', price: 1300, color: 'white' },
    { name: 'Tv', price: 4500, color: 'black' },
    { name: 'Watchphone', price: 1000, color: 'orange' }
]

const cheap = prouct.filter(prouct => prouct.price);
console.log(cheap);

// const Name = prouct.filter(prouct => prouct.name.includes('v'));
// console.log(Name);

// 4.Find() it find ONLY first v alue of the consdition like as filter 

const prouct = [
    { name: 'laptop', price: 2300, color: 'black' },
    { name: 'phone', price: 1300, color: 'white' },
    { name: 'Tv', price: 4500, color: 'black' },
    { name: 'Watchphone', price: 1000, color: 'orange' }
]

const Name = prouct.find(prouct => prouct.name.includes('phone'));
console.log(Name);