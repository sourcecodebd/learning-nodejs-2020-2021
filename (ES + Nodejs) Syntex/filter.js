"use strict"
let a = ['Nafi','Rafi'];
let f1 = a.filter((value)=>{
    return value[0] == 'N';
});

console.log(f1);

"use strict"
let b = ['Nafi','Rafi'];
let f2 = b.filter((value)=> value[2] == 'f');

console.log(f2);
