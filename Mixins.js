const speedMixin = function(obj){
  obj.forward = function(){
    return 'moving forward';
  },
  obj.stop = function(){
    return 'stopped';
  }
};

const fastCar = {};

speedMixin(fastCar);

console.log(fastCar.forward());

