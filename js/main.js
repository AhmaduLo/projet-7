const afficheClickIng = document.querySelector(".afficheClickIng");
const section = document.querySelector("section");
const fa_down = document.querySelectorAll(".fa-chevron-down");
const fa_up = document.querySelectorAll(".fa-chevron-up");
const container_info = document.querySelectorAll(".container_info");
const input_container = document.querySelectorAll(".input_container");
const containt_element_Serach = document.querySelectorAll(
  ".containt_element_Serach"
);
const containt_info = document.querySelectorAll(".containt_info");

//------------les 3 bares de recherche-------------------

for (let i = 0; i < fa_down.length; i++) {
  fa_down[i].addEventListener("click", () => {
    container_info[i].classList.add("container_infoAfter");
    input_container[i].classList.add("input_containerAfter");
    containt_element_Serach[i].classList.add("containt_element_SerachAfter");
  });
}

for (let i = 0; i < fa_up.length; i++) {
  fa_up[i].addEventListener("click", () => {
    container_info[i].classList.remove("container_infoAfter");
    input_container[i].classList.remove("input_containerAfter");
    containt_element_Serach[i].classList.remove("containt_element_SerachAfter");
  });
}
let elementsPara1 = [];
let elementsPara2 = [];
let elementsPara3 = [];
let AllIdtoDisplays = [];
let result = [];

