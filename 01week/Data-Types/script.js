"use strict"

function getDate() {
  return new Date();
}

function convertToString(num) {
  return num.toString();
}

function convertToNumber(string) {
  return parseInt(string);
}

function dataType(thing) {
  return typeof(thing);
}

function notANumber(stuff) {
  return Number(stuff);
}

function addEmUp(a, b) {
  return Number(a+b);
}

function make2True(a, b) {
  if (a == 5 && b == 7) {
    return Number(a);
  }
}

function makeAtLeast1True(a, b) {
  if (a == 4 || b == 7) {
    return Number(a+b);
  }
}

function make2NotTrue(a, b) {
  if(!(a == 2) && !(b == 8)) {
    return typeof(false);
  }
}

getDate(); //  1
convertToString(213453434);  //  2
convertToNumber("2343234");  //  3
dataType(true); //  4 Boolean
dataType();  //  4 undefined
dataType(5); //  4 Number
dataType("check out my string, bruh");  //  4 string
notANumber("abc"); //  4 NaN
addEmUp(2,3); //  5
make2True(5, 7); //  6
makeAtLeast1True(5, 7); //  7
make2NotTrue(1, 7); //  8
