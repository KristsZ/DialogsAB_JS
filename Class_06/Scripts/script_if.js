//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if (nasacījums_vai_saliktais_nosacījums) darbība; darbība_kura_tiks_izpildīta_jebkurā_gadījumā;
// if (nasacījums_vai_saliktais_nosacījums) 
// darbība;
// if (nasacījums_vai_saliktais_nosacījums) {darbība;}
// if (nasacījums_vai_saliktais_nosacījums) {darbības;}
// if (nasacījums_vai_saliktais_nosacījums) {darbības;} else {savādākas_darbības;}

if (new Date().getHours() < 11) {
    document.getElementById("demo_if").innerHTML = "Good Morning!";
  } else if (new Date().getHours() >= 11 && new Date().getHours <17){
    document.getElementById("demo_if").innerHTML = "Good Day!";
  } else{
    document.getElementById("demo_if").innerHTML = "Good Evening!";
  }