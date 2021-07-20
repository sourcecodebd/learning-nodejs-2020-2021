"use strict"
let a1 = ['1','2','3','4','5'];
let r1 = a1.reduce(function(total1, std1){
total1 = total1 + std1;
return total1;
});

console.log(r1); //Ans: string



"use strict"
let a2 = [1,2,3,4,5];
let r2 = a2.reduce(function(total2, std2){
total2 = total2 + std2;
return total2;
});

console.log(r2); //Ans: integer



"use strict"
let o = [
   {index: 0, id: 1, name: 'Nafi', dept: 'CSE'},
   {index: 0, id: 2, name: 'Rafi', dept: 'CSE'},
   {index: 0, id: 3, name: 'Rahim', dept: 'EEE'},
   {index: 0, id: 4, name: 'Karim', dept: 'EEE'},
   {index: 0, id: 5, name: 'Tarek', dept: 'BBA'},
   {index: 0, id: 6, name: 'Barek', dept: 'BBA'}
];

let r3 = o.reduce(function(total3, std3){
console.log(total3); //Ans: object
total3.index++;
total3.id += std3.id;
total3.name += ', ' + std3.name;
total3.dept += ', ' + std3.dept;
return total3;
});

console.log(r3); //Ans: object

