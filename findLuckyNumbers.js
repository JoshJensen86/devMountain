// Write your code below this line.
function findLuckyNumber (n) {
    let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let luckyNumbers = []
    for (let i = 0 ; i < n; i++) {
        let x = Math.floor(Math.random() * possibleNumbers.length);
        luckyNumbers.push(possibleNumbers[x])
        possibleNumbers.splice(x, 1)
    }
    return luckyNumbers
}

let test = findLuckyNumber (8)
console.log(test);
//Math.floor(Math.random()* 11);
class Dog {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    bark(){
        console.log('Arf! I am', this.name, 'the dog!');
    }
}

