console.log("script.js loaded");
console.log("script.js loaded");
//in index.handlebars, we have two types of user submission
//1. user adds new burger
//2. user consumes an existing burger
//for each of these, we need a click listener and handler function

//#1 (add new burger)
document.querySelector("button").addEventListener("click", addBurger);
function addBurger(){
	//get burger name from input
  	let input = document.querySelector("input");
  	let burgerName = input.value;
  	input.value = ""; //reset input to blank
  	//send fetch to server by POST
  	fetch("/api/addburger", {
    	method: "POST",
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
      	body: JSON.stringify({name: burgerName})
    }).then(res => res.json()).then(gotBurger);
}
function gotBurger(data){
	//data comes from the server response
  	console.log(data);
}
