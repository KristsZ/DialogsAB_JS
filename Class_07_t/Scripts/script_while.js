
let i=1;
let visiSkaitli = "";

while (i <= 30) {
    visiSkaitli += i + " "
    console.log(i);
    i++;
}

document.getElementById("visi_skaitli").innerText += " " + visiSkaitli;

    i=1;
let neparaSkaitli = "";

while (i <= 30) {
    if (i % 2 !== 0){
    neparaSkaitli += i + " ";
    console.log(i);
    }
    i++;
}

document.getElementById("nepara_skaitli").innerHTML += " " + neparaSkaitli;

i=1;
let paraSkaitli = "";

while (i <= 30) {
    if (i % 2 === 0){
    paraSkaitli += i + " ";
    console.log(i);
    }
    i++;
}

document.getElementById("para_skaitli").innerHTML += " " + paraSkaitli;

i=1;
let neattelotnSkaitli = "";

while (i <= 30) {
    if (i % 2 !== 0 && i !== 5 && i !== 11) {
    neattelotnSkaitli += i + " ";
    console.log(i);
    }
    i++;
}

document.getElementById("nettelotn_skaitli").innerHTML += " " + neattelotnSkaitli;

i=1;
let neattelotpSkaitli = "";

while (i <= 30) {
    if (i % 2 === 0 && i !== 12 && i !== 14 && i !== 16 && i !== 18) {
    neattelotpSkaitli += i + " ";
    console.log(i);
    }
    i++;
}

document.getElementById("neattelotp_skaitli").innerHTML += " " + neattelotpSkaitli;