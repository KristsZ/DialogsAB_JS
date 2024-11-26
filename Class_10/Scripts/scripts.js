const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  //document.getElementById("demo").innerHTML = person;
  //document.getElementById("demo").innerHTML = person["name"] + ", " + person["age"] + ", " + person["city"];
  
let text = "";
  console.log("Teksta rindas saturs pirms cikla for: " +text);
for (let x in person) {
  console.log(x);
  text += person[x] + " ";
  console.log(text);
};
console.log("Teksta rindas saturs pēc cikla for: " +text);

document.getElementById("demo").innerHTML = text;