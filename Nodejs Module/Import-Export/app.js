import {student, getStudent} from './student.js';
import Student from './student.js';
import * as path from  'path';


const std = new Student('Nafi Mahmud',12,'nafi@aiub.edu'); //Class
console.log('Class: ');
console.log(std.getName(), std.getId(), std.getEmail());
console.log(std.print());

console.log('_______________________________________')


const s1 = getStudent(); //function                   
console.log('Function: ');
console.log(s1.name);
console.log(s1.id);
console.log(s1.email);

console.log('_______________________________________')


console.log('Object: ', student.name, student.email); //object

console.log('_______________________________________')


let c = "C:\Windows\\\System32//\cmd.exe";
console.log(path.dirname(c));
console.log(path.extname(c));
console.log(path.normalize(c));