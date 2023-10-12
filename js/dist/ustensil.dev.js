// fetch("http://127.0.0.1:5500/data/recipes.json").then((res) => {
//   if (res.ok) {
//     res.json().then((data) => {
//       let recipes = data.recipes;
//       let AllUstensiles = [];
//       let ArrayUstensiles = [{ id: "X" }];
//       //----------------------------------------------------
//       function newFuntion() {
//         for (i = 0; i < recipes.length; i++) {
//           let ingredient = recipes[i].ingredients;
//           let textIngre = "";
//           ingredient.forEach((ingred) => {
//             textIngre = textIngre + " " + ingred.ingredient + "    :";
//             if (ingred.quantity != undefined) {
//               textIngre = textIngre + "" + ingred.quantity;
//             }
//             if (ingred.unit != undefined) {
//               textIngre = textIngre + " " + ingred.unit + "<br/>";
//             }
//           });
//           section.innerHTML += `
//       <div class="containerAll">
//           <div class="imgNone"></div>
//           <div class="lesInfos">
//               <div class="tittle_time">
//                   <div class="tittle">
//                       <h3>${recipes[i].name}</h3>
//                   </div>
//                   <div class="time">
//                       <i class="fa fa-clock-o" aria-hidden="true"></i>
//                       <p>${recipes[i].time} min</p>
//                   </div>
//               </div>
//               <div class="ingredient_demo">
//                   <div class="ingredient"> 
//                     <p> ${textIngre} </p>  
//                   </div>
//                   <div class="demo">
//                   ${recipes[i].description}
//                   </div>
//               </div>
//           </div>
//       </div>
//       `;
//         }
//       }
//       //----------------function-----extraireIngredien----------------------------
//       function extraireIngredien() {
//         for (let i = 0; i < recipes.length; i++) {
//           let ArrayAllUstensile = [];
//           const ustensiles = recipes[i].ustensils;
//           for (let a = 0; a < ustensiles.length; a++) {
//             AllUstensiles.push(ustensiles[a].toLowerCase());
//             ArrayAllUstensile.push(ustensiles[a].toLowerCase());
//             if (
//               ArrayUstensiles[ArrayUstensiles.length - 1].id != recipes[i].id
//             ) {
//               ArrayUstensiles.push({
//                 id: recipes[i].id,
//                 ustensiles: ArrayAllUstensile,
//               });
//             }
//           }
//         }
//       }
//       extraireIngredien();
//       //-----------------suppresion des elements dupliquer--------------------
//       function deleteduplication() {
//         AllUstensilesNondupliquate = [...new Set(AllUstensiles)];
//         AllUstensilesNondupliquate.forEach(
//           (AllUstensilesNondupliquateForEach) => {
//             // Créez un élément p avec une classe "para1"
//             const paraElement = document.createElement("p");
//             paraElement.className = "para3";
//             paraElement.textContent = AllUstensilesNondupliquateForEach;
//             // Ajoutez l'élément à la variable elementsPara1
//             elementsPara3.push(paraElement);
//             // Ajoutez l'élément à containt_info[0]
//             containt_info[2].appendChild(paraElement);
//           }
//         );
//       }
//       deleteduplication();
//       //---------------------clique du para------------------------------
//       let AllId = [{ element: "X", ids: [] }];
//       elementsPara3.map((item) => {
//         const mesPara = item;
//         mesPara.addEventListener("click", (e) => {
//           section.innerHTML = "";
//           const element = e.target.lastChild.textContent;
//           afficheClickIng.innerHTML += `
//               <div class="containeAffiche2" style="background-color: #ed6454">
//               <p class="text">${element}</p>
//               <i class="fa fa-times close" aria-hidden="true"></i>
//               </div>
//               `;
//           //-------------------recherche- avec le click---------------------
//           //--les id des elemntsque j'ai cliquer--
//           let AllTheIdFor = [];
//           const result = ArrayUstensiles.filter((item) => {
//             let thisId = item.id;
//             let Ustensil = [...new Set(item.ustensiles)];
//             Ustensil.forEach((Usten) => {
//               if (element == Usten) {
//                 AllTheIdFor.push(thisId);
//                 if (AllId[AllId.length - 1].element != element) {
//                   AllId.push({
//                     element: element,
//                     ids: AllTheIdFor,
//                   });
//                 }
//                 AllIdtoDisplays.push(thisId);
//               }
//             });
//           });
//           //--------------stocke les duplications------------
//           function getElementsWithMultipleOccurrences(arr) {
//             const occurrences = {};
//             // Compter les occurrences de chaque élément
//             arr.forEach((element) => {
//               if (occurrences[element]) {
//                 occurrences[element]++;
//               } else {
//                 occurrences[element] = 1;
//               }
//             });
//             // Filtrer les éléments avec une occurrence supérieure à 1
//             Object.keys(occurrences).forEach((key) => {
//               if (occurrences[key] > 1) {
//                 result.push(Number(key)); // Convertir la clé en nombre (car les clés d'objets sont des chaînes de caractères)
//               }
//             });
//             return result;
//           }
//           const duplicateElementa = getElementsWithMultipleOccurrences(
//             AllIdtoDisplays
//           );
//           //------------delete dupplication des id-------
//           let AllIdtoDisplaysNotDupliquate = [...new Set(AllIdtoDisplays)];
//           section.innerHTML = "";
//           //-------afficher les resultats obtenu----------
//           function AfficheBlockResultat() {
//             for (i = 0; i < recipes.length; i++) {
//               let ingredient = recipes[i].ingredients;
//               let textIngre = "";
//               ingredient.forEach((ingred) => {
//                 textIngre = textIngre + " " + ingred.ingredient + "    :";
//                 if (ingred.quantity != undefined) {
//                   textIngre = textIngre + "" + ingred.quantity;
//                 }
//                 if (ingred.unit != undefined) {
//                   textIngre = textIngre + " " + ingred.unit + "<br/>";
//                 }
//               });
//               if (AllIdtoDisplaysNotDupliquate.includes(recipes[i].id)) {
//                 section.innerHTML += `
//                           <div class="containerAll">
//                               <div class="imgNone"></div>
//                               <div class="lesInfos">
//                                   <div class="tittle_time">
//                                       <div class="tittle">
//                                           <h3>${recipes[i].name}</h3>
//                                       </div>
//                                       <div class="time">
//                                           <i class="fa fa-clock-o" aria-hidden="true"></i>
//                                           <p>${recipes[i].time} min</p>
//                                       </div>
//                                   </div>
//                                   <div class="ingredient_demo">
//                                       <div class="ingredient"> 
//                                         <p> ${textIngre} </p>  
//                              </div>
//                           <div class="demo">
//                           ${recipes[i].description}
//                          </div>
//                         </div>
//                     </div>
//                    </div>
//                  `;
//               }
//             }
//           }
//           if (result == "") {
//             AfficheBlockResultat();
//           } else {
//             //console.log(duplicateElementa);
//             for (i = 0; i < recipes.length; i++) {
//               let ingredient = recipes[i].ingredients;
//               let textIngre = "";
//               ingredient.forEach((ingred) => {
//                 textIngre = textIngre + " " + ingred.ingredient + "    :";
//                 if (ingred.quantity != undefined) {
//                   textIngre = textIngre + "" + ingred.quantity;
//                 }
//                 if (ingred.unit != undefined) {
//                   textIngre = textIngre + " " + ingred.unit + "<br/>";
//                 }
//               });
//               if (duplicateElementa.includes(recipes[i].id)) {
//                 section.innerHTML += `
//                             <div class="containerAll">
//                                 <div class="imgNone"></div>
//                                 <div class="lesInfos">
//                                     <div class="tittle_time">
//                                         <div class="tittle">
//                                 <h3>${recipes[i].name}</h3>
//                                    </div>
//                                    <div class="time">
//                                             <i class="fa fa-clock-o" aria-hidden="true"></i>
//                                        <p>${recipes[i].time} min</p>
//                                    </div>
//                               </div>
//                               <div class="ingredient_demo">
//                                <div class="ingredient"> 
//                                 <p> ${textIngre} </p>  
//                                  </div>
//                              <div class="demo">
//                           ${recipes[i].description}
//                          </div>
//                     </div>
//                 </div>
//                 </div>
//                 `;
//               }
//             }
//           }
//           // -----------------Décochez tous les boutons de catégorie----------
//           function decocherSearch() {
//             const closes = document.querySelectorAll(".fa-times");
//             closes.forEach((closes) => {
//               closes.addEventListener("click", (e) => {
//                 let siblingElement = e.target.parentElement;
//                 siblingElement.remove();
//                 let siblingElementText =
//                   e.target.parentElement.firstChild.nextSibling.textContent;
//                 //------------les id qu'on doit delete----------------
//                 let IdYToDelete = [];
//                 const result = ArrayUstensiles.filter((item) => {
//                   let thisId = item.id;
//                   let Ustensil = [...new Set(item.ustensiles)];
//                   Ustensil.forEach((Usten) => {
//                     if (siblingElementText == Usten) {
//                       IdYToDelete.push(thisId);
//                     }
//                   });
//                 });
//                 IdYToDelete.forEach((IdYToDeleteUss) => {
//                   AllIdtoDisplays.pop(IdYToDeleteUss);
//                   if (afficheClickIng.children.length == 1) {
//                     section.innerHTML = "";
//                     console.log(AllIdtoDisplays);
//                     for (i = 0; i < recipes.length; i++) {
//                       let ingredient = recipes[i].ingredients;
//                       let textIngre = "";
//                       ingredient.forEach((ingred) => {
//                         textIngre =
//                           textIngre + " " + ingred.ingredient + "    :";
//                         if (ingred.quantity != undefined) {
//                           textIngre = textIngre + "" + ingred.quantity;
//                         }
//                         if (ingred.unit != undefined) {
//                           textIngre = textIngre + " " + ingred.unit + "<br/>";
//                         }
//                       });
//                       if (AllIdtoDisplays.includes(recipes[i].id)) {
//                         section.innerHTML += `
//                                   <div class="containerAll">
//                                       <div class="imgNone"></div>
//                                       <div class="lesInfos">
//                                           <div class="tittle_time">
//                                               <div class="tittle">
//                                                   <h3>${recipes[i].name}</h3>
//                                               </div>
//                                               <div class="time">
//                                                   <i class="fa fa-clock-o" aria-hidden="true"></i>
//                                                   <p>${recipes[i].time} min</p>
//                                               </div>
//                                           </div>
//                                           <div class="ingredient_demo">
//                                               <div class="ingredient"> 
//                                                 <p> ${textIngre} </p>  
//                                               </div>
//                                               <div class="demo">
//                                   ${recipes[i].description}
//                                 </div>
//                              </div>
//                            </div>
//                          </div>
//                      `;
//                       }
//                     }
//                   }
//                   //----function DisplayduplicateElementaAfterDelete---------
//                   function DisplayduplicateElementaAfterDelete() {
//                     duplicateElementa.filter((item) => {
//                       if (IdYToDeleteUss == item) {
//                         duplicateElementa.pop(IdYToDeleteUss);
//                         console.log(duplicateElementa);
//                         if (afficheClickIng.children.length > 1) {
//                           section.innerHTML = "";
//                           for (i = 0; i < recipes.length; i++) {
//                             let ingredient = recipes[i].ingredients;
//                             let textIngre = "";
//                             ingredient.forEach((ingred) => {
//                               textIngre =
//                                 textIngre + " " + ingred.ingredient + "    :";
//                               if (ingred.quantity != undefined) {
//                                 textIngre = textIngre + "" + ingred.quantity;
//                               }
//                               if (ingred.unit != undefined) {
//                                 textIngre =
//                                   textIngre + " " + ingred.unit + "<br/>";
//                               }
//                             });
//                             if (duplicateElementa.includes(recipes[i].id)) {
//                               section.innerHTML += `
//                                         <div class="containerAll">
//                                             <div class="imgNone"></div>
//                                             <div class="lesInfos">
//                                                 <div class="tittle_time">
//                                                     <div class="tittle">
//                                                         <h3>${recipes[i].name}</h3>
//                                                     </div>
//                                                     <div class="time">
//                                                         <i class="fa fa-clock-o" aria-hidden="true"></i>
//                                                         <p>${recipes[i].time} min</p>
//                                                     </div>
//                                                 </div>
//                                                 <div class="ingredient_demo">
//                                                     <div class="ingredient"> 
//                                                       <p> ${textIngre} </p>  
//                                                     </div>
//                                                     <div class="demo">
//                                         ${recipes[i].description}
//                                       </div>
//                                    </div>
//                                  </div>
//                                </div>
//                            `;
//                             }
//                           }
//                         }
//                       }
//                     });
//                   }
//                   DisplayduplicateElementaAfterDelete();
//                   if (AllIdtoDisplays == "") {
//                     return newFuntion();
//                   }
//                 });
//               });
//             });
//           }
//           decocherSearch();
//         });
//       });
//     });
//   }
// });
"use strict";