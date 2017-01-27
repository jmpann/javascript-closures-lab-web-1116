

function bumpCounter(){
  let counter = 0

  function addBump(){
    counter++
  }
  function getBumps(){
    return counter
  }

  return {
    addBump,
    getBumps
  }
}


function createAnimal(animalType) {
  return function (deadlyDevice) {
    return { animalType, deadlyDevice };
  }
}

var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam")
var shark = createAnimal("Shark")
// stores return value of createAnimal function with the parameter animalType = Shark

console.log(shark)
var sharkWithFrickinCannon = shark("Cannon")
//exectures 
console.log(sharkWithFrickinCannon)
