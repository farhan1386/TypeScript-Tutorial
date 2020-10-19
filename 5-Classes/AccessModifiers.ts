/*
Access modifiers change the visibility of the properties and methods of
a class. TypeScript provides three access modifiers:

private
protected
public
Note that TypeScript controls the access logically during compilation time,
not at runtime.
*/

/*
The private modifier
The private modifier limits the visibility to the same-class only.
When you add the private modifier to a property or method, you can access
that property or method within the same class. Any attempt to access private
properties or methods outside the class will result in an error at compile
time.
*/

class Person {
    private Id:number;
    constructor(id:number){
        this.Id=id;
    }
}

const per=new Person(100);
// console.log(person.Id) compile error

/*
The public modifier
The public modifier allows class properties and methods to be accessible
from all locations. If you don’t specify any access modifier for properties
and methods, they will take the public modifier by default.
*/

/*
class Person {
    public Id:number;
    constructor(id:number){
        this.Id=id;
    }
}

const per=new Person(100);*/


/*
The protected modifier
The protected modifier allows properties and methods of a class to be
accessible within same class and within subclasses.
*/

/*
class Person {
    protected Id:number;
    constructor(id:number){
        this.Id=id;
    }
}

const car=new Car(100);
console.log(person.Id) compile error*/