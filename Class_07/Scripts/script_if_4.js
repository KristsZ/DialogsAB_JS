
let a = 1;
let b = 10;
let c = 3;
let d = 7;


if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    let temp = a;
    a = c;
    c = temp;
}

if (a > d) {
    let temp = a;
    a = d;
    d = temp;
}

if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

if (b > d) {
    let temp = b;
    b = d;
    d = temp;
}

if (c > d) {
    let temp = c;
    c = d;
    d = temp;
}


console.log("Augošā secība:", a, b, c, d);

if (a < b) {
    let temp = a;
    a = b;
    b = temp;
}

if (a < c) {
    let temp = a;
    a = c;
    c = temp;
}

if (a < d) {
    let temp = a;
    a = d;
    d = temp;
}

if (b < c) {
    let temp = b;
    b = c;
    c = temp;
}

if (b < d) {
    let temp = b;
    b = d;
    d = temp;
}

if (c < d) {
    let temp = c;
    c = d;
    d = temp;
}


console.log("Dilstošā secība:", a, b, c, d);