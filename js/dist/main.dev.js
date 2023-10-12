"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var afficheClickIng = document.querySelector(".afficheClickIng");
var section = document.querySelector("section");
var fa_down = document.querySelectorAll(".fa-chevron-down");
var fa_up = document.querySelectorAll(".fa-chevron-up");
var container_info = document.querySelectorAll(".container_info");
var input_container = document.querySelectorAll(".input_container");
var containt_element_Serach = document.querySelectorAll(".containt_element_Serach");
var containt_info = document.querySelectorAll(".containt_info"); //------------les 3 bares de recherche-------------------

var _loop = function _loop(_i) {
  fa_down[_i].addEventListener("click", function () {
    container_info[_i].classList.add("container_infoAfter");

    input_container[_i].classList.add("input_containerAfter");

    containt_element_Serach[_i].classList.add("containt_element_SerachAfter");
  });
};

for (var _i = 0; _i < fa_down.length; _i++) {
  _loop(_i);
}

var _loop2 = function _loop2(_i2) {
  fa_up[_i2].addEventListener("click", function () {
    container_info[_i2].classList.remove("container_infoAfter");

    input_container[_i2].classList.remove("input_containerAfter");

    containt_element_Serach[_i2].classList.remove("containt_element_SerachAfter");
  });
};

for (var _i2 = 0; _i2 < fa_up.length; _i2++) {
  _loop2(_i2);
}

var elementsPara1 = [];
var elementsPara2 = [];
var elementsPara3 = [];
var AllIdtoDisplays = [];
var result = []; //-----------------function fetch-------------------------------------

