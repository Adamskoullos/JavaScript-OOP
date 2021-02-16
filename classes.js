class Vehicle {
  constructor(type, wheels, fuel){
    this.type = type;
    this.wheels = wheels;
    this.fuel = fuel;
  }
  forwards(){
    return 'moving forwards';
  }
  stop(){
    return 'stopped';
  }
}

class Car extends Vehicle{
  constructor(type, wheels, fuel, make, model, price){
  super(type, wheels, fuel);
  this.make = make;
  this.model = model;
  this.price = price;
  } 
  salePrice(){ 
  return this.price * 0.90;
  }
};

let sportsCoupe = new Car('car', 4, 'petrol', 'Toyota', 'Supra', 60000);

console.log(sportsCoupe);
console.log(`Sale price is: ${sportsCoupe.salePrice()}`);
console.log(sportsCoupe.forwards());


