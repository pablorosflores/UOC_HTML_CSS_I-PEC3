let imgChange = document.getElementById("myImg");



imgChange.addEventListener("mouseover", () => {
  document.getElementById("toChange").srcset = require("../img/manon2.jpg");
});

imgChange.addEventListener("mouseout", () => {
  document.getElementById("toChange").srcset = require("../img/manon.jpg");
});
