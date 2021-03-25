"use strict";

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
//problem 3:
function compressCharacters(){
    let chars = document.getElementById("thingToCompress").value.split("");
    let res = "";
    for(let i = 0; i < chars.length; i++)
    {
        let count = 1;
        let char = chars[i];
        while(i < chars.length - 1 && chars[i] == chars[i + 1])
        {
            count++;
            i++;
        }
        res += char + count;
        
    }
    document.getElementById("compressed").innerHTML = res;
}