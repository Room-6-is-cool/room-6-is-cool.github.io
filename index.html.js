document.body.style.width = window.innerWidth;
if (!(document.title == "Room 6 is cool!")) {
	document.title = "Room 6 is cool!";
	var warningDiv = document.createElement("div"); 
	var warningP = document.createElement("p");
	var warningC = document.createTextNode("Orion has probably tampered with this page.");
	warningP.appendChild(warningC);
	warningDiv.appendChild(warningP);
	document.getElementById("mainContent").appendChild(warningDiv);
}
