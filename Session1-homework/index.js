// 1

let name = prompt("What your name ?");
let randomQuote = `Hi ${name}, nice to meet you`;
alert(randomQuote);

//2

let firstName = prompt("Enter your first name ?");
let lastName = prompt("Enter your last name ?");
let randomFullname = `Hello ${firstName} ${lastName}`;
alert(randomFullname);

//3

let side = parseInt(prompt("Enter side length of the square ?"));
let square = side*side;
alert(square);

//4

let sideCircle = parseInt(prompt("Enter the radius of the circle ?"));
let circle = sideCircle*sideCircle*3.14;
alert(circle);

//5

let celsius = parseInt(prompt("Enter the temperature in Celcius ?"));
let fahrenheit = ((celsius*1.8)+32);
alert(fahrenheit);
