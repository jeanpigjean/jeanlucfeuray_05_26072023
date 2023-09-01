//=============================== modele html ====================================================//
fetch('http://localhost:3000/api/products')//je récupére les données
.then(data => data.json())//je les appel data et les converties en jason
.then(data =>{//j'appel mon objet card et lui aplique la fonction qui suit

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
console.log(tata);*/


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
} */

//si plusieurs produits

/*
if (combien_article > 1) {
  console.log("il y a des plusieur produits");
} else {
  console.log("il n'y a 1 produit");
  //afficher produit
}

console.log(data);
console.log(data[0]);
console.log(data[0]["_id"]);*/






/*
let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

//creer les étapes


//tableau des achats id color qt boucle + coucle
//combien d'articles ...
let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

let number_articles = monPanier[0]["idlocal"];
console.log(number_articles);
*/



//tri




//<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">

let mon_Panier = document.getElementById("cart__items");

let productArticle = document.createElement("article");

mon_Panier.appendChild(productArticle);
productArticle.classList.add("cart__item");
productArticle.setAttribute('id', data[0]["_id"]);
productArticle.setAttribute('data', 'color');


//div class="cart__item__img" + img
let div_image = document.createElement("div");
productArticle.appendChild(div_image);
div_image.classList.add("cart__item__img");

let image = document.createElement("img");
image.src =  data[0]["imageUrl"];//data[i].imageUrl;
image.alt =  data[0]["altTxt"];"Photographie d'un canapé";//data[i].altTxt;
div_image.appendChild(image);


//div class="cart__item__content"> et dedans 
//div class="cart__item__img" + img
let div_content = document.createElement("div");
productArticle.appendChild(div_content);
div_content.classList.add("cart__item__content");



let div_description = document.createElement("div");
div_content.appendChild(div_description);
div_description.classList.add("cart__item__content__description");
//div_description.innerHTML = '<h2>Kanap Sinopé</h2><p>Blue</p><p>1849,00 €</p>';
//h2 p color  p prix
let descript_h = document.createElement("h2");
let descript_p = document.createElement("p");
let descript_2p = document.createElement("p");
div_description.appendChild(descript_h);//h2 name
descript_h.innerHTML = data[0]["name"];
//div_description.descript_h = 

div_description.appendChild(descript_p);//p color
descript_p.innerHTML = myColor;   //monPanier[0]["colorlocal"];localstorage
//monPanier[0]["colorlocal"]

div_description.appendChild(descript_2p);
let prix = data[0]["price"];
console.log(prix);
descript_2p.innerHTML = prix + " " +"€";
//descript_p.innerHTML = data[0]["colors"][0];
//let tata = data[0]["colors"][1];

/*
div_description.appendChild(descript_2p);//p prix
descript_p.innerHTML = data[0]["price"] + " " + "€";*/



let div_settings = document.createElement("div");
div_content.appendChild(div_settings);
div_settings.classList.add("cart__item__content__settings");





let cart_quantiti = document.createElement("div");

div_settings.appendChild(cart_quantiti);
cart_quantiti.classList.add("cart__item__content__settings__quantity");




let quanti_p = document.createElement("p");
quanti_p.innerHTML = "Qté : "
cart_quantiti.appendChild(quanti_p);

let quanti_input = document.createElement("input");
cart_quantiti.appendChild(quanti_input);
quanti_input.type = "number";//
quanti_input.classList.add("itemQuantity");// class="itemQuantity" name="itemQuantity"
quanti_input.name = "itemQuantity";// name="itemQuantity"
quanti_input.min = 1;//min max 1 100
quanti_input.max = 100;//min max 1 100
//quanti_input.value = "42";//value 42
//quanti_input.Value = "42";
quanti_input.setAttribute('value', combien_article);//du local storage console.log(combien_article + " " + "article dans le panier");//combien de kanap 2


//cart_quantiti.innerHTML = 1;//ATTENTION IL FAUT UN LISTE
//<div class="cart__item__content__settings__quantity">
//<p>Qté : </p>
//<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"></div>



let cart_supp = document.createElement("div");
div_settings.appendChild(cart_supp);

cart_supp.classList.add("cart__item__content__settings__delete");
//bouton p class deleteItem
//cart_supp.innerHTML = 'Supprimer';//c'est un bouton
let cart_delet = document.createElement("p");
cart_supp.appendChild(cart_delet);

cart_delet.classList.add("deleteItem");
cart_delet.innerHTML = "Supprimer";

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

/*
<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                
    <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>

    <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>

                  <div class="cart__item__content__settings">
                    
                      <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                      </div>

                      <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                      </div>

                  </div>
      </div>
</article> 
article
2 div
1 div
2 div
-->
*/

// creation d'une boucle for (let card of card){let article = new article(json.article);}//création de la card
/*for (let i = 0; i < data.length; i++) { 
            let productLink = document.createElement("a");
            document.getElementById("cart__items").appendChild(productLink);
            
            // creation attribut href (de la balise a)
            productLink.href = `product.html?id=${data[i]._id}`;

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = data[i].imageUrl;
            productImg.alt = data[i].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = data[i].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = data[i].description;
}
*/

});
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
//====================== ordre de travail==========================================================//
// 1)
// 2)
// 3)
// 4)
// 5)
// 6)
//=================================================================================================//