"use strict";

var inputSearch = document.querySelector(".inputSearch");
var InputShe = document.querySelectorAll(".InputShe");
var InputShe2 = document.querySelectorAll(".InputShe2");
var InputShe3 = document.querySelectorAll(".InputShe3");
var containerInfo = document.querySelectorAll(".containt_info"); //------------------barre de recherche superieur--------------------------

inputSearch.addEventListener("input", function (e) {
  var valueInput = e.target.value;
  var containerAll = document.querySelectorAll(".containerAll");
  Filter(valueInput, containerAll);
});

function Filter(valueInput, containerAll) {
  if (valueInput.length > 2) {
    for (var i = 0; i < containerAll.length; i++) {
      if (containerAll[i].textContent.toLowerCase().includes(valueInput)) {
        containerAll[i].style.display = "block";
      } else {
        containerAll[i].style.display = "none";
      }
    } //--------para1-------------------


    for (var _i = 0; _i < elementsPara1.length; _i++) {
      if (elementsPara1[_i].textContent.toLowerCase().includes(valueInput)) {
        elementsPara1[_i].style.display = "block";
      } else {
        elementsPara1[_i].style.display = "none";
      }
    } //--------para2-------------------


    for (var _i2 = 0; _i2 < elementsPara2.length; _i2++) {
      if (elementsPara2[_i2].textContent.toLowerCase().includes(valueInput)) {
        elementsPara2[_i2].style.display = "block";
      } else {
        elementsPara2[_i2].style.display = "none";
      }
    } //--------para3-------------------


    for (var _i3 = 0; _i3 < elementsPara3.length; _i3++) {
      if (elementsPara3[_i3].textContent.toLowerCase().includes(valueInput)) {
        elementsPara3[_i3].style.display = "block";
      } else {
        elementsPara3[_i3].style.display = "none";
      }
    }
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
}); //--------2---------------

InputShe2.forEach(function (InputShee) {
  InputShee.addEventListener("input", function (e) {
    var valueInput = e.target.value;
    elementsPara2.map(function (item2) {
      recherche2(valueInput, item2);
    });
  });
}); //----------------3------------

InputShe3.forEach(function (InputShee) {
  InputShee.addEventListener("input", function (e) {
    var valueInput = e.target.value;
    elementsPara3.map(function (item3) {
      recherche2(valueInput, item3);
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
} //-------------------------------------------------


function recherche2(valueInput, item2) {
  if (valueInput.length > 2) {
    if (item2.textContent.toLowerCase().includes(valueInput)) {
      item2.style.display = "block";
    } else {
      item2.style.display = "none";
    }
  } else {
    item2.style.display = "block";
  }
} //-------------------------------------------------


function recherche3(valueInput, item3) {
  if (valueInput.length > 2) {
    if (item3.textContent.toLowerCase().includes(valueInput)) {
      item3.style.display = "block";
    } else {
      item3.style.display = "none";
    }
  } else {
    item3.style.display = "block";
  }
}