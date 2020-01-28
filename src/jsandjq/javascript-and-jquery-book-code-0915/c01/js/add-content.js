// functions from book

// 1

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");

// 2

var msg = "Sign up to recieve our newsletter for 10% off!";

function updateMessage() {
  var el = document.getElementById("message");
  el.textContent = msg;
}

updateMessage();

// 3
function sayHello() {
  document.write("Hello!");
}

sayHello();

// 4

function getArea() {
  return width * height;
}

getArea(3, 5);

// Getting a single value out of a function

function calculateArea() {
  var area = width * height;
  return area;
}

var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

// getting multiple values out of a function

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var size = [area, volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 3, 3)[1];

// 5
