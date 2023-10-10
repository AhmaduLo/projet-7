const inputSearch = document.querySelector(".inputSearch");
const InputShe = document.querySelectorAll(".InputShe");
const InputShe2 = document.querySelectorAll(".InputShe2");
const InputShe3 = document.querySelectorAll(".InputShe3");
const containerInfo = document.querySelectorAll(".containt_info");

//------------------barre de recherche superieur--------------------------

inputSearch.addEventListener("input", (e) => {
  const valueInput = e.target.value;
  const containerAll = document.querySelectorAll(".containerAll");
  Filter(valueInput, containerAll);
});

function Filter(valueInput, containerAll) {
  if (valueInput.length > 2) {
    for (let i = 0; i < containerAll.length; i++) {
      if (containerAll[i].textContent.toLowerCase().includes(valueInput)) {
        containerAll[i].style.display = "block";
      } else {
        containerAll[i].style.display = "none";
      }
    }
    //--------para1-------------------
    for (let i = 0; i < elementsPara1.length; i++) {
      if (elementsPara1[i].textContent.toLowerCase().includes(valueInput)) {
        elementsPara1[i].style.display = "block";
      } else {
        elementsPara1[i].style.display = "none";
      }
    }
    //--------para2-------------------
    for (let i = 0; i < elementsPara2.length; i++) {
      if (elementsPara2[i].textContent.toLowerCase().includes(valueInput)) {
        elementsPara2[i].style.display = "block";
      } else {
        elementsPara2[i].style.display = "none";
      }
    }
    //--------para3-------------------
    for (let i = 0; i < elementsPara3.length; i++) {
      if (elementsPara3[i].textContent.toLowerCase().includes(valueInput)) {
        elementsPara3[i].style.display = "block";
      } else {
        elementsPara3[i].style.display = "none";
      }
    }
  } else if (valueInput.length == 0) {
    location.reload();
  }
}

//------------------barre de recherche inferieur--------------------------
InputShe.forEach((InputShee) => {
  InputShee.addEventListener("input", (e) => {
    const valueInput = e.target.value;
    elementsPara1.map((item) => {
      recherche(valueInput, item);
    });
  });
});

//--------2---------------
InputShe2.forEach((InputShee) => {
  InputShee.addEventListener("input", (e) => {
    const valueInput = e.target.value;

    elementsPara2.map((item2) => {
      recherche2(valueInput, item2);
    });
  });
});
//----------------3------------
InputShe3.forEach((InputShee) => {
  InputShee.addEventListener("input", (e) => {
    const valueInput = e.target.value;

    elementsPara3.map((item3) => {
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
}
//-------------------------------------------------
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
}
//-------------------------------------------------
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
