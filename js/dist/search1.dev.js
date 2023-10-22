"use strict";

var inputSearch = document.querySelector(".inputSearch");
var InputShe = document.querySelectorAll(".InputShe");
var InputShe2 = document.querySelectorAll(".InputShe2");
var InputShe3 = document.querySelectorAll(".InputShe3");
var containerInfo = document.querySelectorAll(".containt_info");
var nav = document.querySelector("nav"); //------------------barre de recherche superieur--------------------------

inputSearch.addEventListener("input", function (e) {
  var valueInput = e.target.value;
  var containerAll = document.querySelectorAll(".containerAll");
  Filter(valueInput, containerAll);
});

function Filter(valueInput, containerAll) {
  if (valueInput.length > 2) {
    section.innerHTML = "";

    for (var i = 0; i < containerAll.length; i++) {
      if (containerAll[i].textContent.toLowerCase().includes(valueInput)) {
        nav.appendChild(containerAll[i].cloneNode(true));
      } else {
        containerAll[i].style.display = "none";
      }
    } //----------------------------------


    for (var _i = 0; _i < nav.children.length; _i++) {
      var child = nav.children[_i];
      var shouldDisplay = false; // Initialize as false
      //-------------partie ingredien---------------------

      for (var j = 0; j < elementsPara1.length; j++) {
        if (child.innerText.includes(elementsPara1[j].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;

          elementsPara1[j].style.display = "block";
        } else {
          elementsPara1[j].style.display = "none";
        }
      } //-------------partie appareil---------------------


      for (var _j = 0; _j < elementsPara2.length; _j++) {
        if (child.innerText.includes(elementsPara2[_j].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;

          elementsPara2[_j].style.display = "block";
        } else {
          elementsPara2[_j].style.display = "none";
        }
      } //-------------partie ustensil---------------------


      for (var _j2 = 0; _j2 < elementsPara3.length; _j2++) {
        if (child.innerText.includes(elementsPara3[_j2].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;

          elementsPara3[_j2].style.display = "block";
        } else {
          elementsPara3[_j2].style.display = "none";
        }
      }
    } //--------para1-------------------
    // for (let i = 0; i < elementsPara1.length; i++) {
    //   console.log(nav.children[0].innerText);
    //   if (elementsPara1[i].textContent.includes(containerAll[i])) {
    //     //elementsPara1[i].style.display = "block";
    //     console.log(elementsPara1[i]);
    //   } else {
    //     elementsPara1[i].style.display = "none";
    //   }
    // }
    // //--------para2-------------------
    // for (let i = 0; i < elementsPara2.length; i++) {
    //   if (elementsPara2[i].textContent.toLowerCase().includes(valueInput)) {
    //     elementsPara2[i].style.display = "block";
    //   } else {
    //     elementsPara2[i].style.display = "none";
    //   }
    // }
    // //--------para3-------------------
    // for (let i = 0; i < elementsPara3.length; i++) {
    //   if (elementsPara3[i].textContent.toLowerCase().includes(valueInput)) {
    //     elementsPara3[i].style.display = "block";
    //   } else {
    //     elementsPara3[i].style.display = "none";
    //   }
    // }

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