
// Simple implementation, though not the most elegant and concise code.

function showTime(){
	var date = new Date();

	//get hours and format it properly.
	if (date.getHours() > 12){
		var hours = date.getHours()%12;
	}
	if (hours < 10){
		hours = '0' + hours.toString();
	}
	else {
		hours = hours.toString();
	}

	// Get minutes and format properly.
	if (date.getMinutes() < 10){
		var minutes = '0' + date.getMinutes().toString();
	}
	else {
		var minutes = date.getMinutes().toString();
	}

	//get Seconds and format properly.
	if (date.getSeconds() < 10)
		var seconds = '0' + date.getSeconds().toString();
	else
		var seconds = date.getSeconds().toString();

	// display time in div with id 'clock'
	var time =  hours + ':' +  minutes + ':' + seconds;
	var clock = document.getElementById('clock');
	clock.innerHTML = time;	   // for browser functionality 
	clock.textContent = time;  // set both Innerhtml and Textcontent to time
}

window.onload = setInterval(showTime, 500);