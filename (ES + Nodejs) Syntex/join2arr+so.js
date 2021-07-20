"use strict"
let a = ['Nafi','Rafi'];
let b = ['Rahim','Karim'];

let s = [...a, ' & ' ,...b]

console.log(s); //Ans: array


"use strict"
let c = ['Abdur','Sabur'];
let d = ['Tarek','Barek'];

let t = [...c, ' & ' ,...d]

let o = c.join(', ');
let p = d.join(', ');
let q = o+ ' & ' +p;

/* let q = c+ ' & ' +d; */

console.log(q);  //Ans: string