//-----------------function fetch-------------------------------------
function fetchRecipes() {
  fetch("http://127.0.0.1:5500/data/recipes.json").then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        const recipes = data.recipes;
        //------array des elemznt----------------
        let AllIngredient = [];
        let ArrayIngredient = [{ id: "X" }];
        let AllAppareil = [];
        let ArrayAppareil = [{ id: "X" }];
        let AllUstensiles = [];
        let ArrayUstensiles = [{ id: "X" }];
        //----functiopn affiche block in html-----------
        function newFuntion() {
          for (i = 0; i < recipes.length; i++) {
            let ingredient = recipes[i].ingredients;
            let textIngre = "";

            ingredient.forEach((ingred) => {
              textIngre = textIngre + " " + ingred.ingredient + "    :";

              if (ingred.quantity != undefined) {
                textIngre = textIngre + "" + ingred.quantity;
              }
              if (ingred.unit != undefined) {
                textIngre = textIngre + " " + ingred.unit + "<br/>";
              }
            });

            section.innerHTML += `
      <div class="containerAll">
          <div class="imgNone"></div>
          <div class="lesInfos">
              <div class="tittle_time">
                  <div class="tittle">
                      <h3>${recipes[i].name}</h3>
                  </div>
                  <div class="time">
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                      <p>${recipes[i].time} min</p>
                  </div>

              </div>

              <div class="ingredient_demo">
                  <div class="ingredient"> 
                    <p> ${textIngre} </p>  
                  </div>
                  <div class="demo">
                  ${recipes[i].description}
                  </div>
              </div>
          </div>
      </div>
      `;
          }
        }
        newFuntion();
        // Fonction pour extraire les ingrédients appareils et ustensil uniques--
        function extractIngredientsAndAppareilsAndUstensil() {
          recipes.forEach((recipe) => {
            let tableauxIngredients = [];
            let ingredients = recipe.ingredients;
            for (let a = 0; a < ingredients.length; a++) {
              const ingredientName = ingredients[a].ingredient;
              tableauxIngredients.push(ingredientName.toLowerCase());
              AllIngredient.push(ingredientName.toLowerCase());
              if (ArrayIngredient[ArrayIngredient.length - 1].id != recipe.id) {
                ArrayIngredient.push({
                  id: recipe.id,
                  ingredient: tableauxIngredients,
                });
              }
            }
            //--------------------appareil------------------
            const appareilName = recipe.appliance.toLowerCase();
            let tableauxAppareil = [];
            AllAppareil.push(appareilName.toLowerCase());
            tableauxAppareil.push(appareilName.toLowerCase());
            if (ArrayAppareil[ArrayAppareil.length - 1].id != recipe.id) {
              ArrayAppareil.push({
                id: recipe.id,
                appareil: tableauxAppareil,
              });
            }

            //---------------------ustensil----------------------
            const ustensiles = recipe.ustensils;
            let tableauxUstensil = [];
            for (let a = 0; a < ustensiles.length; a++) {
              AllUstensiles.push(ustensiles[a].toLowerCase());
              tableauxUstensil.push(ustensiles[a].toLowerCase());
              if (ArrayUstensiles[ArrayUstensiles.length - 1].id != recipe.id) {
                ArrayUstensiles.push({
                  id: recipe.id,
                  ustensiles: tableauxUstensil,
                });
              }
            }
          });
        }
        extractIngredientsAndAppareilsAndUstensil();
        // Fonction pour afficher les éléments uniques dans les blocs de recherche--
        function displayUniqueElements() {
          function createParaElement(className, textContent) {
            const paraElement = document.createElement("p");
            paraElement.className = className;
            paraElement.textContent = textContent;
            return paraElement;
          }

          function addElementToContainer(element, container) {
            elementsPara1.push(element);
            containt_info[0].appendChild(element);
          }
          function addAppareilToContainer(element, container) {
            elementsPara2.push(element);
            containt_info[1].appendChild(element);
          }
          function addUstensilToContainer(element, container) {
            elementsPara3.push(element);
            containt_info[2].appendChild(element);
          }
          let AllIngredientNondupliquate = [...new Set(AllIngredient)];
          let AllAppareilNondupliquate = [...new Set(AllAppareil)];
          let AllUstensilesNondupliquate = [...new Set(AllUstensiles)];
          AllIngredientNondupliquate.forEach((item) => {
            const paraElement = createParaElement("para1", item);
            addElementToContainer(paraElement, containt_info[0]);
          });

          AllAppareilNondupliquate.forEach((item) => {
            const paraElement = createParaElement("para2", item);
            addAppareilToContainer(paraElement, containt_info[1]);
          });
          AllUstensilesNondupliquate.forEach((item) => {
            const paraElement = createParaElement("para3", item);
            addUstensilToContainer(paraElement, containt_info[2]);
          });
        }
        displayUniqueElements();
        // Fonction pour rechercher et afficher les résultats en fonction de l'élément cliqué
        function searchAndDisplayResults(element, index, elementsPara, type) {
          section.innerHTML = "";

          const elementText = element.textContent;
          if (element.className == "para1") {
            afficheClickIng.innerHTML += `
            <div class="containeAffiche2" style="background-color: #3282f7">
              <p class="text">${elementText}</p>
              <i class="fa fa-times close" aria-hidden="true"></i>
            </div>
          `;
            let AllTheIdFor = [];
            const result = ArrayIngredient.filter((item) => {
              let thisId = item.id;
              let ingredients = [...new Set(item.ingredient)];
              ingredients.forEach((Ingr) => {
                if (elementText == Ingr) {
                  AllTheIdFor.push(thisId);
                  //---les id que je doit afficher---
                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          } else if (element.className == "para2") {
            afficheClickIng.innerHTML += `
            <div class="containeAffiche2" style="background-color: #68d9a4">
              <p class="text">${elementText}</p>
              <i class="fa fa-times close" aria-hidden="true"></i>
            </div>
          `;
            let AllTheIdFor = [];
            const result = ArrayAppareil.filter((item) => {
              let thisId = item.id;
              let Appareil = [...new Set(item.appareil)];
              Appareil.forEach((App) => {
                if (elementText == App) {
                  AllTheIdFor.push(thisId);
                  //----------les id que je doit afficher-----------
                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          } else if (element.className == "para3") {
            afficheClickIng.innerHTML += `
            <div class="containeAffiche2" style="background-color: #ed6454">
              <p class="text">${elementText}</p>
              <i class="fa fa-times close" aria-hidden="true"></i>
            </div>
          `;
            let AllTheIdFor = [];
            const result = ArrayUstensiles.filter((item) => {
              let thisId = item.id;
              let Ustensil = [...new Set(item.ustensiles)];
              Ustensil.forEach((Usten) => {
                if (elementText == Usten) {
                  AllTheIdFor.push(thisId);
                  //---les id que je doit afficher---
                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          }
          // Recherche des résultats correspondant à l'élément cliqué
          //console.log(AllIdtoDisplays);
          function AfficheBlockResultat(ajout) {
            for (i = 0; i < recipes.length; i++) {
              let ingredient = recipes[i].ingredients;
              let textIngre = "";

              ingredient.forEach((ingred) => {
                textIngre = textIngre + " " + ingred.ingredient + "    :";

                if (ingred.quantity != undefined) {
                  textIngre = textIngre + "" + ingred.quantity;
                }
                if (ingred.unit != undefined) {
                  textIngre = textIngre + " " + ingred.unit + "<br/>";
                }
              });
              if (ajout.includes(recipes[i].id)) {
                section.innerHTML += `
                          <div class="containerAll">
                              <div class="imgNone"></div>
                              <div class="lesInfos">
                                  <div class="tittle_time">
                                      <div class="tittle">
                                          <h3>${recipes[i].name}</h3>
                                      </div>
                                      <div class="time">
                                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                                          <p>${recipes[i].time} min</p>
                                      </div>
                    
                                  </div>
                    
                                  <div class="ingredient_demo">
                                      <div class="ingredient"> 
                                        <p> ${textIngre} </p>  
                                      </div>
                                      <div class="demo">
                                      ${recipes[i].description}
                                      </div>
                                  </div>
                              </div>
                          </div>
                          `;
              }
            }
          }
          //
          //--------------stocke les duplications et afficher------------
          function getElementsWithMultipleOccurrences(arr) {
            const occurrences = {};

            // Compter les occurrences de chaque élément
            arr.forEach((element) => {
              if (occurrences[element]) {
                occurrences[element]++;
              } else {
                occurrences[element] = 1;
              }
            });
            // Filtrer les éléments avec une occurrence supérieure à 1
            Object.keys(occurrences).forEach((key) => {
              if (occurrences[key] > 1) {
                result.push(Number(key)); // Convertir la clé en nombre (car les clés d'objets sont des chaînes de caractères)
              }
            });
            return result;
          }
          const duplicateElementa = getElementsWithMultipleOccurrences(
            AllIdtoDisplays
          );
          //console.log(duplicateElementa);

          if (duplicateElementa == "") {
            AfficheBlockResultat(AllIdtoDisplays);
          } else {
            AfficheBlockResultat(duplicateElementa);
          }
          // -----------------Décochez tous les boutons de catégorie----------
          function decocherSearch() {
            const closes = document.querySelectorAll(".fa-times");
            closes.forEach((closes) => {
              closes.addEventListener("click", (e) => {
                //console.log(afficheClickIng.childElementCount);
                let siblingElement = e.target.parentElement;
                siblingElement.remove();
                let siblingElementText =
                  e.target.parentElement.firstChild.nextSibling.textContent;
                //------------les id qu'on doit delete----------------
                let IdYToDelete = [];
                //--------push delete id ingre-----
                const result1 = ArrayIngredient.filter((item) => {
                  let thisId = item.id;
                  let ingredients = [...new Set(item.ingredient)];
                  ingredients.forEach((Ingr) => {
                    if (siblingElementText == Ingr) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                //--------push delete id appareil-----
                const result2 = ArrayAppareil.filter((item) => {
                  let thisId = item.id;
                  let Appareil = [...new Set(item.appareil)];
                  Appareil.forEach((App) => {
                    if (siblingElementText == App) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                //--------push delete id usten-----
                const result3 = ArrayUstensiles.filter((item) => {
                  let thisId = item.id;
                  let Ustensil = [...new Set(item.ustensiles)];
                  Ustensil.forEach((Usten) => {
                    if (siblingElementText == Usten) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                IdYToDelete.forEach((IdYToDeleteUss) => {
                  function DisplayduplicateElementaAfterDelete() {
                    duplicateElementa.filter((item) => {
                      if (IdYToDeleteUss == item) {
                        duplicateElementa.pop(IdYToDeleteUss);
                        section.innerHTML = "";
                        AfficheBlockResultat(duplicateElementa);
                        //console.log(duplicateElementa);
                      }
                    });
                  }
                  DisplayduplicateElementaAfterDelete();
                  //----------------si duplicate est vide----------------
                  AllIdtoDisplays.pop(IdYToDeleteUss);
                  if (afficheClickIng.childElementCount == 1) {
                    section.innerHTML = "";
                    AfficheBlockResultat(AllIdtoDisplays);
                  } else if (AllIdtoDisplays == "") {
                    section.innerHTML = "";
                    newFuntion();
                  }
                });
              });
            });
          }
          decocherSearch();
        }
        // Gestion du clic sur les éléments d'ingrédient
        elementsPara1.forEach((element, index) => {
          element.addEventListener("click", () => {
            searchAndDisplayResults(
              element,
              index,
              elementsPara1,
              "ingredient"
            );
          });
        });
        // Gestion du clic sur les éléments d'appareil
        elementsPara2.forEach((element, index) => {
          element.addEventListener("click", () => {
            searchAndDisplayResults(element, index, elementsPara2, "appareil");
          });
        });
        // Gestion du clic sur les éléments d'ustensil
        elementsPara3.forEach((element, index) => {
          element.addEventListener("click", () => {
            searchAndDisplayResults(element, index, elementsPara3, "ustensil");
          });
        });
      });
    }
  });
}
fetchRecipes();
