function changeDate(){
    let _date = new Date().getFullYear();
    document.getElementById("currentdate").innerText= _date + ".Year!";
}

function people(){
    let fname = "John";
    let lname= "Smith";
    let number = "25"
    let info = fname + " " + lname + " " + number + ". years old!";
    document.getElementById("people").innerText = info;
}

