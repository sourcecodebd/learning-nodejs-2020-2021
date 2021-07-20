"use strict"

let ob1 = {
   index1: 0, id1: 1, name1: 'Nafi', dept1: 'CSE', func: function(a){ return a }
};

console.log(ob1.func(10));



"use strict"

let ob2 = {
   index2: 0, id2: 1, name2: 'Nafi', dept2: 'CSE', 

   getName: function(){ return this.name2 },

   getObj: ()=>{
            return {
                     version: 1.1,
                     getVersion: function(){ return this.version }
                  }
               }
};

console.log(ob2['getObj']()['getVersion']());
console.log(ob2.getObj().getVersion());
console.log(ob2.getName());
console.log(ob2.id2);

