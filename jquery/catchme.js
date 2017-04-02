var timeUsed = 0;
var objId = null;
var found = false;
$(document).ready(function(){
    $("img").fadeTo(1000, 0.5); //Change the opacity to 50% in 1 second

    $("img").mouseleave(function(){
    	//$("img").unbind("mouseleave");
    	if(objId !== null && objId !== $(this).attr("id")){
    		//alert("not the same obj");
    		return;
    	}
    	//First, unbind(disable all mouseenter event handler to prevent misfire)
    	//$("#img1").data("events")['mouseenter'] = null;
    	//Change the opacity to 100%
    	//$(this).fadeTo("slow", 1);
    	//Randomly move the image to a different location
    	if(found === true){
    		objId = null;
    		found = false;
    	} else {
	    	timeUsed = $.now();
	    	objId = $(this).attr("id");
	    	//alert("objId: " + objId);
	    	randomMove($(this));
	    	$("#result").html("<b>Your time:</b> ");
    	}
    });

    $("img").mouseenter(function(){
    	if(objId !== null && objId !== $(this).attr("id")){
    		return;
    	}

    	if(objId !== null){
    		found = true;
    		timeUsed = $.now() - timeUsed;
    		$("#result").html("<b>Your time:</b> " + timeUsed + "ms");
    		
    	} else {
	    	//First, unbind(disable all mouseenter event handler to prevent misfire)
	    	//$("#img1").data("events")['mouseenter'] = null;
	    	$("img").fadeTo(1, 0.5);
	    	//Change the opacity to 100%
	    	$(this).fadeTo(50, 1);
	    	//Randomly move the image to a different location
	    	//randomMove($(this));
	    	objId = $(this).attr("id");
	    	//alert("objId: " + objId);
    	}
    });
});

function randomMove(objToMove) {
	if(objToMove === undefined)
		alert("You cannot move an object that doesn't exit!");
	//Get the total number of siblings
	var n = objToMove.parent().children().length;

	//If number of objects are less than two there is no need for move
	if(n < 2) return;
	//alert(totalNumOfSiblings);
	//alert("index: " + $("#div1").children().index(objToMove));
	//Get the index for the current object ("0" based)
	var indexOfObj = $("#div1").children().index(objToMove);

	// Create a random number ranging from 0 to n, then move the current object
	// based on the random number. Don't put the object at the same position.
	var nextPos = 0;

	do {
		nextPos = Math.floor(Math.random() * (n + 1));
	} while ((nextPos === indexOfObj) || ((nextPos === n) && nextPos === (indexOfObj + 1))); 

	//alert("index: " + indexOfObj + ", nextPos: " + nextPos);
	var nextSel = nextPos !== n? "#div1>img:nth-child(" + (nextPos + 1) + ")" : "#div1>img:nth-child(" + (nextPos) + ")";

	/* Handle two corner case: 
	   1. If the nextPos is right after the current object, move the current object to be AFTER nextPos
	   2. If the nextPos is "n", move the current object at the end (after "n-1")
	*/
	if(nextPos !== (indexOfObj + 1) && nextPos !== n){
		$(nextSel).before(objToMove);
	} else {
		
		//if(nextPos === n) nextPos--;

		$(nextSel).after(objToMove);
	}

	var outmsg = "";
	//outmsg = objToMove.attr("src");
	for (var i = 1; i <= n; i++) {
		var nth = "#div1>img:nth-child(" + i + ")";
		outmsg+= $(nth).attr("src") + "<br>";

	}
}

		
