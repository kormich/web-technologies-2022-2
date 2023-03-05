// 1
function pickPropArray (mass,prop){
    var newmas =[];
    for(let i=0; i< mass.length;i++)
    {
        var obj = mass[i];
        // if (obj.name.type === prop) newmas.push(obj.name)
        if(obj[prop]!== undefined) {newmas.push(obj[prop])}
    }
    return newmas;
}
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

var result = pickPropArray(students, 'name')

console.log(result)

// 2
function createCounter() {
    let count =0;
    return function () {
        console.log(++count);
    }
}
const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

// 3
function spinWords  (str) {
    return str
        .split(' ')
        .map(el => (el.length >= 5) ? el.split('').reverse().join('') : el)
        .join(' ')
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

// 4 (написал для поиска нескольких вариантов)
function findTargetIndexes (nums, target) {
    const mas = [];
    for (let i = 0; i < nums.length; i++) {
        for(let j=i+1; j<nums.length; j++){
            if (nums[i]+nums[j]===target) mas.push([i,j])
        }
    }
    return mas;
}
console.log(findTargetIndexes([2,7,11,15,1,8],9))

//5
function findPrefix(array) {
    let prefix = array[0].slice(-1)
    let prefixLength = 1
    while(1) {
        for (let i = 0; i < array.length; i++)
            if(!array[i].endsWith(prefix)) return prefix.slice(1).length > 1 ? prefix.slice(1) : ''
        prefixLength++
        prefix = array[0].slice(-prefixLength)
    }
}
console.log(findPrefix(["цветок","поток","хлопок"]))
