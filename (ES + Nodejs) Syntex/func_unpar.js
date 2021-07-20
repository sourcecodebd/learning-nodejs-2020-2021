let good = function(){

return 10+15;

}

function bad(good){

return good();

}

console.log(`1. hello this is a unparameterized callback function...${bad(good)}`);


//


function freefire(){
    
    }
    
    function pubg(freefire){

        return freefire();

    }
    
    console.log(`2. hello this is a unparameterized callback function...${pubg(function freefire(){

        return 30+40;

    })}`);


//


a = function a(){

    }
    
    function b(a){

        return a();

    }
    
    console.log(`3. hello this is a unparameterized callback function...${b(function a(){

        return 50+60;
        
    })}`);


