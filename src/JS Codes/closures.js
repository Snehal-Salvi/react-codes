function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Inner function has access to the outerVariable
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from outer function"
