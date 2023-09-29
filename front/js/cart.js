//867 lignes -------  157 arrivé 
//=============================== modele html ====================================================//
fetch('http://localhost:3000/api/products')//je récupére les données
  .then(data => data.json())//je les appel data et les converties en jason
  .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit

    const produitLocalStorage = JSON.parse(localStorage.getItem("panier"));

    let totalPx = [];
    let totalQant = [];
    console.log(totalPx);
    console.log(totalQant);

    for (const [key, value] of Object.entries(produitLocalStorage)) {

      fetch("http://localhost:3000/api/products/" + key)
        .then((response) => response.json())
        .then(product => {
          console.log(product.imageUrl);//adresse image

          for (const [cle, valeur] of Object.entries(value)) {
            //console.log(`${cle}: ${valeur}`);
            //colors qt price
            //console.log(`${cle}`);//color blue ok
            //console.log(`${valeur}`);//quantité ok

            let cart__item = document.getElementById("cart__items");

            let productArticle = document.createElement("article");//1 declinaison
            productArticle.classList.add("cart__item");
            cart__item.appendChild(productArticle);

            //productArticle.setAttribute('id', data[0]["_id"]);
            //productArticle.setAttribute('data', 'color');
            cart__item.appendChild(productArticle);

            let div_image = document.createElement("div");//2
            div_image.classList.add("cart__item__img");
            productArticle.appendChild(div_image);

            let image = document.createElement("img");
            image.src = product.imageUrl;
            image.alt = product.altTxt;
            div_image.appendChild(image);

            let div_content = document.createElement("div");//3
            div_content.classList.add("cart__item__content");
            productArticle.appendChild(div_content);

            let div_description = document.createElement("div");//4
            div_description.classList.add("cart__item__content__description");
            div_content.appendChild(div_description);
            //<div class="cart__item__content__description">

            let descript_h = document.createElement("h2");
            descript_h.innerHTML = product.name;
            div_description.appendChild(descript_h);

            //2
            let prix = product.price;
            let descript_p = document.createElement("p");
            descript_p.innerHTML = `${cle}`;       //"Vert";
            div_description.appendChild(descript_p);
            let descript_2p = document.createElement("p");
            descript_2p.innerHTML = `${valeur}` * prix;//*`${valeur}`= qt
            div_description.appendChild(descript_2p);
            //console.log(product.price);

            let div_settings = document.createElement("div");//
            div_settings.classList.add("cart__item__content__settings");
            div_content.appendChild(div_settings);

            let cart_quantiti = document.createElement("div");
            cart_quantiti.classList.add("cart__item__content__settings__quantity");
            div_settings.appendChild(cart_quantiti);

            let quanti_input = document.createElement("input");
            quanti_input.type = "number";//
            quanti_input.classList.add("itemQuantity");// class="itemQuantity" name="itemQuantity"
            quanti_input.name = "itemQuantity";// name="itemQuantity"
            quanti_input.min = 1;//min max 1 100
            quanti_input.max = 100;//min max 1 100
            quanti_input.value = `${valeur}`;//value 42
            cart_quantiti.appendChild(quanti_input);
            //console.log(quanti_input.value);//

            let cart_supp = document.createElement("div");
            cart_supp.classList.add("cart__item__content__settings__delete");
            div_settings.appendChild(cart_supp);

            //bouton p class deleteItem
            let cart_delet = document.createElement("p");
            cart_delet.classList.add("deleteItem");
            cart_delet.innerHTML = "Supprimer";
            cart_supp.appendChild(cart_delet);

            let nbpx = parseInt(descript_2p.innerHTML);
            totalPx.push(nbpx);
            let sumpx = 0;
            for (let i = 0; i < totalPx.length; i++) {
              sumpx += totalPx[i];
            }

            let nbqt = parseInt(quanti_input.value);
            totalQant.push(nbqt);
            let sumqt = 0;
            for (let i = 0; i < totalQant.length; i++) {
              sumqt += totalQant[i];
            }

            //console.log(sumpx);//ok 10046€
            //console.log(sumqt);//ok 4
            let totalQt = document.getElementById("totalQuantity");
            totalQt.innerHTML = sumqt;
            let totalPrix = document.getElementById("totalPrice");
            totalPrix.innerHTML = sumpx;

          }//2 for
        });//fetch
    }//1 for
  });//fetch

//===================================================================
// REGEX OK
/*
  let  docprenom = document.getElementById("firstName").value;//saisie
  let  docnom = document.getElementById("lastName").value;
  let  docadresse = document.getElementById("address").value;
  let  docville = document.getElementById("city").value;
  let  docemail = document.getElementById("email").value;

  let  docprenomerr = document.getElementById("firstNameErrorMsg");//renvoie
  let  docnomerr = document.getElementById("lastNameErrorMsg");
  let  docadresseerr = document.getElementById("addressErrorMsg");
  let  docvilleerr = document.getElementById("cityErrorMsg");
  let  docemailerr = document.getElementById("emailErrorMsg");

  let expprenom = /^[^0-9]+$/;//tout sauf chiffres       tilde &#126; | ~
  let expadresse = /^[A-Za-z0-9 -éèçïëî]+$/;//"^[^0-9]+$"
  let expville = /^[A-Za-z -]+$/;
  let expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;//

console.log(expprenom.test(docprenom));//true false
console.log(expnom.test(docnom));//true false
console.log(expadresse.test(docadresse));//true false
console.log(expville.test(docville));//true false
console.log(expemail.test(docemail));//true false


if (expprenom.test(docprenom) === true) {} else {docprenomerr.innerHTML = errors;}
if (expnom.test(docnom) === true) {} else {docnomerr.innerHTML = errors;}
if (expadresse.test(docadresse) === true) {} else {docadresseerr.innerHTML = errors;}
if (expville.test(docville) === true) {} else {docvilleerr.innerHTML = errors;}
if (expemail.test(docemail) === true) {} else {docemailerr.innerHTML = errors;}
*/
//======================= FIN REGEX OK=============================================
//=================================================================================