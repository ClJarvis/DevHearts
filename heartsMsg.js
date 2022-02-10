var quotes = [
	"Will you be my variable? ",
	"Be the Fizz to my buzz! ",
	"This ♥",
	"stickers! ",
	"We go together like <br> Foo and Bar ",
	"I will always read the docs.",
	"Foounderful.",
	"You had me at hello world",
	"I git commit myself to you",
	"if ( (you + date) < 2) {  </br>   call (me) <br> } ",
	"You\”: \“My heart\" ",
	"I will always write tests",
	"git commit -m \":heart:\" ",
	"This.heart = \“yours\” "

]
/* add short code tips? 
add own msg */


function sweetHeartMsg() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('heart').innerHTML = quotes[randomNumber];
	heart.style.display = "block";	
}