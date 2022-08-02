// const for permanant variables
const name = "Max";
let age = 29;
let hasHobbies = true;

// function summarizeUser(username, userAge, userHasHobby){
//     return(
//         "Name is "+ username+
//         " Age is "+ userAge +
//         " user has hobbies " + hasHobbies
//     )
// }

// creating an arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name : " + userName + " Age : " + userAge + " Has Hobby : " + userHasHobby
  );
};

const addition = (a, b) => a + b;
const substraction = () => 100 - 34;

console.log(summarizeUser(name, age, hasHobbies));
console.log(addition(45, 3));
console.log(substraction());

// creating objects
const person = {
  name: "Hashan",
  age: 23,
  greet() {
    console.log("Hi this is my name : ", this.name);
  },
};

person.greet();

// creating arrays
const hobbies = ["swimming", "dancing"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map(hobby => "Hobby is " + hobby));

console.log(hobbies)

// spread operator 
const copiedArray = [...hobbies]
console.log(copiedArray)

const toArray = (...args) =>{
    return args
}

console.log(toArray(1,2,3,4,5,6,7,8))