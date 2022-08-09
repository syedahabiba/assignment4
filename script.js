//variables
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3)/2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
//const
const base = 8;
const perp = 8;
const hypo = 6;
const T = (base + perp + hypo)/2;
const triangle = Math.sqrt(T*((T-base)*(T-perp)*(T-hypo)));
console.log(triangle);