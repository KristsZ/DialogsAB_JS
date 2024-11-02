const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs - ${cars.length} elemnti`;

var N = cars.push("VW");
document.getElementById("array_push").innerHTML = `${cars} masīva izmērs - ${N} elemnti`;

var N = cars.unshift("Mercedes");
document.getElementById("array_unshift").innerHTML = `${cars} masīva izmērs - ${N} elemnti`;

var cars_spliced = cars.splice(1,1,"RAF","Dodge");
document.getElementById("array_splice").innerHTML = `${cars} masīva izmērs - ${cars.length} elemnti(izdzēstais elemnts - ${cars_spliced})`;

var car_last = cars.pop();
document.getElementById("array_pop").innerHTML = `${cars} masīva izmērs - ${cars.length} elemnti (izdzēstais elements ${car_last})`;

var car_first = cars.shift();
document.getElementById("array_shift").innerHTML = `${cars} masīva izmērs - ${cars.length} elemnti (izdzēstais elements ${car_first})`;

