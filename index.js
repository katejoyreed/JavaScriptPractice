"use strict";
reverseString();
//problem 1: 
function reverseString() {
    let str = document.getElementById("input").value;
    document.getElementById("result").innerHTML = str.split("").reverse().join("");
    
}
//problem 2:
function capitalizeFirst(){
    let sentence = document.getElementById("sentence").value;
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++)
   
    document.getElementById("product").innerHTML = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}