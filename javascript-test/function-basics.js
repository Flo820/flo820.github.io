function simpleFunction() {
    console.log("functions should consist of statements designed to perform a single task");
}

function functionParameter(value) {
console.log(value);
}
function functionReturn(addResult) {
    return "The add function returned: " + addResult;
}
function add(a,b){
    return a + b;
}

simpleFunction();

functionParameter("Your function takes parameters");

const addResult = add(2, 3);

const returnValue = functionReturn(addResult);
console.log(returnValue);
