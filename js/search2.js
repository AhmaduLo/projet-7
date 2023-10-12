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
    containerAll.forEach((item) => {
      if (item.textContent.toLowerCase().includes(valueInput)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    //--------para1-------------------
    elementsPara1.forEach((item1) => {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    });
    //--------para2-------------------
    elementsPara2.forEach((item1) => {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    });
    //--------para3-------------------
    elementsPara3.forEach((item1) => {
      if (item1.textContent.toLowerCase().includes(valueInput)) {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    });
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
