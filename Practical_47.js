const fs = require('fs');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getElder(X) {
        const elder = this.age > X ? this : new Person('Unknown', -1);
        this.printDetails(elder);
        return elder;
    }

    printDetails(person) {
        console.log('Elder person details:');
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);

        const filePath = 'output.txt'; // Adjust the file path as per your requirement
        const fileContent = `Name: ${person.name}\nAge: ${person.age}\n\n`;

        fs.appendFile(filePath, fileContent, (err) => {
            if (err) {
                console.error('An error occurred while writing to the file:', err);
            } else {
                console.log(`Details written to ${filePath}`);
            }
        });
    }
}

// Example usage
const person1 = new Person('John', 35);
const person2 = new Person('Jane', 42);

person1.getElder(30); // Should print details of Jane
person2.getElder(30); // Should print details of Jane
person1.getElder(40); // Should print details of John
person2.getElder(40); // Should print details of Jane
