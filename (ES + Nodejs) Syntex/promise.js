/* "use strict"
let p = new Promise((resolve, reject)=>{

    let s = 5+10;

    if(s == 50){
        resolve('Success')
    }
    else{
        reject('Error')
    }

});

p.then(msg =>
    console.log(msg))
.catch(error => console.log(error)); */



/* "use strict"

let f1 = (a,b) =>{
return new Promise((resolve, reject)=>{

    let s = a+b;

    if(s == 15){
        resolve('Success')
    }
    else{
        reject('Error')
    }

})
}

f1(20,30).then((msg) => console.log(msg),
               (error) => console.log(error)

); */



/* "use strict"

let f1 = (a,b) =>{
return new Promise((resolve, reject)=>{

    let s = a+b;

    if(s == 15){
    setTimeout(() => {
            resolve('Success')
        }, 3000)
    }
    else{
        reject('Error')
    }

})
}

f1(5,10).then(msg =>
    console.log(msg))
.catch(error => console.log(error)); */



"use strict"

let f1 = (a,b) =>{
return new Promise((resolve, reject)=>{

    let s = a+b;

    if(s == 15){
        setTimeout(() => {
            resolve('Success')
        }, 3000)
        
    }
    else{
        reject('Error')
    }

})
}

f1(5,10).then(msg =>
    console.log(msg))
.catch(error => console.log(error));






