const number = 1;
const num2 = number;

console.log(num2);

const person = {
    name: 'Kamil'
};

const secondPerson = {...person};
person.name = 'Kamilek';
console.log(secondPerson);