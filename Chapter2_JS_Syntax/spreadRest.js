// spread

const numbers = [1, 2, 3, 4, 6];
const newNumbers = [...numbers, 1, 3, 4];
console.log(newNumbers);

const person = {
    name: 'Kamil'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);


// rest
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3, 1, 3));