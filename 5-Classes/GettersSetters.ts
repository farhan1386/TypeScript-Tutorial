class Player {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let player = new Player();
console.log(player.age = 10);