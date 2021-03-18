function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true,
        },
        002: {
            artist: "John Williams",
            title: "Duel of the Fates",
            release_year: 1999,
            formats: {
                1: "Digital",
                2: "Cassete",
                3: "CD"
            },
            gold: true,
        },
    };
    return myMusic;
}
console.log (myFunction());

myFunction()[2];
module.exports = myFunction;