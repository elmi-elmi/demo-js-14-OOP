'use strict';
//
// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
//
// const shahrokh = new Person('shahrokh',1993);
//
// console.log(shahrokh)
// console.log(shahrokh instanceof Person)
// // console.log(shahrokh.calcAge())
//
// Person.prototype.calcAge = function(){
//     console.log(2022-this.birthYear)
// }
// console.log(Person.prototype)
//
// console.log(shahrokh.__proto__)
//
//
// Person.prototype.species = 'Homo Sapiens';
//
// console.log(shahrokh.species) // Homo Sapiens
//
// console.log(shahrokh.hasOwnProperty('species')); // false
// console.log(shahrokh.hasOwnProperty('firstName')) // true
//
// console.log(shahrokh.__proto__.__proto__)
// console.log(shahrokh.__proto__.__proto__.__proto__)
//
// console.log(Person.prototype.constructor)
// console.dir(Person.prototype.constructor)
//
//
// const arr = [1,2,3,4]
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
class Car {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    acceleration(){
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed}Km/h`)
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}Km/h`)

    }

    get speed(){
        console.log(`${this.make} is going ${this._speed}Km/h`)
        return this._speed
    }
    set speed(speed){
        this._speed =  speed
    }

    get speedUS(){
        console.log(`${this.speed / 1.6}Mile/h`)
    }

    set speedUS(speed){
        this.speed = speed*1.6
    }
}


const bmw = new Car('BMW',120)
bmw.acceleration()
bmw.brake()
bmw.speedUS
// bmw.speedUS = 50
console.log(bmw)
console.log(bmw.speed)

// challenge # 1
//
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }
//
// Car.prototype.acceleration = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}Km/h`);
// }
//
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}Km/h`);
//
// }
//
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
//
// bmw.acceleration()
// bmw.acceleration()
// bmw.brake()
// bmw.brake()
//
// mercedes.acceleration()
// mercedes.acceleration()
// mercedes.brake()
// mercedes.brake()
/*
const account = {
    owner:'shahrokh',
    movements:[1,20,30,11,12],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set lates(mov){
        this.movements.push(mov)
        console.log(mov)
    }
}

console.log(account.latest)

account.lates  = 222


class PersonCl {
    constructor(fullName, year) {
        this.fullName = fullName;
        this.year = year;
    }

    calcAge(){
        console.log(2022-this.year)
    }

    greet(){
        conosle.log(`hi ${this.firstName}`)
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert('Something is wrong!')
    }

    get fullName(){
        return this._fullName
    }

    static hey(){
        console.log('hey from static method')
    }


}

const shahrokh = new PersonCl('shahrokh elmi', 1993)
// shahrokh.fullName
console.log(shahrokh)

PersonCl.hey()
*/

const PersonProto = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },
    init(firstName, birth){
        this.firstName = firstName;
        this.birth = birth;
    }
}

const shahrokh = Object.create(PersonProto);
shahrokh.init('shahrokh','1993');
console.log(shahrokh.__proto__ === PersonProto)
