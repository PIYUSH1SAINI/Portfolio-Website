var typeData = new Typed(".role", {
  strings: ["Developer", "Web Developer", "Coder", "Full Stack Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000
});

let head = document.getElementById("getitouch");
let formBox = document.getElementById("form");
let innerForm = document.querySelector("form");
let contact = document.getElementById("contact");

head.addEventListener("click", function () {
  if (formBox.style.height === "75%") {
    formBox.style.height = "30%";
    head.style.color = "coral";
    formBox.style.boxShadow = "none";
    contact.style.height = "300px";
  } else {
    head.style.color = "black";
    formBox.style.height = "75%";
    formBox.style.boxShadow = "5px 5px 18px #888888";
    innerForm.style.height = "100%";
    contact.style.height = "500px";
    console.log("clicked");
  }
});
