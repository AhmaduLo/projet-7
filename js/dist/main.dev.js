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
var AllIdtoDisplays = [];
var result = []; //-------------------------fecth ingredients----------------------------

fetch("http://127.0.0.1:5500/data/recipes.json").then(function (res) {
  if (res.ok) {
    res.json().then(function (data) {
      var recipes = data.recipes;
      var ArrayRecipes = [{
        id: "X"
      }];
      var AllIngredient = []; //   let ArrayRecipes = [{ id: "X" }]
      //----functiopn affiche block in html-----------

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

      newFuntion(); //----------------function-----extraireIngredien----------------------------

      function extraireIngredien() {
        for (i = 0; i < recipes.length; i++) {
          var ArrayIngredients = [];
          var ingredients = recipes[i].ingredients;

          for (var a = 0; a < ingredients.length; a++) {
            var ingredInner = ingredients[a].ingredient;
            ArrayIngredients.push(ingredInner.toLowerCase());
            AllIngredient.push(ingredInner.toLowerCase());

            if (ArrayRecipes[ArrayRecipes.length - 1].id != recipes[i].id) {
              ArrayRecipes.push({
                id: recipes[i].id,
                ingredient: ArrayIngredients
              });
            }
          }
        }
      }

      extraireIngredien(); //-----------------suppresion des elements dupliquer--------------------

      function deleteduplication() {
        AllIngredientNondupliquate = _toConsumableArray(new Set(AllIngredient));
        AllIngredientNondupliquate.forEach(function (AllIngredientNondupliquateForEach) {
          // Créez un élément p avec une classe "para1"
          var paraElement = document.createElement("p");
          paraElement.className = "para1";
          paraElement.textContent = AllIngredientNondupliquateForEach; // Ajoutez l'élément à la variable elementsPara1

          elementsPara1.push(paraElement); // Ajoutez l'élément à containt_info[0]

          containt_info[0].appendChild(paraElement);
        });
      }

      deleteduplication(); //-----------------affichage des blocs de recherche--------------------

      var AllId = [{
        element: "X",
        ids: []
      }];
      elementsPara1.map(function (item) {
        var mesPara = item;
        mesPara.addEventListener("click", function (e) {
          section.innerHTML = "";
          var element = e.target.lastChild.textContent;
          afficheClickIng.innerHTML += "\n            <div class=\"containeAffiche2\" style=\"background-color: #3282f7\">\n            <p class=\"text\">".concat(element, "</p>\n            <i class=\"fa fa-times close\" aria-hidden=\"true\"></i>\n            </div>\n            "); //-------------------recherche- avec le click---------------------

          var AllTheIdFor = [];
          var result = ArrayRecipes.filter(function (item) {
            var thisId = item.id;

            var ingredients = _toConsumableArray(new Set(item.ingredient));

            ingredients.forEach(function (Ingr) {
              if (element == Ingr) {
                AllTheIdFor.push(thisId);

                if (AllId[AllId.length - 1].element != element) {
                  AllId.push({
                    element: element,
                    ids: AllTheIdFor
                  });
                } //---les id que je doit afficher---


                AllIdtoDisplays.push(thisId);
              }
            });
          }); //--------------stocke les duplications------------

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

          var duplicateElementa = getElementsWithMultipleOccurrences(AllIdtoDisplays); //------------delete dupplication des id-------

          var AllIdtoDisplaysNotDupliquate = _toConsumableArray(new Set(AllIdtoDisplays));

          section.innerHTML = ""; //-------afficher les resultats obtenu----------

          function AfficheBlockResultat() {
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

              if (AllIdtoDisplaysNotDupliquate.includes(recipes[i].id)) {
                section.innerHTML += "\n                          <div class=\"containerAll\">\n                              <div class=\"imgNone\"></div>\n                              <div class=\"lesInfos\">\n                                  <div class=\"tittle_time\">\n                                      <div class=\"tittle\">\n                                          <h3>".concat(recipes[i].name, "</h3>\n                                      </div>\n                                      <div class=\"time\">\n                                          <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                          <p>").concat(recipes[i].time, " min</p>\n                                      </div>\n                    \n                                  </div>\n                    \n                                  <div class=\"ingredient_demo\">\n                                      <div class=\"ingredient\"> \n                                        <p> ").concat(textIngre, " </p>  \n                                      </div>\n                                      <div class=\"demo\">\n                                      ").concat(recipes[i].description, "\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          ");
              }
            };

            for (i = 0; i < recipes.length; i++) {
              _loop4();
            }
          }

          if (result == "") {
            AfficheBlockResultat();
          } else {
            var _loop5 = function _loop5() {
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

              if (duplicateElementa.includes(recipes[i].id)) {
                section.innerHTML += "\n                            <div class=\"containerAll\">\n                                <div class=\"imgNone\"></div>\n                                <div class=\"lesInfos\">\n                                    <div class=\"tittle_time\">\n                                        <div class=\"tittle\">\n                                <h3>".concat(recipes[i].name, "</h3>\n                                   </div>\n                                   <div class=\"time\">\n                                            <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                       <p>").concat(recipes[i].time, " min</p>\n                                   </div>\n                      \n                              </div>\n                      \n                              <div class=\"ingredient_demo\">\n                               <div class=\"ingredient\"> \n                                <p> ").concat(textIngre, " </p>  \n                                 </div>\n                             <div class=\"demo\">\n                          ").concat(recipes[i].description, "\n                         </div>\n                    </div>\n                </div>\n                </div>\n                ");
              }
            };

            //console.log(duplicateElementa);
            for (i = 0; i < recipes.length; i++) {
              _loop5();
            }
          } // -----------------Décochez tous les boutons de catégorie----------


          function decocherSearch() {
            var closes = document.querySelectorAll(".fa-times");
            closes.forEach(function (closes) {
              closes.addEventListener("click", function (e) {
                var siblingElement = e.target.parentElement;
                siblingElement.remove();
                var siblingElementText = e.target.parentElement.firstChild.nextSibling.textContent; //section.innerHTML = "";
                //------------les id qu'on doit delete----------------

                var IdYToDelete = [];
                var result = ArrayRecipes.filter(function (item) {
                  var thisId = item.id;

                  var ingredients = _toConsumableArray(new Set(item.ingredient));

                  ingredients.forEach(function (Ingr) {
                    if (siblingElementText == Ingr) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                IdYToDelete.forEach(function (IdYToDeleteUss) {
                  AllIdtoDisplays.pop(IdYToDeleteUss);

                  if (afficheClickIng.children.length == 1) {
                    section.innerHTML = "";
                    console.log(AllIdtoDisplays);

                    var _loop6 = function _loop6() {
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

                      if (AllIdtoDisplays.includes(recipes[i].id)) {
                        section.innerHTML += "\n                                  <div class=\"containerAll\">\n                                      <div class=\"imgNone\"></div>\n                                      <div class=\"lesInfos\">\n                                          <div class=\"tittle_time\">\n                                              <div class=\"tittle\">\n                                                  <h3>".concat(recipes[i].name, "</h3>\n                                              </div>\n                                              <div class=\"time\">\n                                                  <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                                  <p>").concat(recipes[i].time, " min</p>\n                                              </div>\n                            \n                                          </div>\n                            \n                                          <div class=\"ingredient_demo\">\n                                              <div class=\"ingredient\"> \n                                                <p> ").concat(textIngre, " </p>  \n                                              </div>\n                                              <div class=\"demo\">\n                                  ").concat(recipes[i].description, "\n                                </div>\n                             </div>\n                           </div>\n                         </div>\n                     ");
                      }
                    };

                    for (i = 0; i < recipes.length; i++) {
                      _loop6();
                    }
                  } //----function DisplayduplicateElementaAfterDelete---------


                  function DisplayduplicateElementaAfterDelete() {
                    duplicateElementa.filter(function (item) {
                      if (IdYToDeleteUss == item) {
                        duplicateElementa.pop(IdYToDeleteUss);
                        console.log(duplicateElementa);

                        if (afficheClickIng.children.length > 1) {
                          section.innerHTML = "";

                          var _loop7 = function _loop7() {
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

                            if (duplicateElementa.includes(recipes[i].id)) {
                              section.innerHTML += "\n                                        <div class=\"containerAll\">\n                                            <div class=\"imgNone\"></div>\n                                            <div class=\"lesInfos\">\n                                                <div class=\"tittle_time\">\n                                                    <div class=\"tittle\">\n                                                        <h3>".concat(recipes[i].name, "</h3>\n                                                    </div>\n                                                    <div class=\"time\">\n                                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                                        <p>").concat(recipes[i].time, " min</p>\n                                                    </div>\n                                  \n                                                </div>\n                                  \n                                                <div class=\"ingredient_demo\">\n                                                    <div class=\"ingredient\"> \n                                                      <p> ").concat(textIngre, " </p>  \n                                                    </div>\n                                                    <div class=\"demo\">\n                                        ").concat(recipes[i].description, "\n                                      </div>\n                                   </div>\n                                 </div>\n                               </div>\n                           ");
                            }
                          };

                          for (i = 0; i < recipes.length; i++) {
                            _loop7();
                          }
                        } //else {
                        //   AllIdtoDisplays.pop(IdYToDeleteUss);
                        //   // console.log(AllIdtoDisplays);
                        //   for (i = 0; i < recipes.length; i++) {
                        //     let ingredient = recipes[i].ingredients;
                        //     let textIngre = "";
                        //     ingredient.forEach((ingred) => {
                        //       textIngre =
                        //         textIngre + " " + ingred.ingredient + "    :";
                        //       if (ingred.quantity != undefined) {
                        //         textIngre = textIngre + "" + ingred.quantity;
                        //       }
                        //       if (ingred.unit != undefined) {
                        //         textIngre =
                        //           textIngre + " " + ingred.unit + "<br/>";
                        //       }
                        //     });
                        //     if (AllIdtoDisplays.includes(recipes[i].id)) {
                        //       section.innerHTML += `
                        //                 <div class="containerAll">
                        //                     <div class="imgNone"></div>
                        //                     <div class="lesInfos">
                        //                         <div class="tittle_time">
                        //                             <div class="tittle">
                        //                                 <h3>${recipes[i].name}</h3>
                        //                             </div>
                        //                             <div class="time">
                        //                                 <i class="fa fa-clock-o" aria-hidden="true"></i>
                        //                                 <p>${recipes[i].time} min</p>
                        //                             </div>
                        //                         </div>
                        //                         <div class="ingredient_demo">
                        //                             <div class="ingredient">
                        //                               <p> ${textIngre} </p>
                        //                             </div>
                        //                             <div class="demo">
                        //                             ${recipes[i].description}
                        //                             </div>
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //                 `;
                        //     }
                        //   }
                        // }

                      }
                    });
                  } //----function DisplayAllIdtoDisplaysAfterDelete---------
                  // function DisplayAllIdtoDisplaysAfterDelete() {
                  // if (afficheClickIng.children.length == 1) {
                  //   AllIdtoDisplays.pop(IdYToDeleteUss);
                  //   section.innerHTML = "";
                  //   console.log(AllIdtoDisplays);
                  //   for (i = 0; i < recipes.length; i++) {
                  //     let ingredient = recipes[i].ingredients;
                  //     let textIngre = "";
                  //     ingredient.forEach((ingred) => {
                  //       textIngre =
                  //         textIngre + " " + ingred.ingredient + "    :";
                  //       if (ingred.quantity != undefined) {
                  //         textIngre = textIngre + "" + ingred.quantity;
                  //       }
                  //       if (ingred.unit != undefined) {
                  //         textIngre = textIngre + " " + ingred.unit + "<br/>";
                  //       }
                  //     });
                  //     if (AllIdtoDisplays.includes(recipes[i].id)) {
                  //       section.innerHTML += `
                  //                 <div class="containerAll">
                  //                     <div class="imgNone"></div>
                  //                     <div class="lesInfos">
                  //                         <div class="tittle_time">
                  //                             <div class="tittle">
                  //                                 <h3>${recipes[i].name}</h3>
                  //                             </div>
                  //                             <div class="time">
                  //                                 <i class="fa fa-clock-o" aria-hidden="true"></i>
                  //                                 <p>${recipes[i].time} min</p>
                  //                             </div>
                  //                         </div>
                  //                         <div class="ingredient_demo">
                  //                             <div class="ingredient">
                  //                               <p> ${textIngre} </p>
                  //                             </div>
                  //                             <div class="demo">
                  //                 ${recipes[i].description}
                  //               </div>
                  //            </div>
                  //          </div>
                  //        </div>
                  //    `;
                  //     }
                  //   }
                  // }
                  //  }


                  DisplayduplicateElementaAfterDelete(); // DisplayAllIdtoDisplaysAfterDelete();

                  if (AllIdtoDisplays == "") {
                    return newFuntion();
                  }
                });
              });
            });
          }

          decocherSearch();
        }); //-----------
      }); //-------------------------------------
      //----------------------------------
    }); //---fin fetch
  }
});