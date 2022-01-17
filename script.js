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


// challenge # 1

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.acceleration = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}Km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}Km/h`);

}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.acceleration()
bmw.acceleration()
bmw.brake()
bmw.brake()

mercedes.acceleration()
mercedes.acceleration()
mercedes.brake()
mercedes.brake()

