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



var userMsg = "test two";

const input = document.querySelector('input');
const log = document.getElementById('heart');
console.log(log);

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

function userHeartMsg() {
	document.getElementById('hart').innerHTML = userMsg;
	heart.style.display = "block";	
}
/*
function enterMsg() {
	document.getElementById("enterUserMsg").submit();
	heart.style.display = "block";
} */