var myClothes = {
    hat: "Fedora",
    shrit: "Nike",
    shoes: "Converse"
}
function myFunction(myObj) {
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shrit;
    var shoesValue = myClothes.shoes;
    return {
        hatValue,
        shirtValue,
        shoesValue
    }
}

console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);