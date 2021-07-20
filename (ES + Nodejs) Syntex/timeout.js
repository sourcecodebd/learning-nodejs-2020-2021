"use strict"
let a = setTimeout(function(value){
    console.log('Nafi')
    return value;
},2000);

console.log('Wait for 2 sec...');