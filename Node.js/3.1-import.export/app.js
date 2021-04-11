async function myFunc() {
    const fs = await import('./exported.js');
    console.log(fs.default())


}

myFunc()
