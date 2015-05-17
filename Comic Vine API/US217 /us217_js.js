// Submit form with id function.
function submit_by_id() {
    var response = getCharacterDataFromComicVineAPI("deadpool");
    console.log(response);
    //console.log("this is a test --> " + getCharacterDataFromComicVineAPI("deadpool"));
}

function get_API_KEY(){
	return "4c7c9cb23677feec2ef4430bf887246a3059c4e1";
}

function get_API_KEY_arg() {
	return "api_key=" + get_API_KEY();
}

function createComicVineRequestURL(characterName) {
	return "http://www.comicvine.com/api/characters/?" + get_API_KEY_arg() + "&filter=name:" + characterName + "&format=json&limit=1";
}

function getCharacterDataFromComicVineAPI(characterName) {
    //Initialize a new XMLHttpRequest object.
    var conn = new XMLHttpRequest();
    //Setup the request.
    conn.open("GET", createComicVineRequestURL(characterName), true);
    conn.setRequestHeader("Access-Control-Allow-Origin", "http://localhost");
    //Send the request.
    conn.send();
    //Return the response.
    return conn.responseText;
}