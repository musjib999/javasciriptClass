let a = 20;
const b = 20;


// console.log(a + b);

let firstName = 'Musa';
let lastName = 'Jibril';

firstName = 'John';
lastName = 'Doe';

let fullName = `${firstName} ${lastName}`;


let isMarried = false;

isMarried = true;

let children = ['Musa', 'Ahamd', 'Usman', 2, 8, false];

children[2] = 10;

children[5] = true;

children.push('Bags');

children.splice(2, 4);

let person = {
    name: 'John',
    age: 20,
    isMarried: false
};

person.name = 'Isa';
person.isMarried = true

// if(a > b){
//     console.log('A is greater than B');
// }else if(b > a){
//     console.log('B is greater than A');
// }else{
//     console.log('A is equal to B');
// }

function add(num1, num2){
    let total = num1 + num2;
    // console.log(total);
    return total;
}


let subtract = (num1, num2) => {
    let total = num1 - num2;
    console.log(total);
}

function addTwoNumbers(numbers){
    let a = numbers[1];
    const secondToTheLast = numbers.length - 2;
    let b = numbers[secondToTheLast]
    return a + b;
}


let twoSum = addTwoNumbers([1,2, 3, 4, 5, 6, 7]);

// console.log(twoSum * 2);
let score = add(99, 2);

// console.log(score + 2);
// subtract(10, 5);

// console.log(person);


// function addNumbers(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// let sum = addNumbers([1,2,3,4,5,6,7,8,9]);
// console.log(sum);


//async
let callMe = (name) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log(`Hello ${name}`);
            resolve(`Hello ${name}`);
        }, 2000);
    });
}

async function print(){
    try {
        let name = await callMe('Abba');
        console.log('Good Afternoon', name);
    } catch (error) {
        console.log(error);
    }
    
}

print();