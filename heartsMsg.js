var messages = [
	"Will you be my variable? ",
	"Be the Fizz to my buzz! ",
	"This ♥",
	"stickers! ",
	"We go together like <br> Foo and Bar ",
	"I will always read the docs.",
	"Foounderful.",
	"You had me at hello world",
	"I git commit myself to you",
	"if ( (you + date) < 2) {  </br>   call (me) } ",
	"You\”: \“My heart\" ",
	"I will always write tests",
	"git commit -m \":heart:\" ",
	"This.heart = \“yours\” ",
	"01101000 01100101 01100001 <br> 01110010 01110100",
	"I'll be your localhost"

]
/* add short code tips? 
add own msg */


function sweetHeartMsg() {
	var randomNumber = Math.floor(Math.random() * (messages.length));
	document.getElementById('heart').innerHTML = messages[randomNumber];
	heart.style.display = "block";	
}