function fetchRecipes() {
  fetch("http://127.0.0.1:5500/data/recipes.json").then(function (res) {
    if (res.ok) {
      res.json().then(function (data) {
        var recipes = data.recipes; //------array des elemznt----------------

        var AllIngredient = [];
        var ArrayIngredient = [{
          id: "X"
        }];
        var AllAppareil = [];
        var ArrayAppareil = [{
          id: "X"
        }];
        var AllUstensiles = [];
        var ArrayUstensiles = [{
          id: "X"
        }]; //----functiopn affiche block in html-----------

        function newFuntion() {
          var _loop3 = function _loop3() {
            var ingredient = recipes[i].ingredients;
            var textIngre = "";
            ingredient.forEach(function (ingred) {
              textIngre = textIngre + " " + ingred.ingredient + "    :";

              if (ingred.quantity != undefined) {
                textIngre = textIngre + "" + ingred.quantity;
              }

              if (ingred.unit != undefined) {
                textIngre = textIngre + " " + ingred.unit + "<br/>";
              }
            });
            section.innerHTML += "\n      <div class=\"containerAll\">\n          <div class=\"imgNone\"></div>\n          <div class=\"lesInfos\">\n              <div class=\"tittle_time\">\n                  <div class=\"tittle\">\n                      <h3>".concat(recipes[i].name, "</h3>\n                  </div>\n                  <div class=\"time\">\n                      <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                      <p>").concat(recipes[i].time, " min</p>\n                  </div>\n\n              </div>\n\n              <div class=\"ingredient_demo\">\n                  <div class=\"ingredient\"> \n                    <p> ").concat(textIngre, " </p>  \n                  </div>\n                  <div class=\"demo\">\n                  ").concat(recipes[i].description, "\n                  </div>\n              </div>\n          </div>\n      </div>\n      ");
          };

          for (i = 0; i < recipes.length; i++) {
            _loop3();
          }
        }

        newFuntion(); // Fonction pour extraire les ingrédients appareils et ustensil uniques--

        function extractIngredientsAndAppareilsAndUstensil() {
          recipes.forEach(function (recipe) {
            var tableauxIngredients = [];
            var ingredients = recipe.ingredients;

            for (var a = 0; a < ingredients.length; a++) {
              var ingredientName = ingredients[a].ingredient;
              tableauxIngredients.push(ingredientName.toLowerCase());
              AllIngredient.push(ingredientName.toLowerCase());

              if (ArrayIngredient[ArrayIngredient.length - 1].id != recipe.id) {
                ArrayIngredient.push({
                  id: recipe.id,
                  ingredient: tableauxIngredients
                });
              }
            } //--------------------appareil------------------


            var appareilName = recipe.appliance.toLowerCase();
            var tableauxAppareil = [];
            AllAppareil.push(appareilName.toLowerCase());
            tableauxAppareil.push(appareilName.toLowerCase());

            if (ArrayAppareil[ArrayAppareil.length - 1].id != recipe.id) {
              ArrayAppareil.push({
                id: recipe.id,
                appareil: tableauxAppareil
              });
            } //---------------------ustensil----------------------


            var ustensiles = recipe.ustensils;
            var tableauxUstensil = [];

            for (var _a = 0; _a < ustensiles.length; _a++) {
              AllUstensiles.push(ustensiles[_a].toLowerCase());
              tableauxUstensil.push(ustensiles[_a].toLowerCase());

              if (ArrayUstensiles[ArrayUstensiles.length - 1].id != recipe.id) {
                ArrayUstensiles.push({
                  id: recipe.id,
                  ustensiles: tableauxUstensil
                });
              }
            }
          });
        }

        extractIngredientsAndAppareilsAndUstensil(); // Fonction pour afficher les éléments uniques dans les blocs de recherche--

        function displayUniqueElements() {
          function createParaElement(className, textContent) {
            var paraElement = document.createElement("p");
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

          var AllIngredientNondupliquate = _toConsumableArray(new Set(AllIngredient));

          var AllAppareilNondupliquate = _toConsumableArray(new Set(AllAppareil));

          var AllUstensilesNondupliquate = _toConsumableArray(new Set(AllUstensiles));

          AllIngredientNondupliquate.forEach(function (item) {
            var paraElement = createParaElement("para1", item);
            addElementToContainer(paraElement, containt_info[0]);
          });
          AllAppareilNondupliquate.forEach(function (item) {
            var paraElement = createParaElement("para2", item);
            addAppareilToContainer(paraElement, containt_info[1]);
          });
          AllUstensilesNondupliquate.forEach(function (item) {
            var paraElement = createParaElement("para3", item);
            addUstensilToContainer(paraElement, containt_info[2]);
          });
        }

        displayUniqueElements(); // Fonction pour rechercher et afficher les résultats en fonction de l'élément cliqué

        function searchAndDisplayResults(element, index, elementsPara, type) {
          section.innerHTML = "";
          var elementText = element.textContent;

          if (element.className == "para1") {
            afficheClickIng.innerHTML += "\n            <div class=\"containeAffiche2\" style=\"background-color: #3282f7\">\n              <p class=\"text\">".concat(elementText, "</p>\n              <i class=\"fa fa-times close\" aria-hidden=\"true\"></i>\n            </div>\n          ");
            var AllTheIdFor = [];

            var _result = ArrayIngredient.filter(function (item) {
              var thisId = item.id;

              var ingredients = _toConsumableArray(new Set(item.ingredient));

              ingredients.forEach(function (Ingr) {
                if (elementText == Ingr) {
                  AllTheIdFor.push(thisId); //---les id que je doit afficher---

                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          } else if (element.className == "para2") {
            afficheClickIng.innerHTML += "\n            <div class=\"containeAffiche2\" style=\"background-color: #68d9a4\">\n              <p class=\"text\">".concat(elementText, "</p>\n              <i class=\"fa fa-times close\" aria-hidden=\"true\"></i>\n            </div>\n          ");
            var _AllTheIdFor = [];

            var _result2 = ArrayAppareil.filter(function (item) {
              var thisId = item.id;

              var Appareil = _toConsumableArray(new Set(item.appareil));

              Appareil.forEach(function (App) {
                if (elementText == App) {
                  _AllTheIdFor.push(thisId); //----------les id que je doit afficher-----------


                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          } else if (element.className == "para3") {
            afficheClickIng.innerHTML += "\n            <div class=\"containeAffiche2\" style=\"background-color: #ed6454\">\n              <p class=\"text\">".concat(elementText, "</p>\n              <i class=\"fa fa-times close\" aria-hidden=\"true\"></i>\n            </div>\n          ");
            var _AllTheIdFor2 = [];

            var _result3 = ArrayUstensiles.filter(function (item) {
              var thisId = item.id;

              var Ustensil = _toConsumableArray(new Set(item.ustensiles));

              Ustensil.forEach(function (Usten) {
                if (elementText == Usten) {
                  _AllTheIdFor2.push(thisId); //---les id que je doit afficher---


                  AllIdtoDisplays.push(thisId);
                }
              });
            });
          } // Recherche des résultats correspondant à l'élément cliqué
          //console.log(AllIdtoDisplays);


          function AfficheBlockResultat(ajout) {
            var _loop4 = function _loop4() {
              var ingredient = recipes[i].ingredients;
              var textIngre = "";
              ingredient.forEach(function (ingred) {
                textIngre = textIngre + " " + ingred.ingredient + "    :";

                if (ingred.quantity != undefined) {
                  textIngre = textIngre + "" + ingred.quantity;
                }

                if (ingred.unit != undefined) {
                  textIngre = textIngre + " " + ingred.unit + "<br/>";
                }
              });

              if (ajout.includes(recipes[i].id)) {
                section.innerHTML += "\n                          <div class=\"containerAll\">\n                              <div class=\"imgNone\"></div>\n                              <div class=\"lesInfos\">\n                                  <div class=\"tittle_time\">\n                                      <div class=\"tittle\">\n                                          <h3>".concat(recipes[i].name, "</h3>\n                                      </div>\n                                      <div class=\"time\">\n                                          <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                          <p>").concat(recipes[i].time, " min</p>\n                                      </div>\n                    \n                                  </div>\n                    \n                                  <div class=\"ingredient_demo\">\n                                      <div class=\"ingredient\"> \n                                        <p> ").concat(textIngre, " </p>  \n                                      </div>\n                                      <div class=\"demo\">\n                                      ").concat(recipes[i].description, "\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          ");
              }
            };

            for (i = 0; i < recipes.length; i++) {
              _loop4();
            }
          } //
          //--------------stocke les duplications et afficher------------


          function getElementsWithMultipleOccurrences(arr) {
            var occurrences = {}; // Compter les occurrences de chaque élément

            arr.forEach(function (element) {
              if (occurrences[element]) {
                occurrences[element]++;
              } else {
                occurrences[element] = 1;
              }
            }); // Filtrer les éléments avec une occurrence supérieure à 1

            Object.keys(occurrences).forEach(function (key) {
              if (occurrences[key] > 1) {
                result.push(Number(key)); // Convertir la clé en nombre (car les clés d'objets sont des chaînes de caractères)
              }
            });
            return result;
          }

          var duplicateElementa = getElementsWithMultipleOccurrences(AllIdtoDisplays); //console.log(duplicateElementa);

          if (duplicateElementa == "") {
            AfficheBlockResultat(AllIdtoDisplays);
          } else {
            AfficheBlockResultat(duplicateElementa);
          } // -----------------Décochez tous les boutons de catégorie----------


          function decocherSearch() {
            var closes = document.querySelectorAll(".fa-times");
            closes.forEach(function (closes) {
              closes.addEventListener("click", function (e) {
                //console.log(afficheClickIng.childElementCount);
                var siblingElement = e.target.parentElement;
                siblingElement.remove();
                var siblingElementText = e.target.parentElement.firstChild.nextSibling.textContent; //------------les id qu'on doit delete----------------

                var IdYToDelete = []; //--------push delete id ingre-----

                var result1 = ArrayIngredient.filter(function (item) {
                  var thisId = item.id;

                  var ingredients = _toConsumableArray(new Set(item.ingredient));

                  ingredients.forEach(function (Ingr) {
                    if (siblingElementText == Ingr) {
                      IdYToDelete.push(thisId);
                    }
                  });
                }); //--------push delete id appareil-----

                var result2 = ArrayAppareil.filter(function (item) {
                  var thisId = item.id;

                  var Appareil = _toConsumableArray(new Set(item.appareil));

                  Appareil.forEach(function (App) {
                    if (siblingElementText == App) {
                      IdYToDelete.push(thisId);
                    }
                  });
                }); //--------push delete id usten-----

                var result3 = ArrayUstensiles.filter(function (item) {
                  var thisId = item.id;

                  var Ustensil = _toConsumableArray(new Set(item.ustensiles));

                  Ustensil.forEach(function (Usten) {
                    if (siblingElementText == Usten) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                IdYToDelete.forEach(function (IdYToDeleteUss) {
                  function DisplayduplicateElementaAfterDelete() {
                    duplicateElementa.filter(function (item) {
                      if (IdYToDeleteUss == item) {
                        duplicateElementa.pop(IdYToDeleteUss);
                        section.innerHTML = "";
                        AfficheBlockResultat(duplicateElementa); //console.log(duplicateElementa);
                      }
                    });
                  }

                  DisplayduplicateElementaAfterDelete(); //----------------si duplicate est vide----------------

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
        } // Gestion du clic sur les éléments d'ingrédient


        elementsPara1.forEach(function (element, index) {
          element.addEventListener("click", function () {
            searchAndDisplayResults(element, index, elementsPara1, "ingredient");
          });
        }); // Gestion du clic sur les éléments d'appareil

        elementsPara2.forEach(function (element, index) {
          element.addEventListener("click", function () {
            searchAndDisplayResults(element, index, elementsPara2, "appareil");
          });
        }); // Gestion du clic sur les éléments d'ustensil

        elementsPara3.forEach(function (element, index) {
          element.addEventListener("click", function () {
            searchAndDisplayResults(element, index, elementsPara3, "ustensil");
          });
        });
      });
    }
  });
}

fetchRecipes();