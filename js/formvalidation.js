function validateForm() {
    var x = document.forms["dummyForm"]["zip"].value; //form value always has a type of "string"

    //Since "Zip" is an optional field, empty entry is allowed
    if(x.length == 0 || (isNaN(x) !== true && x.length === 5)) {
    	return true;
    } else {
    	alert("Zip code must be a five-digit number!");
    	return false;
    }
}