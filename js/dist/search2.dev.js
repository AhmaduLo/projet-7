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
    containerAll.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(valueInput)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }); //--------para1-------------------

    elementsPara1.forEach(function (item1) {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    }); //--------para2-------------------

    elementsPara2.forEach(function (item1) {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    }); //--------para3-------------------

    elementsPara3.forEach(function (item1) {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
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