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
/*
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
bmw.speedUS = 50
console.log(bmw)
console.log(bmw.speed)
*/
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

// const PersonProto = {
//     calcAge(){
//         console.log(2022 - this.birthYear);
//     },
//     init(firstName, birth){
//         this.firstName = firstName;
//         this.birth = birth;
//     }
// }
//
// const shahrokh = Object.create(PersonProto);
// shahrokh.init('shahrokh','1993');
// console.log(shahrokh.__proto__ === PersonProto)

/*
const Person = function(firstName, birth){
    this.firstName = firstName;
    this.birth = birth;
}

Person.prototype.calcAge = function(){
    console.log(2022-this.birth)
}


const Student = function(firstName, birth, course){
    // this.firstName = firstName;
    // this.birth = birth;
    console.log(this)
     Person.call(this,firstName, birth);
    this.course = course
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.introduce = function(){
    console.log(`hi this is ${this.firstName} study in ${this.course}`)
}

const shahrokh = new Student('shahrokh', 1993, 'JS');
*/
// Student.prototype.constructor = Student;
//
// console.log(shahrokh instanceof Student)
// console.log(shahrokh instanceof Person)
// console.log(shahrokh instanceof Object)
// shahrokh.introduce()
// shahrokh.calcAge()
// console.log(shahrokh.__proto__)
// const p = new Person('shah',1992)
// console.dir(p.__proto__)




// Challenge 4
//
//
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }
//
// Car.prototype.acceleration = function(){
//     this.speed += 10
//     console.log(`${this.make} acceleration +10 --->`,this.speed)
// }
//
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} brake -5 -->`, this.speed)
// }
//
// const EV = function(make, speed, charge){
//     Car.call(this,make, speed);
//     this.charge = charge
// }
// EV.prototype = Object.create(Car.prototype)
//
// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo
// }
//
// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge -= (this.charge*0.01)
//     console.log(`${this.make} going at ${this.speed}, with a charge of ${this.charge}`)
// }
//
// // EV.prototype.constructor = EV;
// const tesla = new EV('Tesla',120, 40)
// console.log(tesla)
//
// tesla.accelerate()
// tesla.accelerate()
// tesla.chargeBattery(20)
// console.log(tesla.charge)

/*

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

class StudentCl extends PersonCl {
    constructor(fullName,year, course) {
        super(fullName, year);
        this.course = course;
    }

    introduce (){
        console.log(`hi ${this.fullName} from ${this.course}`)
    }

    // calcAge() {
    //     super.calcAge();
    // }
}

const shahrokh = new StudentCl('shahrokh elmi', 1993, 'Javescript')

shahrokh.introduce()
shahrokh.calcAge()
*/


// 16 Inheritance Between Classes Objecte create

/*
const PersonProto = {
    init(firstName,year){
        this.firstName = firstName;
        this.year = year;
    },

    calcAge(){
        console.log(this.year)
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init=function(firstName,year,course){
    PersonProto.init.call(this,firstName,year);
    this.course = course
}
StudentProto.introduce = function(){
    console.log(`hi ${this.firstName}, this is ${this.course}`)
}
const shahrokh = Object.create(StudentProto);
shahrokh.init('shahrokh elmi', 1993, 'Javascript')

console.log(shahrokh)
 */

//
// class Account{
//     #movements=[];
//     hello = 'hi'
//     constructor(owner, pin) {
//         this.owner = owner;
//         this.pin = pin
//     }
//
//     #isTrue(){
//         return true
//     }
//
//     calcAge(){
//         if(this.#isTrue()){
//             console.log('hi')
//         }
//     }
//
// }
//
// const shah = new Account('shahrokh', 1234)

// challenge #4

class CarCL{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    acceleration(){
        this.speed += 10;
    }

    brake(){
        this.speed -= 5;
    }
}

class EVCL extends CarCL{
#charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge
    }

    acceleration() {
        // super.acceleration()
        this.#charge -= 1;
        return this
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this
    }
}

const tesla = new EVCL('tesla', 120, 40)

