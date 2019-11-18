var simpleObject = {
    sayName : function () {
        console.log("Simple Object");
    }
}

simpleObject.sayName();

simpleObject.dynamicObject = function () {
    console.log("Dynamic Object");
}

simpleObject.dynamicObject();

function FuntionObject () {
    FuntionObject.prototype.sayName = function() {
        console.log("Function Object");
    }
}
const functionObject = new FunctionObject();

class CustomClass {
    sayName() {
        console.log("Custom Class");
    }
}

const customClass = new customClass();