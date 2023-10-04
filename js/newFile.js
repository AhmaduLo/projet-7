// //-------------------------fecth ingredients----------------------------
// fetch("http://127.0.0.1:5500/data/recipes.json").then((res) => {
//   if (res.ok) {
//     res.json().then((data) => {
//       const recipes = data.recipes;
//       let ArrayRecipes = [{ id: "X" }];
//       let AllIngredient = [];
//       //   let ArrayRecipes = [{ id: "X" }]
//       //----functiopn affiche block in html-----------
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
//       newFuntion();
//       //----------------function-----extraireIngredien----------------------------
//       function extraireIngredien() {
//         for (i = 0; i < recipes.length; i++) {
//           let ArrayIngredients = [];
//           let ingredients = recipes[i].ingredients;
//           for (let a = 0; a < ingredients.length; a++) {
//             const ingredInner = ingredients[a].ingredient;
//             ArrayIngredients.push(ingredInner.toLowerCase());
//             AllIngredient.push(ingredInner.toLowerCase());
//             if (ArrayRecipes[ArrayRecipes.length - 1].id != recipes[i].id) {
//               ArrayRecipes.push({
//                 id: recipes[i].id,
//                 ingredient: ArrayIngredients,
//               });
//             }
//           }
//         }
//       }
//       extraireIngredien();
//       //-----------------suppresion des elements dupliquer--------------------
//       function deleteduplication() {
//         AllIngredientNondupliquate = [...new Set(AllIngredient)];
//         AllIngredientNondupliquate.forEach(
//           (AllIngredientNondupliquateForEach) => {
//             // Créez un élément p avec une classe "para1"
//             const paraElement = document.createElement("p");
//             paraElement.className = "para1";
//             paraElement.textContent = AllIngredientNondupliquateForEach;
//             // Ajoutez l'élément à la variable elementsPara1
//             elementsPara1.push(paraElement);
//             // Ajoutez l'élément à containt_info[0]
//             containt_info[0].appendChild(paraElement);
//           }
//         );
//       }
//       deleteduplication();
//       //-----------------affichage des blocs de recherche--------------------
//       let AllId = [{ element: "X", ids: [] }];
//       elementsPara1.map((item) => {
//         const mesPara = item;
//         mesPara.addEventListener("click", (e) => {
//           section.innerHTML = "";
//           const element = e.target.lastChild.textContent;
//           afficheClickIng.innerHTML += `
//             <div class="containeAffiche2" style="background-color: #3282f7">
//             <p class="text">${element}</p>
//             <i class="fa fa-times close" aria-hidden="true"></i>
//             </div>
//             `;
//           //-------------------recherche- avec le click---------------------
//           let AllTheIdFor = [];
//           const result = ArrayRecipes.filter((item) => {
//             let thisId = item.id;
//             let ingredients = [...new Set(item.ingredient)];
//             ingredients.forEach((Ingr) => {
//               if (element == Ingr) {
//                 AllTheIdFor.push(thisId);
//                 if (AllId[AllId.length - 1].element != element) {
//                   AllId.push({ element: element, ids: AllTheIdFor });
//                 }
//                 //---les id que je doit afficher---
//                 AllIdtoDisplays.push(thisId);
//               }
//             });
//           });
//           //------------delete dupplication des id-------
//           let AllIdtoDisplaysNotDupliquate = [...new Set(AllIdtoDisplays)];
//           section.innerHTML = "";
//           //-------afficher les resultats obtenu----------
//           function afficheBlockResultat() {
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
//               <div class="containerAll">
//                   <div class="imgNone"></div>
//                   <div class="lesInfos">
//                       <div class="tittle_time">
//                           <div class="tittle">
//                               <h3>${recipes[i].name}</h3>
//                           </div>
//                           <div class="time">
//                               <i class="fa fa-clock-o" aria-hidden="true"></i>
//                               <p>${recipes[i].time} min</p>
//                           </div>
        
//                       </div>
        
//                       <div class="ingredient_demo">
//                           <div class="ingredient"> 
//                             <p> ${textIngre} </p>  
//                           </div>
//                           <div class="demo">
//                           ${recipes[i].description}
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               `;
//               }
//             }
//           }
//           afficheBlockResultat();

//           // -----------------Décochez tous les boutons de catégorie----------
//           function decocherSearch() {
//             const closes = document.querySelectorAll(".fa-times");
//             closes.forEach((closes) => {
//               closes.addEventListener("click", (e) => {
//                 let siblingElement = e.target.parentElement;
//                 siblingElement.remove();
//                 let siblingElementText =
//                   e.target.parentElement.firstChild.nextSibling.textContent;
//                 section.innerHTML = "";
//                 //------------les id qu'on doit delete----------------
//                 let IdYToDelete = [];
//                 const result = ArrayRecipes.filter((item) => {
//                   let thisId = item.id;
//                   let ingredients = [...new Set(item.ingredient)];
//                   ingredients.forEach((Ingr) => {
//                     if (siblingElementText == Ingr) {
//                       IdYToDelete.push(thisId);
//                       retrun;
//                       afficheBlockResultat();
//                     }
//                   });
//                 });
//               });
//             });
//           }
//           decocherSearch();
//         });
//         //-----------
//       });

//       //-------------------------------------
//       //----------------------------------
//     });
//     //---fin fetch
//   }
// });
