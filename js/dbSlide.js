function getSlides(str) {
	console.log('inne i getSlides');
	if (str == "") {
		//document.getElementById("txtHint").innerHTML = "";
		console.log("tom sträng skickat till funktion");
		return;
	} else {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				console.log(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET", "getSlides.php?q=" + str, true);
		xmlhttp.send();
	}
}

$(document).ready(function() {
	getSlides("hej");
});