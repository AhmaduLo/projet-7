const inputSearch = document.querySelector(".inputSearch");
const InputShe = document.querySelectorAll(".InputShe");
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
