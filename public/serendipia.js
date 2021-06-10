let imgChange = document.getElementById("myImg");

imgChange.addEventListener("mouseover", (event) => {
  event.target.src = require("../img/manon2.jpg");
});

imgChange.addEventListener("mouseout", (event) => {
  event.target.src = require("../img/manon.jpg");
});
