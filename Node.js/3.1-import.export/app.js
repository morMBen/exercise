async function myFunc() {
    const fs = await import('./exported.js');
    const { myFunc } = fs.default
    const { myFunc2 } = fs.default
    const { myFunc3 } = fs.default
    const { myFunc4 } = fs.default
    console.log(myFunc())
    console.log(myFunc2())
    console.log(myFunc3())
    console.log(myFunc4())
}

myFunc()
