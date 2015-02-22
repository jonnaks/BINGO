function makeHTML(jsonList) {
	var obj;
	var list = jsonList;
	for (obj in list) {
		console.log("inne i loop");
		console.log(list[obj]);
		var h;
		if (list[obj].type == "food") {
			h = "<div class='slides'><div class='row'><div class='col-md-12'>" +
				"<u><h1>Matsedel</h1></u></div></div><div class='content'><div class='row'>" +
				"<div class='col-md-1'></div><div class='col-md-5'><h3 class='bold'> Lunch: </h3>" +
				"<h3 class='lessMargin'> " + list[obj].text1 + " </h3><div class='col-md-1'></div>" +
				"<h3 class='bold'> Middag: </h3><h3 class='lessMargin'> " + list[obj].text2 + " </h3></div>" +
				"<div class='col-md-5'><img class='medium-img' src='img/" + list[obj].imgURL + "'/></div>" +
				"<div class='col-md-1'></div></div></div></div>";
		} else {
			console.log("annan typ än food");
		}
		$("#slideshow").append(h);
	}
}

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
				var jsonList = [{
					"id": "1",
					"type": "food",
					"imgURL": "matikon.png",
					"text1": "mumsgott",
					"text2": "testis"
				}];
				console.log(jsonList.length);
				makeHTML(jsonList);
			}
		}
		xmlhttp.open("GET", "getSlides.php?q=" + str, true);
		xmlhttp.send();
	}
}

function getDates() {
	var date = "2015-01-04";
	getSlides(date);
}



$(document).ready(function() {
	getSlides("hej");
	//getDates();
});