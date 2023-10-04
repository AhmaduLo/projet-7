"use strict";

var inputSearch = document.querySelector(".inputSearch");
var InputShe = document.querySelectorAll(".InputShe");
var containerInfo = document.querySelectorAll(".containt_info"); //------------------barre de recherche superieur--------------------------

inputSearch.addEventListener("input", function (e) {
  var valueInput = e.target.value;
  var containerAll = document.querySelectorAll(".containerAll");
  Filter(valueInput, containerAll);
});

function Filter(valueInput, containerAll) {
  if (valueInput.length > 2) {
    containerAll.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(valueInput)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  } else if (valueInput.length == 0) {
    location.reload();
  }
} //------------------barre de recherche inferieur--------------------------


InputShe.forEach(function (InputShee) {
  InputShee.addEventListener("input", function (e) {
    var valueInput = e.target.value;
    elementsPara1.map(function (item) {
      recherche(valueInput, item);
    });
  });
});

function recherche(valueInput, item) {
  if (valueInput.length > 2) {
    if (item.textContent.toLowerCase().includes(valueInput)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  } else {
    item.style.display = "block";
  }
}