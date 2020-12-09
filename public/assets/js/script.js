console.log("script.js loaded");
//in index.handlebars, we have two types of user submission
//1. user adds new burger
//2. user consumes an existing burger
//3. page loads/state change get all burgers
//for each of these, we need a click listener and handler function

//#1 (add new burger)
document.querySelector("button").addEventListener("click", addBurger);
function addBurger() {
  //get burger name from input
  let input = document.querySelector("input");
  let burgerName = input.value;
  input.value = ""; //reset input to blank
  //send fetch to server by POST
  fetch("/api/addburger", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: burgerName }),
  })
    .then((res) => res.json())
    .then(showBurgers);
}

//#2 (consume burger)
function consumeBurger(e) {
  let id = e.currentTarget.getAttribute("data-id");
  fetch(`/api/consumeburger/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then(showBurgers);
}

//#3 (get all burgers)
function showBurgers(data) {
  console.log(data);
  let ol = ""; //unconsumed burgers
  let ul = ""; //consumed burgers
  for (let burger of data) {
    if (burger.isConsumed) {
      ul += `<li>${burger.id} - ${burger.name}</li>`;
    } else {
      ol += `<li>${burger.id} - ${burger.name} <button data-id="${burger.id}">Consume</button></li>`;
    }
  }
  document.querySelector("ol").innerHTML = ol;
  document.querySelector("ul").innerHTML = ul;
  if (ol) {
    for (let button of document.querySelectorAll("ol button")) {
      button.addEventListener("click", consumeBurger);
    }
  }
}
