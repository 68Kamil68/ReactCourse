class Human {
    gender = "male";


    printGender = () => {
        console.log(this.gender);
    }
}


class Person extends Human{
    name = "Kamil";

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();