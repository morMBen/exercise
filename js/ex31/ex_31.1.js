
const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};


// async function run() {
//     try {
//         const ids = await getIDs();
//         console.log(ids);
//         const resipe = await getRecipe(ids[2]);
//         console.log(resipe);
//     } catch {
//         console.log('You got a problem my friend')
//     }
// }
// run();
async function run() {
    const ids = await getIDs();
    console.log(ids);
    const resipe = await getRecipe(ids[2]);
    console.log(resipe);
}

run().catch(() => { console.log('You got a problem my friend') });