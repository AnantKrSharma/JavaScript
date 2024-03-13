class Animal{
    constructor(name, legs){
        this.name = name;
        this.legs = legs;
    }

    identity(){
        console.log(dog);
        console.log(typeof(dog));
    }

    static myType(){
        console.log("Animal, bro..");
    }
}

let dog = new Animal('pablo', 4); // Object of Animal class.
dog.identity();
Animal.myType();
