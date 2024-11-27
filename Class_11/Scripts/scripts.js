//https://www.javascripttutorial.net/javascript-bom/
/*
var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

const inner_width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log(
  window.innerWidth,
  document.documentElement.clientWidth,
  document.body.clientWidth
);
console.log("Pārlūka loga iekšējās daļas platums- " + inner_width);

const inner_height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log(
  window.innerHeight,
  document.documentElement.clientHeight,
  document.body.clientHeight
);
console.log("Pārlūka loga iekšējās daļas augstums- " + inner_height);

const outer_width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

console.log("Pārlūka loga ārējās daļas platums- " + outer_width);

const outer_height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log("Pārlūka loga iekšējās daļas augstums- " + outer_height);
*/
//let url = 'http://127.0.0.1:5500/Project/index.html';
//let jsWindow = window.open(url,'Project');

// drošības pēc lokālu failu aplūkošana ir bloķēta

/*
let jsWindow = window.open(
  "http://127.0.0.1:5500/Project/index.html",
  "Project",
  "height=600,width=800"
);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);
}, 3000);

setTimeout(() => {
    jsWindow.moveBy(20,-50);
}, 4000);

setTimeout(() => {
    jsWindow.close();
}, 10000);

window.focus();
*/

//https://www.javascripttutorial.net/javascript-bom/javascript-alert/
//alert("Cienījamais lietotāj, tulīt mēs tevi infomēsim par...");

//https://www.javascripttutorial.net/javascript-bom/javascript-confirm/
//let result = window.confirm("Jā vai Nē?");
//let message = result ? 'Jūs nospiedāt OK pogu' : 'Jūs nospiedāt Cancel pogu';

//alert(message);

//https://www.javascripttutorial.net/javascript-bom/javascript-prompt/
//let lang = prompt('What is your favorite programming language?');

//let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
//`It's ${lang}`;

//alert(feedback);

//https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/

var timeoutID;

function showAlert() {
  timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
  console.log("New timeoutID-" + timeoutID);
}

function cancelAlert() {
  console.log("timeoutID to be cleard-" + timeoutID);
  clearTimeout(timeoutID);
}

//https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/
let intervalID;

function toggleColor() {
  let e = document.getElementById("flashtext");
  e.style.color = e.style.color == "red" ? "blue" : "red";
}

function start() {
    intervalID = setInterval(toggleColor, 1000);
    console.log("New intervalID- " + intervalID)
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(intervalID);
    console.log("intervalID to be clear- " + intervalID)
    document.getElementById("start").disabled = false;
}
