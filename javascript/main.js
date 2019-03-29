/*Api's*/
function weather() {
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		console.log(response);
		var temp = parseFloat(response.main.temp-273.15).toFixed(1);
		document.getElementById('weather').innerHTML = 'It&#39;s ' + temp + ' degrees outside in ' + response.name; 
	});
}

function bored() {
	var request = 'https://www.boredapi.com/api/activity/';
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		console.log(response);			/*Deze moeten er nog uit */
		document.getElementById('activiteit').innerHTML = response.activity;
	});
}

/*Klok*/
function startTijd() {
	var vandaag = new Date();
	var uur 	= vandaag.getHours();
	var minuut 	= vandaag.getMinutes();
	var seconde = vandaag.getSeconds();
	minuut 		= checkTijd(minuut);
	seconde 	= checkTijd(seconde);
	document.getElementById('klok').innerHTML = uur + ":" + minuut + ":" + seconde;
	var t = setTimeout(startTijd, 1000);
}
function checkTijd(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

/* Laat een bericht zien op basis van tijd*/
var vandaag = new Date();
if (vandaag.getHours() > 6 && vandaag.getHours() < 12){
	document.getElementById('message').innerHTML = 'Goodmorning Crew!';
}
else if (vandaag.getHours() > 12 && vandaag.getHours() < 18) {
	document.getElementById('message').innerHTML = 'Good Afternoon Crew!';
}
else if (vandaag.getHours() > 18 && vandaag.getHours() < 1){
	document.getElementById('message').innerHTML = 'Good Evening Crew!';
}
else{
	document.getElementById('message').innerHTML = 'Why aren&#39;t you sleeping Captain?';
}

startTijd();
weather();
bored();