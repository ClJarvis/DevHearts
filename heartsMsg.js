var quotes = [
	"\"Will you be my variable?\" ",
	"\"Be the Fizz to my buzz!\" ",
	"\“This ♥\" ",
	"\“look stickers.\" ",
	"\“We go together like \n Foo and Bar\" ",
	"\"I will always read the docs.\" ",
	"\"Foo underful.\" ",
	"\"You had me at hello world\" ",
	"\"I git commit myself to you\" ",
	"\"if ( (you + date) < 2) { call (me) }\" "

]
/* add short code tips? 
add own msg */


function sweetHeartMsg() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('heart').innerHTML = quotes[randomNumber];
	heart.style.display = "block";	
}