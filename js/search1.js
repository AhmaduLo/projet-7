const inputSearch = document.querySelector(".inputSearch");
const InputShe = document.querySelectorAll(".InputShe");
const InputShe2 = document.querySelectorAll(".InputShe2");
const InputShe3 = document.querySelectorAll(".InputShe3");
const containerInfo = document.querySelectorAll(".containt_info");
const nav = document.querySelector("nav");

//------------------barre de recherche superieur--------------------------

inputSearch.addEventListener("input", (e) => {
  const valueInput = e.target.value;
  const containerAll = document.querySelectorAll(".containerAll");
  Filter(valueInput, containerAll);
});

function Filter(valueInput, containerAll) {
  if (valueInput.length > 2) {
    section.innerHTML = "";

    for (let i = 0; i < containerAll.length; i++) {
      if (containerAll[i].textContent.toLowerCase().includes(valueInput)) {
        nav.appendChild(containerAll[i].cloneNode(true));
      } else {
        containerAll[i].style.display = "none";
      }
    }
    //----------------------------------
    for (let i = 0; i < nav.children.length; i++) {
      const child = nav.children[i];
      let shouldDisplay = false; // Initialize as false

      //-------------partie ingredien---------------------
      for (let j = 0; j < elementsPara1.length; j++) {
        if (child.innerText.includes(elementsPara1[j].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;
          elementsPara1[j].style.display = "block";
        }else{
          elementsPara1[j].style.display = "none";
        }
      }
       //-------------partie appareil---------------------
       for (let j = 0; j < elementsPara2.length; j++) {
        if (child.innerText.includes(elementsPara2[j].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;
          elementsPara2[j].style.display = "block";
        }else{
          elementsPara2[j].style.display = "none";
        }
      }
      //-------------partie ustensil---------------------
      for (let j = 0; j < elementsPara3.length; j++) {
        if (child.innerText.includes(elementsPara3[j].textContent)) {
          shouldDisplay = true; // If a match is found, set to true and break out of the loop
          //break;
          elementsPara3[j].style.display = "block";
        }else{
          elementsPara3[j].style.display = "none";
        }
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
