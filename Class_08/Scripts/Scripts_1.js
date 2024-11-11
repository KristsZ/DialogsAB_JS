function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}

fname_input = document.getElementById("fname");

fname_input.addEventListener("keydown", logKey);

document.getElementById("passwd").addEventListener("keydown",(event) => {console.log(`You pressed "${event.key}".`);})
