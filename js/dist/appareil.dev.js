"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//-------------------------fecth appareil----------------------------------
fetch("http://127.0.0.1:5500/data/recipes.json").then(function (res) {
  if (res.ok) {
    res.json().then(function (data) {
      var recipes = data.recipes;
      var AllAppareil = [];
      var ArrayAppareil = [{
        id: "X"
      }]; //--------------

      function newFuntion() {
        var _loop = function _loop() {
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
          _loop();
        }
      } //----------------function-extraireIngredien----------------------------


      function extraireIngredien() {
        for (i = 0; i < recipes.length; i++) {
          var ArrayApareilSpecifique = [];
          var appareilInner = recipes[i].appliance;
          AllAppareil.push(appareilInner.toLowerCase());
          ArrayApareilSpecifique.push(appareilInner.toLowerCase());

          if (ArrayAppareil[ArrayAppareil.length - 1].id != recipes[i].id) {
            ArrayAppareil.push({
              id: recipes[i].id,
              appareil: ArrayApareilSpecifique
            });
          }
        }
      }

      extraireIngredien(); //-----------------suppresion des elements dupliquer--------------------

      function deleteduplication() {
        AllAppareilNondupliquate = _toConsumableArray(new Set(AllAppareil));
        AllAppareilNondupliquate.forEach(function (AllAppareilNondupliquateForEach) {
          // Créez un élément p avec une classe "para1"
          var paraElement = document.createElement("p");
          paraElement.className = "para2";
          paraElement.textContent = AllAppareilNondupliquateForEach; // Ajoutez l'élément à la variable elementsPara1

          elementsPara2.push(paraElement); // Ajoutez l'élément à containt_info[0]

          containt_info[1].appendChild(paraElement);
        });
      }

      deleteduplication(); //-----------------affichage des blocs de recherche--------------------

      var AllId = [{
        element: "X",
        ids: []
      }];
      elementsPara2.map(function (item) {
        var mesPara = item;
        mesPara.addEventListener("click", function (e) {
          section.innerHTML = "";
          var element = e.target.lastChild.textContent;
          afficheClickIng.innerHTML += "\n            <div class=\"containeAffiche2\" style=\"background-color: #68d9a4\">\n            <p class=\"text\">".concat(element, "</p>\n            <i class=\"fa fa-times close\" aria-hidden=\"true\"></i>\n            </div>\n            "); //-------------------recherche- avec le click---------------------

          var AllTheIdFor = [];
          var result = ArrayAppareil.filter(function (item) {
            var thisId = item.id;

            var Appareil = _toConsumableArray(new Set(item.appareil));

            Appareil.forEach(function (App) {
              if (element == App) {
                AllTheIdFor.push(thisId);

                if (AllId[AllId.length - 1].element != element) {
                  AllId.push({
                    element: element,
                    ids: AllTheIdFor
                  });
                } //----------les id que je doit afficher-----------


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
            var _loop2 = function _loop2() {
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
                section.innerHTML += "\n                          <div class=\"containerAll\">\n                              <div class=\"imgNone\"></div>\n                              <div class=\"lesInfos\">\n                                  <div class=\"tittle_time\">\n                                      <div class=\"tittle\">\n                                          <h3>".concat(recipes[i].name, "</h3>\n                                      </div>\n                                      <div class=\"time\">\n                                          <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                          <p>").concat(recipes[i].time, " min</p>\n                                      </div>\n                    \n                                  </div>\n                    \n                                  <div class=\"ingredient_demo\">\n                                      <div class=\"ingredient\"> \n                                        <p> ").concat(textIngre, " </p>  \n                             </div>\n                          <div class=\"demo\">\n                          ").concat(recipes[i].description, "\n                         </div>\n                        </div>\n                    </div>\n                   </div>\n                 ");
              }
            };

            for (i = 0; i < recipes.length; i++) {
              _loop2();
            }
          }

          if (result == "") {
            AfficheBlockResultat();
          } else {
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

              if (duplicateElementa.includes(recipes[i].id)) {
                section.innerHTML += "\n                            <div class=\"containerAll\">\n                                <div class=\"imgNone\"></div>\n                                <div class=\"lesInfos\">\n                                    <div class=\"tittle_time\">\n                                        <div class=\"tittle\">\n                                <h3>".concat(recipes[i].name, "</h3>\n                                   </div>\n                                   <div class=\"time\">\n                                            <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                       <p>").concat(recipes[i].time, " min</p>\n                                   </div>\n                      \n                              </div>\n                      \n                              <div class=\"ingredient_demo\">\n                               <div class=\"ingredient\"> \n                                <p> ").concat(textIngre, " </p>  \n                                 </div>\n                             <div class=\"demo\">\n                          ").concat(recipes[i].description, "\n                         </div>\n                    </div>\n                </div>\n                </div>\n                ");
              }
            };

            //console.log(duplicateElementa);
            for (i = 0; i < recipes.length; i++) {
              _loop3();
            }
          } // -----------------Décochez tous les boutons de catégorie----------


          function decocherSearch() {
            var closes = document.querySelectorAll(".fa-times");
            closes.forEach(function (closes) {
              closes.addEventListener("click", function (e) {
                var siblingElement = e.target.parentElement;
                siblingElement.remove();
                var siblingElementText = e.target.parentElement.firstChild.nextSibling.textContent; //------------les id qu'on doit delete----------------

                var IdYToDelete = [];
                var result = ArrayAppareil.filter(function (item) {
                  var thisId = item.id;

                  var Appareil = _toConsumableArray(new Set(item.appareil));

                  Appareil.forEach(function (App) {
                    if (siblingElementText == App) {
                      IdYToDelete.push(thisId);
                    }
                  });
                });
                IdYToDelete.forEach(function (IdYToDeleteUss) {
                  AllIdtoDisplays.pop(IdYToDeleteUss);

                  if (afficheClickIng.children.length == 1) {
                    section.innerHTML = "";
                    console.log(AllIdtoDisplays);

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

                      if (AllIdtoDisplays.includes(recipes[i].id)) {
                        section.innerHTML += "\n                                  <div class=\"containerAll\">\n                                      <div class=\"imgNone\"></div>\n                                      <div class=\"lesInfos\">\n                                          <div class=\"tittle_time\">\n                                              <div class=\"tittle\">\n                                                  <h3>".concat(recipes[i].name, "</h3>\n                                              </div>\n                                              <div class=\"time\">\n                                                  <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                                  <p>").concat(recipes[i].time, " min</p>\n                                              </div>\n                            \n                                          </div>\n                            \n                                          <div class=\"ingredient_demo\">\n                                              <div class=\"ingredient\"> \n                                                <p> ").concat(textIngre, " </p>  \n                                              </div>\n                                              <div class=\"demo\">\n                                  ").concat(recipes[i].description, "\n                                </div>\n                             </div>\n                           </div>\n                         </div>\n                     ");
                      }
                    };

                    for (i = 0; i < recipes.length; i++) {
                      _loop4();
                    }
                  } //----function DisplayduplicateElementaAfterDelete---------


                  function DisplayduplicateElementaAfterDelete() {
                    duplicateElementa.filter(function (item) {
                      if (IdYToDeleteUss == item) {
                        duplicateElementa.pop(IdYToDeleteUss);
                        console.log(duplicateElementa);

                        if (afficheClickIng.children.length > 1) {
                          section.innerHTML = "";

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
                              section.innerHTML += "\n                                        <div class=\"containerAll\">\n                                            <div class=\"imgNone\"></div>\n                                            <div class=\"lesInfos\">\n                                                <div class=\"tittle_time\">\n                                                    <div class=\"tittle\">\n                                                        <h3>".concat(recipes[i].name, "</h3>\n                                                    </div>\n                                                    <div class=\"time\">\n                                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                                        <p>").concat(recipes[i].time, " min</p>\n                                                    </div>\n                                  \n                                                </div>\n                                  \n                                                <div class=\"ingredient_demo\">\n                                                    <div class=\"ingredient\"> \n                                                      <p> ").concat(textIngre, " </p>  \n                                                    </div>\n                                                    <div class=\"demo\">\n                                        ").concat(recipes[i].description, "\n                                      </div>\n                                   </div>\n                                 </div>\n                               </div>\n                           ");
                            }
                          };

                          for (i = 0; i < recipes.length; i++) {
                            _loop5();
                          }
                        }
                      }
                    });
                  }

                  DisplayduplicateElementaAfterDelete();

                  if (AllIdtoDisplays == "") {
                    return newFuntion();
                  }
                });
              });
            });
          }

          decocherSearch();
        });
      });
    });
  }
});