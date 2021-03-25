"use strict";
reverseString();
//problem 1: 
function reverseString() {
    let str = console.log("What should we reverse?")
    let result = str.split("").reverse().join("");
    console.log(result);
}