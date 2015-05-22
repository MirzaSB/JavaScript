/**
 * User Story: US217
 * Title: Comic Vine API POC
 * Engineer: Mirza S. Baig
 * Completed Date: 05-21-2015
 *
 * Description:
 * The main function that makes the Comic Vine character search after the user hits the submit button. This will
 * return the response in the JSON format.
 */
$(document).ready(function() {
    $("form").submit(function(event) {
        //Suppress the browser behavior so the code controls what request is being made.
        event.preventDefault();
        //Get the character search request URL.
        var requestURL = createComicVineCharacterSearchRequestURL($("#name").val());
        //Make the request using JSONP.
        $.ajax({
            url: requestURL,
            dataType: 'jsonp',
            success: function(result) {
                //If successful, print out the JSON response on the page underneath the "RESPONSE" section.
                $("#response_json").html(getFormattedJSON(result));
            },
            //If unsuccessful, print out the error message.
            error: function(data, data2) {
                console.log("Response Text: " + data.responseText);
                $("#response_json").html(getFormattedJSON(data));
            }
        });
    });
});

/**
 * <p>
 * Returns the complete Comic Vine API request URL for character search.
 *
 * @param characterName - The name of the comic character to look for.
 * @returns {string} - The concatenated request URL to search for the character using the Comic Vine API.
 */
function createComicVineCharacterSearchRequestURL(characterName) {
    return getComicVineDomain() + getComicVineAPIResourcePath("characters") +
        get_API_KEY_arg() + "&filter=name:" + characterName + "&format=jsonp&limit=1&json_callback=?";
}

/**
 * <p>
 * Method that formats a string into pretty-printed JSON.
 *
 * @param jsonText - The JSON string to pass into the method that needs to be pretty printed.
 * @returns {string} - The pretty printed JSON text.
 */
function getFormattedJSON(jsonText) {
    return "<pre>" + JSON.stringify(jsonText, null, 2) + "</pre>";
}

/**
 * <p>
 * Returns the Comic Vine API key.
 *
 * @returns {string} - The API KEY to be used in the Comic Vine request URL.
 */
function get_API_KEY() {
    return "4c7c9cb23677feec2ef4430bf887246a3059c4e1";
}

/**
 * <p>
 * Returns the Comic Vine API key as a URL parameter.
 *
 * @returns {string} - The API KEY to be used in the Comic Vine request URL as an HTML argument.
 */
function get_API_KEY_arg() {
    return "api_key=" + get_API_KEY();
}

/**
 * <p>
 * Returns the Comic Vine API domain.
 *
 * @returns {string} - The Comic Vine API domain.
 */
function getComicVineDomain() {
    return "http://www.comicvine.com/api";
}

/**
 * <p>
 * Returns the resource path of the Comic Vine API request URL.
 *
 * @param resourceName - The name of the resource. Like "characters", "character", "comics", etc.
 * @returns {string} - The resource path to use in the request URL.
 */
function getComicVineAPIResourcePath(resourceName) {
    return "/" + resourceName + "/?";
}