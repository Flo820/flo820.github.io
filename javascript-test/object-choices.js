window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');

    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        sayName: function () {
            const fullName = this.firstName + "" + this.lastName;
            console.log(fullName);
            simpleObjectDisplay.textContent = fullName;
        }
    };
    simpleObjectFunction.onclick = function () {
        simpleObject.sayName();
    };

    /**var simple object gave an error(defined variable)
    currently gives an erorr of Assignment to constant variable.
    simpleObject = {


        sayName: function () {
            console.log("Simple Object");
        }
    }
    */

    simpleObject.sayName();

    simpleObject.dynamicObject = function () {
        console.log("Dynamic Object");
    };

    simpleObject.dynamicObject();

    function FuntionObject() {
        FuntionObject.prototype.sayName = function () {
            console.log("Function Object");
        }
    };
    const functionObject = new FunctionObject();

    class CustomClass {
        sayName() {
            console.log("Custom Class");
        }
    };

    const customClass = new customClass();
};
