import images from '../img/*.jpg';

let imgChange = document.getElementById("myImg");

imgChange.addEventListener("mouseover", () => {
  console.log(images);
  //document.getElementById("toChange").srcset = require("../img/manon2.jpg");
});

imgChange.addEventListener("mouseout", () => {
  console.log(images);
});
