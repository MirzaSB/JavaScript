//After the "marvel-api" is installed using npm, get the API package from nodejs local library.
var API_Marvel = require('/usr/local/lib/node_modules/marvel-api');

//Initialize all Marvel API variables.
var PUBLIC_API_KEY = "b73d7d9910d668cf94ee0549184cde6c";
var PRIVATE_API_KEY = "341ee6cd0087582f62969c96d20219549c109b91";

//Initialize the Marvel API client using the public and private API keys.
var marvel = API_Marvel.createClient({
    publicKey: PUBLIC_API_KEY,
    privateKey: PRIVATE_API_KEY
});

console.log("----------------------------------------------------------------------------------");
console.log("Retrieving Deadpool's basic character information from the Marvel API....");
//Return the character information from the Marvel API.
marvel.characters.findByName('deadpool')
    .then(function(res) {
        console.log('Official character ID from Marvel:', res.data[0].id);
        console.log('Official character name from Marvel:', res.data[0].name);
        console.log('Official character picture from Marvel:', res.data[0].thumbnail.path + "." + res.data[0].thumbnail.extension);
        //console.log(res.data);
    })
    .fail(console.error)
    .done();

//Return the comics data from the Marvel API.
marvel.characters.findByName('deadpool')
    .then(function(res) {
        return marvel.characters.comics(res.data[0].id);
    })
    .then(function(res) {
        console.log("----------------------------------------------------------------------------------");
        console.log("Retrieving Deadpool comics data from the Marvel API...");
        console.log('Found %s comics of %s total', res.meta.count, res.meta.total);
        console.log(res.data);
    })
    .fail(console.error)
    .done();