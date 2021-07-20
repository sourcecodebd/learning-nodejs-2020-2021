"use strict"

var s = 1;
var m = 1;
var h = 1

let sec = setInterval(function(){
    if(s <60){
    console.log(s);
    s++;
    }
    else
    {
        s = 1;
    }
    return s;
},1000);

let min = setInterval(function(){
    if(m <60){
    console.log(`${m} minute`);
    m++;
    return m;
    }
    else
    {
        m = 1;
    }
},60000);

let hour = setInterval(function(){
    if(h <24){
    console.log(h+' hour');
    h++;
    return h;
    }
    else
    {
        h = 1;
    }
},60000*24);

console.log('Wait for 2 sec...Watch is starting...');