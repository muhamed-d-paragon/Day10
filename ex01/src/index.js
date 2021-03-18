var myPet = {
    species: "dog",
    name: "Garfield",
    legs: 4,
    friends: ["Mile", "Joksim"]
    }

function myFunction(myObj) {
    return myObj;
}


console.log(myFunction(myPet));
module.exports = {myPet, myFunction };