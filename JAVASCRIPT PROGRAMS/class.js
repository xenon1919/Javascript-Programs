class Car {

    //constructor
    constructor() {
        console.log("creating new object")
    }

    
    start() {
        console.log('start');
    }

    stop() {
        console.log('stop');
    }
    setBrand(brand) {
        this.brand = brand;
    }
}
let fortuner=new Car()
fortuner.setBrand=("fortuner")
let lexus = new Car()
lexus.setBrand=("lexus")