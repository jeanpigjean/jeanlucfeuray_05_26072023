//867 lignes -------  343 arrivé 
//=============================== modele html ====================================================//
fetch('http://localhost:3000/api/products')//je récupére les données
  .then(data => data.json())//je les appel data et les converties en jason
  .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit

    
    const produitLocalStorage = JSON.parse(localStorage.getItem("panier"));

    let Qt = "";
    let prix = 0;
    console.log(Qt);
    console.log(prix);

    for (const [key, value] of Object.entries(produitLocalStorage)) {
      //console.log(`${key}: ${value}`);
      //console.log(`${key}`);
      //console.log(`${value}`);

      fetch("http://localhost:3000/api/products/" + key)
      .then((response) => response.json())
      .then(product => {
      console.log(product.imageUrl);//adresse image
        
      for (const [cle, valeur] of Object.entries(value)) {
      //console.log(`${cle}: ${valeur}`);
      //colors qt price
        console.log(`${cle}`);//color blue ok
        console.log(`${valeur}`);//quantité ok
      

      
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

    let totalQt = document.getElementById("totalQuantity");
          totalQt.innerHTML = "qt";
          let totalPrix = document.getElementById("totalPrice");
          totalPrix.innerHTML = "px";
      
      }//2 for
      });//fetch
      }//1 for
      });//fetch


//https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name

   
/*
Sur cette page, l’utilisateur va pouvoir modifier la quantité d’un produit de son panier ; à ce
moment, le total du panier devra bien se mettre à jour.
L’utilisateur aura aussi la possibilité de supprimer un produit de son panier, le produit devra
donc disparaître de la page.
Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type
de données avant l’envoi à l’API. Il ne serait par exemple pas recevable d’accepter un
prénom contenant des chiffres, ou une adresse e-mail ne contenant pas de symbole “@”. En
cas de problème de saisie, un message d’erreur devra être affiché en dessous du champ
correspondant.
Attention à ne pas stocker le prix des articles en local. Les données stockées en local ne
sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même.
*/

//}


//tuto regex https://www.youtube.com/watch?v=CreEhp8I-XA
//https://regex101.com/
///https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
// regex
//function filtrer() {
  //let errors = "Erreur veuillez modifiez la saisie";


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
//======================= FIN REGEX OK================================================
//=======================================================================
/*     IMPORTANT
let tutu = data[2]["colors"]["1"]; POUR ATTRAPPER TABLEAU DANS TABLEAU
console.log(tutu);
*/

/*let monPanier = JSON.parse(localStorage.getItem("panier"));
let titi = monPanier[0][""]
console.log(monPanier);*/
//data fetch
//panier
//id: "107fb5b75607497b96722bda5b504926", name: "Kanap Sinopé", price: 1849, … }
//id name price
//[{"idlocal":"107fb5b75607497b96722bda5b504926","colorlocal":"Blue","qtlocal":"1"}]


/*acces tout dans localstorage IMPORTANT
console.log(data);
console.log(data.length);
console.log(data[1]);
let tata = data[0]["colors"][1];
console.log(tata);


//récuperer mon panier
let monPanier = JSON.parse(localStorage.getItem("panier"));
console.log(monPanier); // affichera le array
let combien_article = monPanier.length;//combien de kanap 2
console.log(combien_article + " " + "article dans le panier");//combien de kanap 2
console.log("id de mon panier" + " " + monPanier[0]["idlocal"]);
console.log("couleur" + " " + monPanier[0]["colorlocal"]);
let myColor = monPanier[0]["colorlocal"];
console.log("ma couleur" + " " + myColor);
console.log("quantité" + " " + monPanier[0]["qtlocal"]);

/*for (let i = 0; i < monPanier.length; i++) {
console.log(i);
console.log(monPanier[i]["idlocal"]);
}

//si plusieurs produits


if (combien_article > 1) {
  console.log("il y a des plusieur produits");
} else {
  console.log("il n'y a 1 produit");
  //afficher produit
}

console.log(data);
console.log(data[0]);
console.log(data[0]["_id"]);

let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

//creer les étapes
//tableau des achats id color qt boucle + coucle
//combien d'articles ...
let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

let number_articles = monPanier[0]["idlocal"];
console.log(number_articles);

//tri
//<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">

//fonction supprimer
//supprimer local storage storage.removeItem(nomCle); cle panier
//onclick vanilla

//const myButton = document.getElementsByClassName("deleteItem");
//ca marche

function viderPanier() {
  //myButton.innerText = "button clicked";
  localStorage.removeItem("panier");
}

cart_delet.onclick = viderPanier;
*/
/*
<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
*/
//==================================================================================================// 
/*
Une page “panier”. Celle-ci contient plusieurs parties :

○ Un résumé des produits dans le panier, le prix total et la possibilité de
modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.

○ Un formulaire permettant de passer une commande. Les données du
formulaire doivent être correctes et bien formatées avant d'être renvoyées au
back-end. Par exemple, pas de chiffre dans un champ prénom

Sur cette page, l’utilisateur va pouvoir modifier la quantité d’un produit de son panier ; à ce
moment, le total du panier devra bien se mettre à jour.

L’utilisateur aura aussi la possibilité de supprimer un produit de son panier, le produit devra
donc disparaître de la page.

Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type
de données avant l’envoi à l’API. Il ne serait par exemple pas recevable d’accepter un
prénom contenant des chiffres, ou une adresse e-mail ne contenant pas de symbole “@”. En
cas de problème de saisie, un message d’erreur devra être affiché en dessous du champ
correspondant.
Attention à ne pas stocker le prix des articles en local. Les données stockées en local ne
sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même


Fonctionnement du panier
Dans le panier, les produits doivent toujours apparaître de manière regroupée par modèle et
par couleur.
Si un produit est ajouté dans le panier à plusieurs reprises, avec la même couleur, celui-ci
ne doit apparaître qu’une seule fois, mais avec le nombre d’exemplaires ajusté.
Si un produit est ajouté dans le panier à plusieurs reprises, mais avec des couleur
différentes, il doit apparaître en deux lignes distinctes avec la couleur et la quantité
correspondantes indiquées à chaque fois
*/


/*
Validation des données
Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName,
lastName, address, city et email. Le tableau des produits envoyé au back-end doit être un
array de strings product-ID. Les types de ces champs et leur présence doivent être validés
avant l’envoi des données au serveur.

5 champs firstName .... array de string product-ID

*/

//requete fetch post stop page controle form data redirection
/*
/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */