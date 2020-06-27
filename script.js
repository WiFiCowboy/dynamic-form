// function to count number of words , input is an array , output maps string
function wordCount(arrayOfStrings) {
  const map = {};
  for (let i = 0; i < arrayOfStrings.length; ++i) {
    if (arrayOfStrings[i] in map) map[arrayOfStrings[i]]++;
    else map[arrayOfStrings[i]] = 1;
  }

  return map;
}

// Set Global Variable i
let i = 0;
function increment() {
  // Function for automatic increment of field's "Name" attribute.
  i += 1;
}

// Function to Remove Form Elements Dynamically
function removeElement(parentDiv, childDiv) {
  if (childDiv == parentDiv) {
    alert("The parent div cannot be removed.");
  } else if (document.getElementById(childDiv)) {
    let child = document.getElementById(childDiv);
    let parent = document.getElementById(parentDiv);
    parent.removeChild(child);
  } else {
    alert("Child div has already been removed or does not exist.");
    return false;
  }
}

// Functions that will be called upon, when user click on the Name text field
function nameFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "Enter name here ...");
  let g = document.createElement("i");
  g.setAttribute("class", "fas fa-user");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
  console.log("from name", r.id);
}

// Functions that will be called upon, when user click on the performance text field
function performanceFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "enter performance here ...");
  let g = document.createElement("i");
  g.setAttribute("class", "fas fa-wrench");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
  console.log("from performance", r.id);
}

// Functions that will be called upon, when user click on the compliance text field
function complianceFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "enter compliance here ...");
  let g = document.createElement("i");
  g.setAttribute("class", "fas fa-clipboard-list");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
  console.log("from compliance", r.id);
}

// Functions that will be called upon, when user click on the  initiative field
function initiativeFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "enter initiative here ..");
  let g = document.createElement("i");
  g.setAttribute("class", "fas fa-fire");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
  console.log("from initiative", r.id);
}

// Functions that will be called upon, when user click on the Reset Button
function resetElements() {
  document.getElementById("myForm").innerHTML = "";
}
