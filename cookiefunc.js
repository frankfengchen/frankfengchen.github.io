/* Please note that Chrome doesn't support local cookies so do NOT debug your
   cookies related code on Chrome!!!
*/

//Add a new cookie
function setCookie() {
    var d = new Date();
    var exdays = 10; //default expiration period is ten days
    var cname = document.getElementById("cookiename").value;
    var cvalue = document.getElementById("cookievalue").value;

    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    createGreeting(); //update greetings
    displayCookie(); //update all cookies display
}

//Find a cookie with the name "cname"
function getCookie(cname) {
    //If cname value is not specified, then we cannot find the cookie
    if (typeof cname === 'undefined') { return "";}

    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//display all current cookies (cookie expiration date isn't available through document.cookie)
function displayCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    //var ca = decodedCookie.split(';');
    var allcookies = "<b>Current cookies list:</b> <i>";

    allcookies += decodedCookie + "</i>";
    document.getElementById("allcookies").innerHTML = allcookies;
}

//Display a greeting message based on "username" cookie
function createGreeting() {
    var user=getCookie("username");
    var elem = document.getElementById("greeting");

    elem.style.color = "blue";

    if (user != "") {
        elem.innerHTML = "Welcome again " + user + "!";
    } else {
        elem.innerHTML = "Welcome, new user!";
    } 
}

//Erase a cookie
function eraseCookie(cname) { //Do not use ES6 default parameter syntax, IE doesn't support it
    //Get the cookie name from form input if it's not specified
    cname = typeof cname !== 'undefined' ? cname : document.getElementById("cookiename").value;
    
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    createGreeting(); //update greetings
    displayCookie(); //update all cookies display
}

//Erase all cookie
function eraseAllCookie() {
    var decodedCookie = decodeURIComponent(document.cookie); //Get all cookies
    var ca = decodedCookie.split(/[=;]/); //split cookies to an array

    //Get the cookie name from form input if it's not specified
    for (var i = 0; i < ca.length; i+=2) {
        eraseCookie(ca[i]);
    }

    createGreeting(); //update greetings
    displayCookie(); //update all cookies display
}