// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("app started");

var myName = "Andrada";
var age = 26;
// console.info("My name is" + myName + ", I'm " + age + " years old.");
age = 27;
// console.info("My name is" + myName + ", I'm " + age + " years old.");
age = 28;
// console.info("My name is" + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Web developer</span>";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

//mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAll() {
  hide("skills");
  hide("projects");
  hide("languages");
  hide("home");
}

var activePage = "home";

function showPage(id) {
  hideAll();
  show(id);
  // console.warn("preview page", activePage);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + id).classList.add("active");
  activePage = id;
}

showPage(activePage);
