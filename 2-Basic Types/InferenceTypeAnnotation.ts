/*
Type inference describes where and how TypeScript infers types when you don’t explicitly
annotate them.
*/

interface IEmployee { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 

 let permanenteEmployee:IEmployee={
     firstName:'Farhan',
     lastName:'Ahmed',
     sayHi: ():string =>{return "Hi there"} 
 }

 let contractEmployee:IEmployee={
    firstName:'Fayaz',
    lastName:'Ahmed',
    sayHi: ():string =>{return "Hi there"} 
 }

console.log(permanenteEmployee.firstName) 
console.log(permanenteEmployee.lastName) 
console.log(permanenteEmployee.sayHi()) 

console.log(contractEmployee.firstName) 
console.log(contractEmployee.lastName) 
console.log(contractEmployee.sayHi()) 