// Checklist 2: the array. Replace the sample data with 4 or more items of your own.
const skills = ["Longboarding", "SQL", "Planning Events", "Communication"];

// Checklist 4: querySelector finds the empty <ul id="list">. The # means id, as in CSS.
const list = document.querySelector("#list");

// Checklist 3: forEach runs this function once for each item. On each pass,
// skill holds the next item: "Excel", then "SQL", then "Public speaking", then "Teamwork".
skills.forEach(function (skill) {
  // Checklist 4: createElement makes a new, empty <li>. It is NOT on the page yet.
  const li = document.createElement("li");
  // textContent puts the item's words inside the new <li>.
  li.textContent = skill;
  // appendChild adds the <li> to the end of the list. NOW it shows on the page.
  list.appendChild(li);
});

// Checklist 5: getElementById finds the empty <p id="count">. It takes the id with no #.
const count = document.getElementById("count");
// textContent writes the sentence. skills.length counts the items, so it is 4 here.
count.textContent = "I have " + skills.length + " skills.";
