// const for permanant variables 
const name = 'Max'
let age = 29
let hasHobbies = true

function summarizeUser(username, userAge, userHasHobby){
    return(
        "Name is "+ username+
        " Age is "+ userAge + 
        " user has hobbies " + hasHobbies
    )
}

console.log(summarizeUser(name,age,hasHobbies))