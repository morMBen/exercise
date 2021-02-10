
//1) if/else conditional expression.
const passwordValidation1 = (password) => {
    if (password.length > 7) {
        return 'Strong'
    }
    return 'Weak';
}

//2) ternary conditional expression.
const passwordValidation2 = (password) => password.length > 7 ? 'Strong' : 'Weak';

//3 - pini - good one
const passwordValidation3 = (password) => password.length > 7 && 'strong' || 'Week';


//4)
const advancedPasswordValidation = (password) => password.length > 7 ? password.search(/[A-Z]/) != -1 ? 'Very strong' : 'Strong' : 'Weak';
// [/A-Z/].test(word)


//test
console.log(advancedPasswordValidation('qawsedrftgYh'));
console.log(advancedPasswordValidation('qawsedrftgyh'));
console.log(advancedPasswordValidation('qawsed'));
console.log(passwordValidation3('dzbfvfbfd'));
