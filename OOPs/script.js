/* 

  OOPs, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes are used to organize code to describe things and what they can do.
 
  Before OOPs we have Procedural Programming where we divide programm in set of funtions.

  In OOP we combine group of related variables and functions into a unit we call that unit an object
  var x  refer variables as ----------> Property
  f() -----------------------> function as method
  -----------------------------------------------------------

  */

// Example of Procedural Programming //

let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

getWage();
console.log(getWage(2300, 11, 20));

//Example of OPPS //

let employee = {
  baseSalary: 3000, //pro
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate); // no parameter
  }
};

employee.getWage(); // this is Encapsulation//

console.log(employee.getWage());

/* 
****OBJECTS******
Class versus object
A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class.

--> Object is a unique entity which contains property and methods.
    Ex: Car :
    Car is a object with property such as make model & color And Method like Start Stop & move

    Real Programming example
    local Storage Object
    this local storage has a property like length which returns number of objects And Method like setItem and removeItem

--> Object Can be created in two ways in javascript 
*/
//Using an Object Literal//
//Defining object//
let person = {
  first_name: 'vinay',
  last_name: 'shukla',

  //method
  getFunction: function () {
    return `The name of the person is ${person.first_name} ${person.last_name}`
  },
  //object within object
  phone_number: {
    mobile: '12345',
    landline: '636363636'
  }
}
console.log(person.getFunction());
// console.log(person.phone_number.mobile);

// ****Using an Object Constructor:***//
//using a constructor --this Key word are used to accessing  current class boject and property
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Using Object.create() method: The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Object.create() example a
// simple object with some properties
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I
		studying?: ${this.isStudying}.`)
  }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();

/*  ****Classes****
Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class.
EX:Lets use ES6 classes then we will look into traditional way of defining Object and simulate them as classes.
*/

// Defining class using es6

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return (`The name of the bike is ${this.name}.`)
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

/*

**********4 Core Concept of OOPs************

1.Encapsulation
2.Abstraction
3.Inheritance
4.Polymorphism 

*/

/*
1.Encapsulation
The process of wrapping property and function within a single unit is known as encapsulation.

In OOP we Group related variable and functions that operate on them into object this is what we call Encapsulation 

The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.

*/

//encapsulation example
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
}

let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();

/*
In the above example we simply create an person Object using the constructor and Initialize it property and use it functions we are not bother about the implementation details. We are working with an Objects interface without considering the implementation details.

Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail.
*/

/* ***Abstraction***
Think of a DVD player as an object this DVD player as complex logic board on the inside and few buttons outside that you interact with you simply click play button and you dont care what happens inside all the complexcity is hidden from you this is the Abstraction in practice.

We can use same technique in object, we can hide some of properties and method from outside and this gives us a couple of benifits
1. Simpler Interface
2. Reduce Impact of change  //  No impact on outside the code
*/

// Abstraction example
function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return (`First name is: ${firstname} Last
			name is: ${lastname}`);
  }

  this.getDetails_access = function () {
    return (`First name is: ${firstname}, Last
			name is: ${lastname}`);
  }
}
let person1 = new person('Mukul', 'Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());

//In the above example we try to access some property(person1.firstname) and functions(person1.getDetails_noaccess) but it returns undefine while their is a method which we can access from the person object(person1.getDetails_access()), by changing the way to define a function we can restrict its scope.

/* Inheritance:
 It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects.

*/

//Inhertiance example
class person {
  constructor(name) {
    this.name = name;
  }
  //method to return the string
  toString() {
    return (`Name of person: ${this.name}`);
  }
}
class student extends person {
  constructor(name, id) {
    //super keyword to for calling above class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return (`${super.toString()},Student ID: ${this.id}`);
  }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());

/* In the above example we define an Person Object with certain property and method and then we inherit the Person Object in the Student Object and use all the property and method of person Object as well define certain property and methods for Student.
Note: The Person and Student object both have same method i.e toString(), this is called as Method Overriding. Method Overriding allows method in a child class to have the same name and method signature as that of a parent class.
In the above code, super keyword is used to refer immediate parent class instance variable.
 */

/* 
***Polymorphism***
Poly - Many
morphism  - form

In OOP Polymorphism is a technique that allows you to get rid of long if and else or switch case statements.

The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.

*/
// JavaScript Polymorphism Example

class A {
  display() {
    console.log("A is invoked");
  }
}
class B extends A {

}
let b = new B();
b.display();

//Here in below example a child and parent class contains the same method. Here, the object of child class invokes both classes method.

class A {
  display() {
    console.log("A is invoked");
  }
}
class B extends A {
  display() {
    console.log("B is invoked");
  }
}

let a = [new A(), new B()]
a.forEach(function (msg) {
  msg.display();
});
























