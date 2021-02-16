const Car = function(){
  // private data
  let speed = 0;

  // public
  this.speedUp = function(){
    return speed += 1;
  }
  this.slowDown = function(){
    return speed -= 1;
  }
  this.currentSpeed = function(){
    return speed;
  }
};

const GT86 = new Car();
console.log(GT86);
console.log(GT86.speed);
GT86.speedUp();
GT86.speedUp();
console.log(GT86.currentSpeed());






