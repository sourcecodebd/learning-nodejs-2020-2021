const student = {
	id: 123,
	name: 'Nafi',
	email: 'nafi@gmail.com',
	getName: ()=>{
		return this.name;
	}
}


function getStudent(){
	return {
		id: 123,
		name: 'Rafi',
		email: 'rafi@gmail.com',
		getName: ()=>{
			return this.name;
		}
	}
}

module.exports = getStudent; //function

/* module.exports = student; //object */
