// 1. A function: a, op and b go in, the answer comes back
function calculate(a, op, b) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else {
    return a / b;
  }
}

// 2. Read the boxes, calculate, and write the answer
function showAnswer() {
  // Number() turns the text in a box into a number
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const op = document.getElementById("op").value;
  const answer = calculate(a, op, b);
  document.getElementById("result").textContent = answer;
}

// 3. A click on the button runs showAnswer
const button = document.getElementById("calc");
button.addEventListener("click", showAnswer);

// 4. A score goes in, its label comes back
function creditLabel(score) {
  if (score >= 800) {
    return "Exceptional";
  } else if (score >= 740) {
    return "Very Good";
  } else if (score >= 670) {
    return "Good";
  } else if (score >= 580) {
    return "Fair";
  } else {
    return "Poor";
  }
}

// 5. Read the score, find its label, and write it on the page
function showLabel() {
  const score = Number(document.getElementById("score").value);
  const label = creditLabel(score);
  document.getElementById("rating").textContent = label;
}

// 6. A click on the Check button runs showLabel
const checkButton = document.getElementById("check");
checkButton.addEventListener("click", showLabel);

// 7. The score ranges: an array of objects (Monday)
const ranges = [
  { label: "Exceptional", min: 800 },
  { label: "Very Good", min: 740 },
  { label: "Good", min: 670 },
  { label: "Fair", min: 580 }
];

// 8. Find the empty list, then add one li for each range
const list = document.querySelector("#ranges");
ranges.forEach(function (r) {
  const li = document.createElement("li");            // create
  li.textContent = `${r.label}: ${r.min} and above`;  // fill
  list.appendChild(li);                               // attach
});

// 9. Part II: five score factors, an array of objects
const factors = [
  { name: "Payment history", percent: 35 },
  { name: "Amounts owed", percent: 30 },
  { name: "Length of credit history", percent: 15 },
  { name: "Credit mix", percent: 10 },
  { name: "New credit", percent: 10 }
];

// 10. Find the second list, then add one li per factor
const factorList = document.querySelector("#factors");
factors.forEach(function (f) {
  const li = document.createElement("li");       // create
  li.textContent = `${f.name}: ${f.percent}%`;   // fill
  factorList.appendChild(li);                    // attach
});

// 11. New today: the label changes as you type, before any click
const scoreBox = document.getElementById("score");
scoreBox.addEventListener("input", function (event) {
const score = Number(event.target.value); // the text, as a number
document.getElementById("rating").textContent = creditLabel(score);
});
// 12. New today: one click switches the page's colors on and off
const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", function () {
document.body.classList.toggle("bg-dark"); // a dark background
document.body.classList.toggle("text-white"); // white text
});