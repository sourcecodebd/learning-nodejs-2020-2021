"use strict"

class Student1{
    constructor(name, id, section){
        this.username = name;
        this.id = id;
        this.section = section
    }

    getSection(){
        return this.section;
    }
}

const std1 = new Student1('Nafi',12) //Here in the parameter section has no value given so result will be undefined
console.log(std1.getSection())


"use strict"

class Student2{
    constructor(name, id, section = 'null'){ //Here in the parameter section has no value given but section has default value set
        this.username = name;
        this.id = id;
        this.section = section
    }

    getSection(){
        return this.section;
    }
}

const std2 = new Student2('Nafi',12)  //so no error will be shown
console.log(std2.getSection())