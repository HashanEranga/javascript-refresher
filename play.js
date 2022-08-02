var name = 'Max'
var age = 29
var hasHobbies = true
function summarizeUser(username, userAge, userHasHobby){
    return(
        "Name is "+ username+
        " Age is "+ userAge + 
        " user has hobbies " + hasHobbies
    )
}

console.log(summarizeUser(name,age,hasHobbies))