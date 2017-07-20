let cars = ['ford', 'alfa romeo', 'pagani', 'bmw'];

// 01 length
console.log(cars.length);

// 02 concat
let moreCars = ['cheverolet', 'suburu', 'nissan', 'honda'];
let totalCars = cars.concat(moreCars);

// 03 indexOf and lastIndexOf
console.log(totalCars.indexOf('honda'));
console.log(totalCars.lastIndexOf('ford'));

// 04 join
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// 05 split
totalCars = stringOfCars.split(',');
console.log(totalCars);

// 06 reverse
carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// 07 indexOf
carsInReverse.sort();
alert(carsInReverse.indexOf('alfa romeo'));
console.log(carsInReverse);

// 08 slice
let removedCars = carsInReverse.slice(carsInReverse.indexOf('ford'),  (carsInReverse.indexOf('honda'))+1);
console.log(removedCars);

// 09 splice
carsInReverse.splice(1, 2, 'ford', 'honda');
console.log(carsInReverse);

// 10 push
carsInReverse.push('bmw', 'cheverolet');
console.log(carsInReverse);

// 11 pop
console.log(carsInReverse.pop());

// 12 shift
console.log(carsInReverse.shift());

// 13 unshift
carsInReverse.unshift('mclaren');

// 14 forEach
let numbers = [23, 45, 0, 2];
numbers.forEach(function(number){
  console.log(number+2);
});
