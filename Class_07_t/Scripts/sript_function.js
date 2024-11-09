function skaititLidz30() {
    const outputDiv = document.getElementById("outputVisi");
    outputDiv.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        const pElement = document.createElement("p");
        pElement.textContent = i;
        outputDiv.appendChild(pElement);
    }
}


function skaititLidzPara30() {
    const outputDiv = document.getElementById("outputPara");
    outputDiv.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        if(i % 2 == 0) {
            const pElement = document.createElement("p");
            pElement.textContent = i;
            outputDiv.appendChild(pElement);
        }
    }
}

