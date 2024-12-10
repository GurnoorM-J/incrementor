// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables
var counter = 0;
var story = "once apon a time, ";
var minus50Btn = document.getElementById("minus50");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var displayE1 = document.getElementById("display");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

// Event Listeners
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus50Btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

// 2. Incrementing Functions
function minus50fcn() {
  counter = counter - 50;
  displayE1.innerHTML = counter;
}

function minus10fcn() {
  counter -= 10;
  displayE1.innerHTML = counter;
}

function minus1fcn() {
  counter--;
  displayE1.innerHTML = counter;
}

function plus1fcn() {
  counter++;
  displayE1.innerHTML = counter;
}

function plus10fcn() {
  counter += 10;
  displayE1.innerHTML = counter;
}

function plus50fcn() {
  counter += 50;
  displayE1.innerHTML = counter;
}

// 3. Update Story Function
function updateStory() {
  var word = stringInEl.value;
  story += word + " ";
  storyEl.innerHTML = story;
  stringInEl.value = "";
}

// 4. Random Functions
function round1() {
  let rand = Math.random().toFixed(3);
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.round(Math.random() * 100);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  let rand = Math.round(Math.random() * 10 - 5);
  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  var min = parseInt(document.getElementById('rand-in1').value);
  var max = parseInt(document.getElementById('rand-in2').value);
  if (min >= max) {
    alert('Please make sure the minimum value is less than the maximum value.');
    return;
  }
  var rand = Math.random() * (max - min) + min;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}

// 5. Random Size Function
document.getElementById('random-size').addEventListener('click', function() {
  var randomSize = Math.floor(Math.random() * 76); // 0 to 75
  document.body.style.fontSize = randomSize + 'px';
});

// 6. Random RGB Color Function
document.getElementById('random-rgb').addEventListener('click', function() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgbString = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('HTML').style.background = rgbString;
});

// 7. Reset Button Function
document.getElementById('reset').addEventListener('click', function() {
  counter = 0;
  displayE1.innerHTML = counter;
  story = "once apon a time, ";
  storyEl.innerHTML = story;
  stringInEl.value = "";
  document.getElementById('rand-in1').value = "";
  document.getElementById('rand-in2').value = "";
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.body.style.fontSize = '16px';
  document.getElementById('HTML').style.background = '#9ae4c8';
});
