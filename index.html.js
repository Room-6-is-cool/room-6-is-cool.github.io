// Check the params and make the page THICC
const params = new URLSearchParams(window.location.search);
document.body.style.width = window.innerWidth;

// Get mainContent
var mainContent = document.getElementById("mainContent");

if (!params.has('page')) {
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
	
	document.title = "Room 6 is cool!";
}

else {
	if (params.get('page') == 'index') {
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
		
		document.title = "Room 6 is cool!";
	}
	
	if (params.get('page') == 'links') {
		var header = document.createElement("h2");
		var htn = document.createTextNode("Below are some good links:");
		header.appendChild(htn);
		
		var k3dlink = document.createElement('a');
		k3dlink.href = 'https://kettle3d.github.io/';
		var ltn = document.createTextNode("Kettle3D - A great game that we're working on");
		k3dlink.appendChild(ltn);
		
		var s_link = document.createElement('a');
		s_link.href = 'https://github.com/Room-6-is-cool/room-6-is-cool.github.io/tree/master';
		var sltn = document.createTextNode("Source code for this website");
		k3dlink.appendChild(sltn);
		
		mainContent.appendChild(header);
		mainContent.appendChild(k3dlink);
		
		document.title = "Links | Room 6 is cool!";
	}
}
