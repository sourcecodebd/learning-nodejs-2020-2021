"use strict"
let ob1 = {
   index: 0, id: 1, name: 'Nafi', dept: 'CSE'
};

console.log(ob1.name);



"use strict"
let ob2 = {
   index: 0, id: 1, name: 'Rafi', dept: 'EEE'
};

/* let id = ob2.id;
let name = ob2.name;
let dept = ob2.dept; */

let {index,id,name,dept} = ob2;

console.log(name);



"use strict"
let ob3 = {
   index1: 0, id1: 1, name1: 'Tarek', dept1: 'BBA'
};

let {index1, id1 , name1: FullName, dept1} = ob3;

console.log(FullName);

