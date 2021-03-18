var movie = {
    title: "Titanic",
    song: "My Heart Will Go on",
    genre: "drama"
    };

function myFunction(myObj, checkProp) {
    var Property = checkProp;

    if (Property == "title") {
        return movie.title;
    } else if (Property == "song") {
        return movie.song;
    } else if (Property == "genre") {
        return movie.genre;
    }
    return "Change me!";
}
console.log (myFunction(movie, "title"));
console.log (myFunction(movie, "song"));
console.log (myFunction(movie, "genre"));
console.log (myFunction(movie, "actor"));

module.exports = myFunction;