document.body.style.width = window.innerWidth;
if (!(document.title == "Room 6 is cool!"/* && document.getElementById("headerText").innerHtml == "Room 6 is Cool"*/)) {
	document.title = "Room 6 is cool!";
	var warningDiv = document.createElement("div"); 
	var warningP = document.createElement("p");
	var warningC = document.createTextNode("Orion has probably tampered with this page.");
	warningP.appendChild(warningC);
	warningDiv.appendChild(warningP);
	document.getElementById("mainContent").insertBefore(warningDiv, document.getElementById("kettle3d"));
}

// Get mainContent
var mainContent = document.getElementById("mainContent");

// Make the header
var header = document.createElement("h2");
var htn = document.createTextNode("Here's a really good GIF:");
header.appendChild(htn);

// Make the doge GIF
var doge = document.createElement("img");
doge.src = "https://lh3.googleusercontent.com/-HChSxzMu7uE/XxeV2WJUmxI/AAAAAAAABhE/SWKt_vXboi8SAhfCJ1OY5P6CMlTo05ttACK8BGAsYHg/s0/2020-07-21.gif";

// Add these elements to mainContent
mainContent.appendChild(header);
mainContent.appendChild(doge);
