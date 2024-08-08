// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["I love Conan Gray", "I am so funny", "I used to play soccer"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[2] = "I wanna get out of AP Bio"

// console log the last element to check that it's changed
console.log(truths[truths.length - 1])
console.log(truths)
// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["John is nice", "John is smart", "I am dumb"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.unshift("I am so rich")
console.log(lies)
// SPICY
// pick the truths or lies array and console log the 1st element
console.log(truths[0])

// prompt the user to guess if it was true or false
let guess = promt("Do you think that was true or false?")
// stretch: how could you check they are right or wrong?


