let carsInReverse = ['ford', 'alfa romeo', 'pagani', 'bmw'];

// 1 for loop carsInReverse

for (var i = 0; i < carsInReverse.length; i++){
  console.log(carsInReverse[i]);
}


// 2 for in loop persons
var persons ={
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}


for (var prop in persons){
  console.log(prop);
}
for (var prop in persons){
  if(prop === 'birthDate'){
    console.log(persons[prop]);
  }
}

// 3 while loop
var i = 1;
while (i < 1000){
  i++;
  console.log(i);
}

// 4 do while loop
var j = 1;
do {
  console.log(j);
  j++;
} while(j < 1000);
