const a = 0.52;
const b = 0.59;
let rate = ((b - a) / a) * 100;
function total(a, b) {
    rate = (0.07 / a)*100;
    rate = (0.1346) * 100;
    return rate;
}

total(a,b);
const myAnswer = total(a,b);
console.log(myAnswer.toFixed(2));