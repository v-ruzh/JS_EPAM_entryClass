//node 09-try-catch.js

// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

function declarationIssue() {
    try {
    console.log (a) 
    let a = 3
    } catch(err) {
        console.log("let must be declared")
    }
}

function cantDivide() {
    try {
        let f = 1/0
        if (f = 1/0) {
            throw new Error("Cannot be divided by zero.");
    }
    } catch(err) {
        console.log(err.message);
    }
}

declarationIssue();
cantDivide();