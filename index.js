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

function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showProjectsPage() {
  document.getElementById("projects").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("skills").style.display = "none";
}

function showLanguagesPage() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("languages").style.display = "block";
  document.getElementById("skills").style.display = "none";
}

showHomePage();
