// Progam Title
document.getElementById("8ball").addEventListener("click", ballclicked);
// function
function ballclicked() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = document.getElementById("output");
  // randnum
  let randnum = Math.random();

  // If statment
  if (input === "") {
    document.getElementById("output").innerHTML = "Please ask a question";
  } else if (input === "does the magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (input === "is javascript awesome") {
    document.getElementById("output").innerHTML = "Ofcourse";
  } else {
    if (randnum > 0.2) {
      document.getElementById("output").innerHTML = "Without a doubt.";
    } else if (randnum > 0.4) {
      document.getElementById("output").innerHTML = "As I see it, Yes.";
    } else if (randnum > 0.6) {
      document.getElementById("output").innerHTML =
        "Concerntrate and ask again";
    } else if (randnum > 0.8) {
      docuemnt.getElementById("output").innerHTML = "Don't count on it.";
    } else {
      document.getElementById("output").innerHTML = "Outlook not so good.";
    }
  }
}
