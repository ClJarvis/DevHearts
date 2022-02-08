var quotes = [
	"\"Will you be my variable?\" ",
	"\"Be the Fizz to my buzz!\" ",
	"\“This ♥\" ",
	"\“look stickers.\" ",
	"\“We go together like Foo and Bar\" ",
	"\"I will always read the docs.\" ",
	"\"Foo underful.\" "

]


function sweetHeartMsg() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('heart').innerHTML = quotes[randomNumber];
	heart.style.display = "block";	
}