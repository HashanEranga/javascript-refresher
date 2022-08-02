// const for permanant variables 
const name = 'Max'
let age = 29
let hasHobbies = true

// function summarizeUser(username, userAge, userHasHobby){
//     return(
//         "Name is "+ username+
//         " Age is "+ userAge + 
//         " user has hobbies " + hasHobbies
//     )
// }

// creating an arrow function
const summarizeUser = (userName, userAge, userHasHobby) =>{
    return (
        'Name : ' + userName +
        ' Age : ' + userAge + 
        ' Has Hobby : ' + userHasHobby
    )
}

const addition = (a,b)=> a+b
const substraction = ()=> 100 -34 

console.log(summarizeUser(name,age,hasHobbies))
console.log(addition(45,3))
console.log(substraction())

// creating objects
const person = {
    name: 'Hashan',
    age : 23,
    greet(){
        console.log("Hi this is my name : ", this.name)
    }
}

person.greet()