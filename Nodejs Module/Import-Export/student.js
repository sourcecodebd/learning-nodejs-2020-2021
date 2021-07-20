export default class Student{
	constructor(name, id, email){
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName(){
		return this.name;
	}
	getId(){
		return this.id;
	}
	getEmail(){
		return this.email;
	}
	setName(name){
		this.name = name;
	}
	print(){
		return `Your Name:  ${this.name}, 
		Your Id:  ${this.id}, 
		Your Email:  ${this.email}`
	}
}


export const student = {
	id: 123,
	name: 'Nafi',
	email: 'nafi@gmail.com',
	getName: ()=>{
		return this.name;
	}
}


export function getStudent(){
	return {
		id: 123,
		name: 'Rafi',
		email: 'rafi@gmail.com',
		getName: ()=>{
			return this.name;
		}
	}
}