var person = {
    firstName : "Florencio", 
    lastName : "Pacheco",
    fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	}

};

var calculator = {
    operand01 : -1,
    operand02 : -1,
    add : 0,
    subtract : 0
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

calculator.multiply = function() {
    'use strict';
    return this.operand01 * this.operand02;
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

console.log(calculator.operand01);
console.log(calculator.operand02);
console.log(calculator.multiply());