'use strict'

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} and marrid to ${partnerName} with ${numberOfChildren} children`;
}
console.log(tellFortune('programer', 'Israel', 'Noa', 3));