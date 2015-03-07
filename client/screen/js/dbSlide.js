function getSweMonth(n) {
	var monthArray = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];
	var month = monthArray[n];
	return month;
}

function makeHTML(jsonList) {
	var obj;
	//var list = jsonList;
	console.log("jaha");
	var list = JSON.parse(jsonList);
	console.log(list);
	for (obj in list) {
		console.log("inne i loop");
		console.log(list[obj]);
		var h;
		list[obj] = JSON.parse(list[obj]); //parsar igen.. hej hej


	
		if (list[obj].type == "food") {
			h = "<div class='slides'><div class='row'><div class='col-md-12'>" +
				"<u><h1>Matsedel</h1></u></div></div><div class='content'><div class='row'>" +
				"<div class='col-md-1'></div><div class='col-md-5'><h3 class='bold'> Lunch: </h3>" +
				"<h3 class='lessMargin'> " + list[obj].text1 + " </h3><div class='col-md-1'></div>" +
				"<h3 class='bold'> Middag: </h3><h3 class='lessMargin'> " + list[obj].text2 + " </h3></div>" +
				"<div class='col-md-5'><img class='medium-img' src='img/" + list[obj].imgURL + "'/></div>" +
				"<div class='col-md-1'></div></div></div></div>";
		} 
		else if (list[obj].type == "activity") {
		    h = "<div class='slides'><div class='row'><div ='col-md-12'>" +
				"<u><h1>Aktivitet</h1></u></div></div><div class='content'><div class='row'>" +
		        "<div class='col-md-1'></div>" +
				"<div class='col-md-6'><h3 class='small'> Kl " + list[obj].text1 + ":</h3>" +
			    "<h3 class='bold'>" + list[obj].text2 + "</h3></div>" +
			    "<div class='col-md-4'><img class='medium-img lessMargin' src='img/" + list[obj].imgURL + "'/></div></div></div></div></div>" +
			    "</div>";
		}
		else if (list[obj].type == "bday") {
			var d = new Date();
			var month = getSweMonth(d.getMonth());
		    h = "<div class='slides'><div class='row'><div ='col-md-12'><u><h1> Den "+ d.getDate() +" "+ month +" "+ d.getFullYear() +" </h1></u></div></div>" +
		        "<div class='content'><div class='row'><div class='col-md-1'></div>" +
				"<div class='col-md-6'><h3> Grattis " + list[obj].text1 + " på födelsedagen!</h3></div>" +
			    "<div class='col-md-4'><img class='medium-img lessMargin' src='img/" + list[obj].imgURL + "'/></div>"+
		        "<div class='col-md-1'></div></div></div></div>";
		}
		else if (list[obj].type == "contact") {
			var a = list[obj].text1;
			console.log(a);
			getName(a);
			var g="";
			
			for (var o in rArray){
				var obj = rArray[o];
				var na = obj.name;
				var nu = obj.number;
				g = g +  "<div class='content'><div class='row'><div class='col-md-2'></div><div class='col-md-4'>"+
							"<h3 class='bold lessMargin'>" + na + "</h3></div><div class='col-md-1'></div>"+
							"<div class='col-md-4'><h3 class='lessMargin'>" + nu + 
							"</h3></div><div class='col-md-1'></div></div></div>";
			}
			
		    h = "<div class='slides'><div class='row'><div class='col-md-12'>" +
				"<u><h1>Kontaktuppgifter</h1></u></div></div>"+ g +"</div>";	
		}
		else {
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
				/*console.log(xmlhttp.responseText);
				var jsonList = [{
					"id": "1",
					"type": "food",
					"imgURL": "matikon.png",
					"text1": "mumsgott",
					"text2": "testis"
				}]; */
				//console.log(jsonList.length);
				var jsonList = xmlhttp.responseText;
				makeHTML(jsonList);
				console.log("db success");
			}
		}
		xmlhttp.open("GET", "getSlides.php?q=2015-01-04", true);
		//xmlhttp.open("GET", "getSlides.php?q=" + str, true);
		xmlhttp.send();
	}
}

function getName(a) {
	
	var res = a.split("/");
	console.log(res);
	  
	var rObj;
	rArray = [];
	
	for (var r in res){
	console.log("r:" + res[r]);
	rObj = JSON.parse(res[r]);
	console.log(typeof(res[r]));
	rArray.push(rObj);
	//console.log(rArray);
	}
	
	return rArray;
	
}

function getDates() {
	var date = "2015-01-20";
	getSlides(date);
}



$(document).ready(function() {
	getSlides("hej");
	//getDates();
});