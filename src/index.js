// 1
function pickPropArray (mass,prop){
    const newmas =[];
    for(let i=0; i< mass.length;i++)
    {
        const obj = mass[i];
        if (obj.key === prop) newmas.push(obj.value)
    }
    return newmas;
}
// 2
function createCounter() {
    let count =0;
    return function () {
        ++count;
    }
}
// 3
const spinWords = (str) => {
    return str
        .split('')
        .map(el=> (el === ' ') ? el : '')
        .join('')
        .split(' ')
        .map(el => (el.length >= 5) ? el.split('').reverse().join('') : el)
        .join(' ')
}
