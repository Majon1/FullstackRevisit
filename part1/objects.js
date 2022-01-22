const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('Hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        console.log(a + b)
    },
}
setTimeout(arto.greet.bind(arto), 1000)

arto.greet()

arto.growOlder = function () {
    this.age += 1
}

const object2 = {
    name: 'FullStack',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dam',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(arto.name)
const fieldName = 'age'
console.log(arto[fieldName])

arto.address = 'Helsinki'
arto['secret number'] = 12341

arto.growOlder()
console.log(arto.age)

arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()