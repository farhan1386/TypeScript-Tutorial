// let varName = typeA | typeB; // union type

type typeAB=typeA & typeB;

interface BusinessPartner{
    name:string;
    credit:number;
}

interface Identity{
    id:number;
    name:string
}

interface Contact {
    email: string;
    phone: string;
}

type Employee= Identity & Contact;
type Customer=BusinessPartner & Contact;

let e:Employee={
    id: 100,
    name: 'Farhan Ahmed',
    email: 'example@gmail.com',
    phone: '(408)-897-5684'
}

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

console.log(e.id,e.name,e.email,e.phone);
console.log(c.name,c.credit,c.email,c.phone);