/* "use strict"

let f3;

let f1 = (a,b)=> {f3 = a+b;
    console.log(f3)
}

let f2 = (v) => v(5,10)

f2(f1); */



"use strict"

let f3;


let f2 = ((a,b)=> {f3 = a+b;
    console.log(f3)
}) (5,10)



/* "use strict"

let f1 = (a,b,f3)=> { let s = a+b;
    f3(s)
}

let f4 = (r)=> console.log(r)

let f2 = (v) => v(5,10,f4)

f2(f1); */




"use strict"
let m = (a,b,callback)=> {

    setTimeout(function(){
        let sum = a+b;
        console.log('After 3 second...');
        return callback(sum)  
    }, 3000);

}

let r = (result)=> {
    console.log('Result = '+result)
}


let n = (val) => val(5,10,r)

n(m);

console.log('Wait for 3 second...');


/* "use strict"
let m = (a,b,callback)=> {

    setTimeout(function(){
        let sum = a+b;
        console.log('After 3 second...');
        return callback(sum)  
    }, 3000);

}


let n = (val) => val(5,10, (result)=> {
    console.log('Result = '+result)
})

n(m);

console.log('Wait for 3 second...'); */

