"use strict"

let f1 = (a,b) => {
    return new Promise((resolve, reject) =>{

        let s = a+b;
    
        if(s == 100){
            setTimeout(() => {
                resolve('Success')
            }, 3000)
    }
    else{
        reject('Error')
    }

})
}


async function MyTask(){
    console.log('This is another task!')
    let response = await f1(50,50);
    console.log(response);
}

MyTask();