/*
switch (analizējama_izteiksme){
case analizējama_izteiksme_iespējamais_stāvoklis_1:
    darbības_1;
case analizējama_izteiksme_iespējamais_stāvoklis_2:
    darbības_2;
    break;
case analizējama_izteiksme_iespējamais_stāvoklis_3:
case analizējama_izteiksme_iespējamais_stāvoklis_4:
    darbības_3_4;
    break;
default:
    darbības_defaul_gadījumā;
}
*/
// ja analizējamā–izteiksme ir ar stāvokli analizējama_izteiksme_iespējamais_stāvoklis_1, tad
// tiks izpildītas darbības_1 un darbības_2 (NB! pilda līdz break;)
// ja, piemēram peēc darbības_3_4 nebūtu break; tad, ja analizējama izteiksme būtu ar stāvokli
//analizējamā–izteiksme ir ar stāvokli analizējama_izteiksme_iespējamais_stāvoklis_3 vai _4, tad tiktu izpildīts gan darbības_3_4
// gan darbības–defaukt–gadījumā;

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo_switch").innerHTML = "Today is " + day;
