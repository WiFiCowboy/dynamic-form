let i = 0; /* Set Global Variable i */
function increment() {
  i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
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
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function nameFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "Name");
  let g = document.createElement("IMG");
  g.setAttribute("src", "delete.png");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
function emailFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "Email");
  let g = document.createElement("IMG");
  g.setAttribute("src", "delete.png");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
function contactFunction() {
  let r = document.createElement("span");
  let y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "Contact");
  let g = document.createElement("IMG");
  g.setAttribute("src", "delete.png");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Message textarea field.

------------------------------------------------------------------------------
*/
function textareaFunction() {
  let r = document.createElement("span");
  let y = document.createElement("TEXTAREA");
  let g = document.createElement("IMG");
  y.setAttribute("cols", "17");
  y.setAttribute("placeholder", "message..");
  g.setAttribute("src", "delete.png");
  increment();
  y.setAttribute("Name", "textelement_" + i);
  r.appendChild(y);
  g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
  r.appendChild(g);
  r.setAttribute("id", "id_" + i);
  document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements() {
  document.getElementById("myForm").innerHTML = "";
}
