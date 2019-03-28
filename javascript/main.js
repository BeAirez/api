function getAPIdata() {
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		console.log(response);
		var temp = parseFloat(response.main.temp-273.15).toFixed(2);
		document.getElementById('weather').innerHTML = 'It&#39;s ' + temp + ' degrees outside with ' + response.weather[0].main + ' in ' + response.name; 
	});
}
getAPIdata();

function getAPIdata2() {
	var request = 'https://www.boredapi.com/api/activity/';
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		console.log(response);
		document.getElementById('todo').innerHTML = response.activity;
	});
}
getAPIdata2();


function startTijd() {
	var vandaag = new Date();
	var uur 	= vandaag.getHours();
	var minuut 	= vandaag.getMinutes();
	var seconde = vandaag.getSeconds();
	minuut 		= checkTijd(minuut);
	seconde 	= checkTijd(seconde);
	document.getElementById('txt').innerHTML = uur + ":" + minuut + ":" + seconde;
	var t = setTimeout(startTijd, 1000);
}
function checkTijd(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

startTijd()

var vandaag = new Date();
if (vandaag.getHours() > 6 && vandaag.getHours() < 12){
	document.getElementById('message').innerHTML = 'Goodmorning Captain!';
}
else if (vandaag.getHours() > 12 && vandaag.getHours() < 18) {
	document.getElementById('message').innerHTML = 'Good Afternoon Captain!';
}
else if (vandaag.getHours() > 18 && vandaag.getHours() < 1){
	document.getElementById('message').innerHTML = 'Good Evening Captain!';
}
else{
	document.getElementById('message').innerHTML = 'Why aren&#39;t you sleeping Captain?';
}