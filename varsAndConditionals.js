/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 20
let anakanAttack = 30

if (anakanAttack > kenobiAttack){
    console.log('Anakin has a better attack than kenobi')
}else if (kenobiAttack > anakanAttack){
    console.log('Kenobi has a better attack than Anakan')
}else {
    console.log ('Anakin and Kenobi have the same attack')
}

let kenobiHealth = 100
let kenobiDefense = 0

if (kenobiHealth > anakanAttack){
    kenobiHealth -= anakanAttack
    console.log ('kenobis health is now ${kenobiHealth}')
}else {
        console.log ('Kenobi was slain')
    }

kenobiDefense += 25

for (let i = 0; i < 5; i++){
let damage = anakanAttack - kenobiDefense
kenobiHealth -= damage
console.log('Kenobis health is now ${kenobiHealth}')
}

while(kenobiHealth > 0){
    let damage = anakanAttack - kenobiDefense
    kenobiHealth -= damage

    if(kenobiHealth > 0) {
        console.log('Kenobis health is now ${kenobiHealth}')
    }else {
        console.log('Kenobi has been slain')
    }
}